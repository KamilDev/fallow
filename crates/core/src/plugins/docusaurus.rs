//! Docusaurus documentation framework plugin.
//!
//! Detects Docusaurus projects and marks docs, blog, pages, and config as entry points.
//! Parses docusaurus.config to extract referenced dependencies.

use super::{Plugin, PluginResult};

const ENABLERS: &[&str] = &["@docusaurus/core"];

const ENTRY_PATTERNS: &[&str] = &[
    "docs/**/*.{md,mdx}",
    "blog/**/*.{md,mdx}",
    "src/pages/**/*.{ts,tsx,js,jsx,md,mdx}",
    "sidebars.{js,ts}",
];

const CONFIG_PATTERNS: &[&str] = &["docusaurus.config.{js,ts,mjs}"];

const ALWAYS_USED: &[&str] = &["docusaurus.config.{js,ts,mjs}", "sidebars.{js,ts}"];

const TOOLING_DEPENDENCIES: &[&str] = &[
    "@docusaurus/core",
    "@docusaurus/preset-classic",
    "@docusaurus/plugin-content-docs",
    "@docusaurus/plugin-content-blog",
    "@docusaurus/theme-classic",
];

/// Virtual module prefixes provided by Docusaurus at build time.
/// These are resolved by the Docusaurus bundler and should not be
/// flagged as unlisted dependencies.
const VIRTUAL_MODULE_PREFIXES: &[&str] = &[
    "@theme/",
    "@theme-original/",
    "@docusaurus/",
    "@site/",
    "@generated/",
];

define_plugin! {
    struct DocusaurusPlugin => "docusaurus",
    enablers: ENABLERS,
    entry_patterns: ENTRY_PATTERNS,
    config_patterns: CONFIG_PATTERNS,
    always_used: ALWAYS_USED,
    tooling_dependencies: TOOLING_DEPENDENCIES,
    virtual_module_prefixes: VIRTUAL_MODULE_PREFIXES,
    resolve_config: imports_only,
}
