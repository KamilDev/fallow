//! Nx monorepo plugin.
//!
//! Detects Nx projects and marks workspace config files as always used.

use super::Plugin;

const ENABLERS: &[&str] = &["nx"];

const ALWAYS_USED: &[&str] = &["nx.json", "**/project.json"];

const TOOLING_DEPENDENCIES: &[&str] = &[
    "nx",
    "@nx/workspace",
    "@nx/js",
    "@nx/react",
    "@nx/next",
    "@nx/node",
    "@nx/web",
    "@nx/vite",
    "@nx/jest",
    "@nx/eslint",
];

define_plugin! {
    struct NxPlugin => "nx",
    enablers: ENABLERS,
    always_used: ALWAYS_USED,
    tooling_dependencies: TOOLING_DEPENDENCIES,
}
