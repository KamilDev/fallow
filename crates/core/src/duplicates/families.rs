//! Clone family grouping and refactoring suggestion generation.
//!
//! Groups clone groups by the set of files they span. When multiple clone groups
//! are duplicated across the same set of files, they form a "clone family" —
//! indicating a deeper structural relationship that should be refactored together.

use std::collections::BTreeSet;
use std::path::PathBuf;

use super::types::{CloneFamily, CloneGroup, RefactoringKind, RefactoringSuggestion};

/// The line threshold above which we suggest extracting a module rather than a function.
const MODULE_EXTRACTION_THRESHOLD: usize = 50;

/// Group clone groups into families by their file set.
///
/// Each family contains all clone groups that are duplicated across exactly the
/// same set of files. Families are sorted by total duplicated lines (descending).
pub fn group_into_families(clone_groups: &[CloneGroup]) -> Vec<CloneFamily> {
    if clone_groups.is_empty() {
        return Vec::new();
    }

    // Build a map from file-set -> list of clone groups
    let mut family_map: Vec<(BTreeSet<PathBuf>, Vec<CloneGroup>)> = Vec::new();

    for group in clone_groups {
        let file_set: BTreeSet<PathBuf> = group.instances.iter().map(|i| i.file.clone()).collect();

        // Find or create the family for this file set
        if let Some(entry) = family_map.iter_mut().find(|(fs, _)| *fs == file_set) {
            entry.1.push(group.clone());
        } else {
            family_map.push((file_set, vec![group.clone()]));
        }
    }

    let mut families: Vec<CloneFamily> = family_map
        .into_iter()
        .map(|(file_set, groups)| {
            let total_duplicated_lines: usize = groups.iter().map(|g| g.line_count).sum();
            let total_duplicated_tokens: usize = groups.iter().map(|g| g.token_count).sum();
            let suggestions = generate_suggestions(&file_set, &groups, total_duplicated_lines);

            CloneFamily {
                files: file_set.into_iter().collect(),
                groups,
                total_duplicated_lines,
                total_duplicated_tokens,
                suggestions,
            }
        })
        .collect();

    // Sort by total duplicated lines descending (most impactful families first)
    families.sort_by(|a, b| {
        b.total_duplicated_lines
            .cmp(&a.total_duplicated_lines)
            .then(b.groups.len().cmp(&a.groups.len()))
    });

    families
}

/// Generate refactoring suggestions for a clone family.
fn generate_suggestions(
    file_set: &BTreeSet<PathBuf>,
    groups: &[CloneGroup],
    total_duplicated_lines: usize,
) -> Vec<RefactoringSuggestion> {
    let mut suggestions = Vec::new();

    // Determine if files are cross-directory
    let directories: BTreeSet<_> = file_set
        .iter()
        .filter_map(|p| p.parent().map(|d| d.to_path_buf()))
        .collect();
    let is_cross_directory = directories.len() > 1;

    if total_duplicated_lines >= MODULE_EXTRACTION_THRESHOLD {
        // Large amount of shared code -> suggest extracting a shared module
        let file_names: Vec<_> = file_set
            .iter()
            .filter_map(|p| p.file_name().map(|n| n.to_string_lossy().to_string()))
            .collect();

        let location_hint = if is_cross_directory {
            "a shared directory".to_string()
        } else {
            directories.iter().next().map_or_else(
                || "the same directory".to_string(),
                |d| format!("{}", d.display()),
            )
        };

        // (instance_count - 1) copies of each group's lines can be eliminated
        let estimated_savings: usize = groups
            .iter()
            .map(|g| g.line_count * (g.instances.len().saturating_sub(1)))
            .sum();

        suggestions.push(RefactoringSuggestion {
            kind: RefactoringKind::ExtractModule,
            description: format!(
                "Extract {} shared clone group{} ({} lines) from {} into {}",
                groups.len(),
                if groups.len() == 1 { "" } else { "s" },
                total_duplicated_lines,
                file_names.join(", "),
                location_hint,
            ),
            estimated_savings,
        });
    } else {
        // Smaller clones -> suggest per-group function extraction
        for group in groups {
            let estimated_savings = group.line_count * (group.instances.len().saturating_sub(1));
            let file_names: Vec<_> = group
                .instances
                .iter()
                .filter_map(|i| i.file.file_name().map(|n| n.to_string_lossy().to_string()))
                .collect();

            suggestions.push(RefactoringSuggestion {
                kind: RefactoringKind::ExtractFunction,
                description: format!(
                    "Extract shared function ({} lines) from {}",
                    group.line_count,
                    file_names.join(", "),
                ),
                estimated_savings,
            });
        }
    }

    suggestions
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::duplicates::types::CloneInstance;

    fn instance(file: &str, start: usize, end: usize) -> CloneInstance {
        CloneInstance {
            file: PathBuf::from(file),
            start_line: start,
            end_line: end,
            start_col: 0,
            end_col: 0,
            fragment: String::new(),
        }
    }

    #[test]
    fn empty_groups_produce_no_families() {
        assert!(group_into_families(&[]).is_empty());
    }

    #[test]
    fn single_group_produces_one_family() {
        let groups = vec![CloneGroup {
            instances: vec![instance("src/a.ts", 1, 10), instance("src/b.ts", 1, 10)],
            token_count: 30,
            line_count: 10,
        }];

        let families = group_into_families(&groups);
        assert_eq!(families.len(), 1);
        assert_eq!(families[0].groups.len(), 1);
        assert_eq!(families[0].files.len(), 2);
        assert_eq!(families[0].total_duplicated_lines, 10);
    }

    #[test]
    fn groups_sharing_same_files_form_one_family() {
        let groups = vec![
            CloneGroup {
                instances: vec![instance("src/a.ts", 1, 10), instance("src/b.ts", 1, 10)],
                token_count: 30,
                line_count: 10,
            },
            CloneGroup {
                instances: vec![instance("src/a.ts", 20, 30), instance("src/b.ts", 20, 30)],
                token_count: 30,
                line_count: 11,
            },
        ];

        let families = group_into_families(&groups);
        assert_eq!(families.len(), 1);
        assert_eq!(families[0].groups.len(), 2);
        assert_eq!(families[0].total_duplicated_lines, 21);
    }

    #[test]
    fn groups_with_different_files_form_separate_families() {
        let groups = vec![
            CloneGroup {
                instances: vec![instance("src/a.ts", 1, 10), instance("src/b.ts", 1, 10)],
                token_count: 30,
                line_count: 10,
            },
            CloneGroup {
                instances: vec![instance("src/c.ts", 1, 10), instance("src/d.ts", 1, 10)],
                token_count: 30,
                line_count: 10,
            },
        ];

        let families = group_into_families(&groups);
        assert_eq!(families.len(), 2);
    }

    #[test]
    fn families_sorted_by_total_lines_descending() {
        let groups = vec![
            CloneGroup {
                instances: vec![instance("src/a.ts", 1, 5), instance("src/b.ts", 1, 5)],
                token_count: 15,
                line_count: 5,
            },
            CloneGroup {
                instances: vec![instance("src/c.ts", 1, 20), instance("src/d.ts", 1, 20)],
                token_count: 60,
                line_count: 20,
            },
        ];

        let families = group_into_families(&groups);
        assert_eq!(families.len(), 2);
        assert_eq!(families[0].total_duplicated_lines, 20);
        assert_eq!(families[1].total_duplicated_lines, 5);
    }

    #[test]
    fn large_family_gets_extract_module_suggestion() {
        let groups = vec![
            CloneGroup {
                instances: vec![instance("src/a.ts", 1, 30), instance("lib/b.ts", 1, 30)],
                token_count: 100,
                line_count: 30,
            },
            CloneGroup {
                instances: vec![instance("src/a.ts", 40, 65), instance("lib/b.ts", 40, 65)],
                token_count: 80,
                line_count: 26,
            },
        ];

        let families = group_into_families(&groups);
        assert_eq!(families.len(), 1);
        assert!(!families[0].suggestions.is_empty());
        assert_eq!(
            families[0].suggestions[0].kind,
            RefactoringKind::ExtractModule
        );
    }

    #[test]
    fn small_family_gets_extract_function_suggestion() {
        let groups = vec![CloneGroup {
            instances: vec![instance("src/a.ts", 1, 10), instance("src/b.ts", 1, 10)],
            token_count: 30,
            line_count: 10,
        }];

        let families = group_into_families(&groups);
        assert_eq!(families.len(), 1);
        assert!(!families[0].suggestions.is_empty());
        assert_eq!(
            families[0].suggestions[0].kind,
            RefactoringKind::ExtractFunction
        );
    }
}
