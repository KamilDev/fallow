use std::path::PathBuf;

use serde::Serialize;

// Re-export the canonical types from fallow-config.
pub use fallow_config::{DetectionMode, DuplicatesConfig};

/// A single instance of duplicated code at a specific location.
#[derive(Debug, Clone, Serialize)]
pub struct CloneInstance {
    /// Path to the file containing this clone instance.
    pub file: PathBuf,
    /// 1-based start line of the clone.
    pub start_line: usize,
    /// 1-based end line of the clone.
    pub end_line: usize,
    /// 0-based start column.
    pub start_col: usize,
    /// 0-based end column.
    pub end_col: usize,
    /// The actual source code fragment.
    pub fragment: String,
}

/// A group of code clones -- the same (or normalized-equivalent) code appearing in multiple places.
#[derive(Debug, Clone, Serialize)]
pub struct CloneGroup {
    /// All instances where this duplicated code appears.
    pub instances: Vec<CloneInstance>,
    /// Number of tokens in the duplicated block.
    pub token_count: usize,
    /// Number of lines in the duplicated block.
    pub line_count: usize,
}

/// Overall duplication analysis report.
#[derive(Debug, Clone, Serialize)]
pub struct DuplicationReport {
    /// All detected clone groups.
    pub clone_groups: Vec<CloneGroup>,
    /// Aggregate statistics.
    pub stats: DuplicationStats,
}

/// Aggregate duplication statistics.
#[derive(Debug, Clone, Serialize)]
pub struct DuplicationStats {
    /// Total files analyzed.
    pub total_files: usize,
    /// Files containing at least one clone instance.
    pub files_with_clones: usize,
    /// Total lines across all analyzed files.
    pub total_lines: usize,
    /// Lines that are part of at least one clone.
    pub duplicated_lines: usize,
    /// Total tokens across all analyzed files.
    pub total_tokens: usize,
    /// Tokens that are part of at least one clone.
    pub duplicated_tokens: usize,
    /// Number of clone groups found.
    pub clone_groups: usize,
    /// Total clone instances across all groups.
    pub clone_instances: usize,
    /// Percentage of duplicated lines (0.0 - 100.0).
    pub duplication_percentage: f64,
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn default_config_values() {
        let config = DuplicatesConfig::default();
        assert!(config.enabled);
        assert_eq!(config.mode, DetectionMode::Mild);
        assert_eq!(config.min_tokens, 50);
        assert_eq!(config.min_lines, 5);
        assert_eq!(config.threshold, 0.0);
        assert!(config.ignore.is_empty());
        assert!(!config.skip_local);
    }

    #[test]
    fn detection_mode_display() {
        assert_eq!(DetectionMode::Strict.to_string(), "strict");
        assert_eq!(DetectionMode::Mild.to_string(), "mild");
        assert_eq!(DetectionMode::Weak.to_string(), "weak");
        assert_eq!(DetectionMode::Semantic.to_string(), "semantic");
    }

    #[test]
    fn detection_mode_from_str() {
        assert_eq!(
            "strict".parse::<DetectionMode>().unwrap(),
            DetectionMode::Strict
        );
        assert_eq!(
            "mild".parse::<DetectionMode>().unwrap(),
            DetectionMode::Mild
        );
        assert_eq!(
            "weak".parse::<DetectionMode>().unwrap(),
            DetectionMode::Weak
        );
        assert_eq!(
            "semantic".parse::<DetectionMode>().unwrap(),
            DetectionMode::Semantic
        );
        assert!("unknown".parse::<DetectionMode>().is_err());
    }

    #[test]
    fn detection_mode_default_is_mild() {
        assert_eq!(DetectionMode::default(), DetectionMode::Mild);
    }

    #[test]
    fn config_deserialize_toml() {
        let toml_str = r#"
enabled = true
mode = "semantic"
min_tokens = 30
min_lines = 3
threshold = 5.0
skip_local = true
ignore = ["**/*.generated.ts"]
"#;
        let config: DuplicatesConfig = toml::from_str(toml_str).unwrap();
        assert!(config.enabled);
        assert_eq!(config.mode, DetectionMode::Semantic);
        assert_eq!(config.min_tokens, 30);
        assert_eq!(config.min_lines, 3);
        assert_eq!(config.threshold, 5.0);
        assert!(config.skip_local);
        assert_eq!(config.ignore, vec!["**/*.generated.ts"]);
    }

    #[test]
    fn config_deserialize_defaults() {
        let toml_str = "";
        let config: DuplicatesConfig = toml::from_str(toml_str).unwrap();
        assert!(config.enabled);
        assert_eq!(config.mode, DetectionMode::Mild);
        assert_eq!(config.min_tokens, 50);
        assert_eq!(config.min_lines, 5);
    }
}
