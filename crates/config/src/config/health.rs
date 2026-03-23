use schemars::JsonSchema;
use serde::{Deserialize, Serialize};

const fn default_max_cyclomatic() -> u16 {
    20
}

const fn default_max_cognitive() -> u16 {
    15
}

/// Configuration for complexity health metrics (`fallow health`).
#[derive(Debug, Clone, Deserialize, Serialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
pub struct HealthConfig {
    /// Maximum allowed cyclomatic complexity per function (default: 20).
    /// Functions exceeding this threshold are reported.
    #[serde(default = "default_max_cyclomatic")]
    pub max_cyclomatic: u16,

    /// Maximum allowed cognitive complexity per function (default: 15).
    /// Functions exceeding this threshold are reported.
    #[serde(default = "default_max_cognitive")]
    pub max_cognitive: u16,

    /// Glob patterns to exclude from complexity analysis.
    #[serde(default)]
    pub ignore: Vec<String>,
}

impl Default for HealthConfig {
    fn default() -> Self {
        Self {
            max_cyclomatic: default_max_cyclomatic(),
            max_cognitive: default_max_cognitive(),
            ignore: vec![],
        }
    }
}
