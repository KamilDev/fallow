//! TypeScript plugin.
//!
//! Detects TypeScript projects and marks tsconfig files as always used.

use super::Plugin;

const ENABLERS: &[&str] = &["typescript"];

const ALWAYS_USED: &[&str] = &["tsconfig.json", "tsconfig.*.json"];

const TOOLING_DEPENDENCIES: &[&str] = &["typescript", "ts-node", "tsx", "ts-loader"];

define_plugin! {
    struct TypeScriptPlugin => "typescript",
    enablers: ENABLERS,
    always_used: ALWAYS_USED,
    tooling_dependencies: TOOLING_DEPENDENCIES,
}
