//! Health / complexity analysis report types.
//!
//! Separated from the `health` command module so that report formatters
//! (which are compiled as part of both the lib and bin targets) can
//! reference these types without pulling in binary-only dependencies.

/// Result of complexity analysis for reporting.
#[derive(Debug, serde::Serialize)]
pub struct HealthReport {
    /// Functions exceeding thresholds.
    pub findings: Vec<HealthFinding>,
    /// Summary statistics.
    pub summary: HealthSummary,
}

/// A single function that exceeds a complexity threshold.
#[derive(Debug, serde::Serialize)]
pub struct HealthFinding {
    /// Absolute file path.
    pub path: std::path::PathBuf,
    /// Function name.
    pub name: String,
    /// 1-based line number.
    pub line: u32,
    /// 0-based column.
    pub col: u32,
    /// Cyclomatic complexity.
    pub cyclomatic: u16,
    /// Cognitive complexity.
    pub cognitive: u16,
    /// Number of lines in the function.
    pub line_count: u32,
    /// Which threshold was exceeded.
    pub exceeded: ExceededThreshold,
}

/// Which complexity threshold was exceeded.
#[derive(Debug, serde::Serialize)]
#[serde(rename_all = "snake_case")]
pub enum ExceededThreshold {
    /// Only cyclomatic exceeded.
    Cyclomatic,
    /// Only cognitive exceeded.
    Cognitive,
    /// Both thresholds exceeded.
    Both,
}

/// Summary statistics for the health report.
#[derive(Debug, serde::Serialize)]
pub struct HealthSummary {
    /// Number of files analyzed.
    pub files_analyzed: usize,
    /// Total number of functions found.
    pub functions_analyzed: usize,
    /// Number of functions above threshold.
    pub functions_above_threshold: usize,
    /// Configured cyclomatic threshold.
    pub max_cyclomatic_threshold: u16,
    /// Configured cognitive threshold.
    pub max_cognitive_threshold: u16,
}
