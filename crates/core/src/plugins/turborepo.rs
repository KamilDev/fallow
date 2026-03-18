//! Turborepo monorepo build system plugin.
//!
//! Detects Turborepo projects and marks turbo.json as always used.

use super::Plugin;

const ENABLERS: &[&str] = &["turbo"];

const ALWAYS_USED: &[&str] = &["turbo.json"];

const TOOLING_DEPENDENCIES: &[&str] = &["turbo"];

define_plugin! {
    struct TurborepoPlugin => "turborepo",
    enablers: ENABLERS,
    always_used: ALWAYS_USED,
    tooling_dependencies: TOOLING_DEPENDENCIES,
}
