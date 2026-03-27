//! Astro framework plugin.
//!
//! Detects Astro projects and marks pages, layouts, content, and middleware
//! as entry points. Parses astro.config to extract referenced dependencies.

use super::{Plugin, PluginResult};

const ENABLERS: &[&str] = &["astro"];

const ENTRY_PATTERNS: &[&str] = &[
    "src/pages/**/*.{astro,ts,tsx,js,jsx,md,mdx}",
    "src/layouts/**/*.astro",
    "src/content/**/*.{ts,js,md,mdx}",
    "src/middleware.{js,ts}",
];

const CONFIG_PATTERNS: &[&str] = &["astro.config.{ts,js,mjs}"];

const ALWAYS_USED: &[&str] = &["astro.config.{ts,js,mjs}"];

const TOOLING_DEPENDENCIES: &[&str] = &["astro", "@astrojs/check", "@astrojs/ts-plugin"];

/// Virtual module prefixes provided by Astro at build time.
/// `astro:` provides built-in modules (content, transitions, env, actions, assets,
/// i18n, middleware, container, schema).
const VIRTUAL_MODULE_PREFIXES: &[&str] = &["astro:"];

define_plugin! {
    struct AstroPlugin => "astro",
    enablers: ENABLERS,
    entry_patterns: ENTRY_PATTERNS,
    config_patterns: CONFIG_PATTERNS,
    always_used: ALWAYS_USED,
    tooling_dependencies: TOOLING_DEPENDENCIES,
    virtual_module_prefixes: VIRTUAL_MODULE_PREFIXES,
    resolve_config: imports_only,
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn virtual_module_prefixes_includes_astro_builtins() {
        let plugin = AstroPlugin;
        let prefixes = plugin.virtual_module_prefixes();
        assert!(prefixes.contains(&"astro:"));
    }
}
