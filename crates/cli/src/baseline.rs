use std::collections::HashSet;
use std::path::Path;

use fallow_core::duplicates::DuplicationReport;

/// Baseline data for comparison.
#[derive(serde::Serialize, serde::Deserialize)]
pub(crate) struct BaselineData {
    pub unused_files: Vec<String>,
    pub unused_exports: Vec<String>,
    pub unused_types: Vec<String>,
    pub unused_dependencies: Vec<String>,
    pub unused_dev_dependencies: Vec<String>,
}

impl BaselineData {
    pub(crate) fn from_results(results: &fallow_core::results::AnalysisResults) -> Self {
        Self {
            unused_files: results
                .unused_files
                .iter()
                .map(|f| f.path.to_string_lossy().replace('\\', "/"))
                .collect(),
            unused_exports: results
                .unused_exports
                .iter()
                .map(|e| {
                    format!(
                        "{}:{}",
                        e.path.to_string_lossy().replace('\\', "/"),
                        e.export_name
                    )
                })
                .collect(),
            unused_types: results
                .unused_types
                .iter()
                .map(|e| {
                    format!(
                        "{}:{}",
                        e.path.to_string_lossy().replace('\\', "/"),
                        e.export_name
                    )
                })
                .collect(),
            unused_dependencies: results
                .unused_dependencies
                .iter()
                .map(|d| d.package_name.clone())
                .collect(),
            unused_dev_dependencies: results
                .unused_dev_dependencies
                .iter()
                .map(|d| d.package_name.clone())
                .collect(),
        }
    }
}

/// Filter results to only include issues not present in the baseline.
pub(crate) fn filter_new_issues(
    mut results: fallow_core::results::AnalysisResults,
    baseline: &BaselineData,
) -> fallow_core::results::AnalysisResults {
    let baseline_files: HashSet<&str> = baseline.unused_files.iter().map(|s| s.as_str()).collect();
    let baseline_exports: HashSet<&str> =
        baseline.unused_exports.iter().map(|s| s.as_str()).collect();
    let baseline_types: HashSet<&str> = baseline.unused_types.iter().map(|s| s.as_str()).collect();
    let baseline_deps: HashSet<&str> = baseline
        .unused_dependencies
        .iter()
        .map(|s| s.as_str())
        .collect();
    let baseline_dev_deps: HashSet<&str> = baseline
        .unused_dev_dependencies
        .iter()
        .map(|s| s.as_str())
        .collect();

    results
        .unused_files
        .retain(|f| !baseline_files.contains(f.path.to_string_lossy().replace('\\', "/").as_str()));
    results.unused_exports.retain(|e| {
        let key = format!(
            "{}:{}",
            e.path.to_string_lossy().replace('\\', "/"),
            e.export_name
        );
        !baseline_exports.contains(key.as_str())
    });
    results.unused_types.retain(|e| {
        let key = format!(
            "{}:{}",
            e.path.to_string_lossy().replace('\\', "/"),
            e.export_name
        );
        !baseline_types.contains(key.as_str())
    });
    results
        .unused_dependencies
        .retain(|d| !baseline_deps.contains(d.package_name.as_str()));
    results
        .unused_dev_dependencies
        .retain(|d| !baseline_dev_deps.contains(d.package_name.as_str()));
    results
}

/// Baseline data for duplication comparison.
///
/// Each clone group is keyed by a canonical string derived from its sorted
/// (file:start_line-end_line) instance locations. This allows stable comparison
/// across runs even if group ordering changes.
#[derive(serde::Serialize, serde::Deserialize)]
pub(crate) struct DuplicationBaselineData {
    /// Clone group keys: sorted list of "file:start-end" per group.
    pub clone_groups: Vec<String>,
}

impl DuplicationBaselineData {
    /// Build a duplication baseline from the current report.
    pub(crate) fn from_report(report: &DuplicationReport, root: &Path) -> Self {
        Self {
            clone_groups: report
                .clone_groups
                .iter()
                .map(|g| clone_group_key(g, root))
                .collect(),
        }
    }
}

/// Generate a stable key for a clone group based on its instance locations.
fn clone_group_key(group: &fallow_core::duplicates::CloneGroup, root: &Path) -> String {
    let mut parts: Vec<String> = group
        .instances
        .iter()
        .map(|i| {
            let relative = i
                .file
                .strip_prefix(root)
                .unwrap_or(&i.file)
                .to_string_lossy()
                .replace('\\', "/");
            format!("{}:{}-{}", relative, i.start_line, i.end_line)
        })
        .collect();
    parts.sort();
    parts.join("|")
}

/// Filter a duplication report to only include clone groups not present in the baseline.
pub(crate) fn filter_new_clone_groups(
    mut report: DuplicationReport,
    baseline: &DuplicationBaselineData,
    root: &Path,
) -> DuplicationReport {
    let baseline_keys: HashSet<&str> = baseline.clone_groups.iter().map(|s| s.as_str()).collect();

    report.clone_groups.retain(|g| {
        let key = clone_group_key(g, root);
        !baseline_keys.contains(key.as_str())
    });

    // Re-generate families from the filtered groups
    report.clone_families =
        fallow_core::duplicates::families::group_into_families(&report.clone_groups);

    // Re-compute stats for the filtered groups
    report.stats = recompute_stats(&report);

    report
}

/// Recompute duplication statistics after baseline filtering.
fn recompute_stats(report: &DuplicationReport) -> fallow_core::duplicates::DuplicationStats {
    let mut files_with_clones: HashSet<&Path> = HashSet::new();
    let mut duplicated_lines = 0usize;
    let mut duplicated_tokens = 0usize;
    let mut clone_instances = 0usize;

    for group in &report.clone_groups {
        for instance in &group.instances {
            files_with_clones.insert(&instance.file);
            duplicated_lines += instance.end_line.saturating_sub(instance.start_line) + 1;
        }
        duplicated_tokens += group.token_count * group.instances.len();
        clone_instances += group.instances.len();
    }

    fallow_core::duplicates::DuplicationStats {
        total_files: report.stats.total_files,
        files_with_clones: files_with_clones.len(),
        total_lines: report.stats.total_lines,
        duplicated_lines,
        total_tokens: report.stats.total_tokens,
        duplicated_tokens,
        clone_groups: report.clone_groups.len(),
        clone_instances,
        duplication_percentage: if report.stats.total_lines > 0 {
            (duplicated_lines as f64 / report.stats.total_lines as f64) * 100.0
        } else {
            0.0
        },
    }
}
