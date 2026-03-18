//! Nuxt framework plugin.
//!
//! Detects Nuxt projects and marks pages, layouts, middleware, server API,
//! plugins, composables, and utils as entry points. Recognizes conventional
//! server API and middleware exports.

use super::Plugin;

const ENABLERS: &[&str] = &["nuxt"];

const ENTRY_PATTERNS: &[&str] = &[
    "pages/**/*.{vue,ts,tsx,js,jsx}",
    "layouts/**/*.{vue,ts,tsx,js,jsx}",
    "middleware/**/*.{ts,js}",
    "server/api/**/*.{ts,js}",
    "server/routes/**/*.{ts,js}",
    "server/middleware/**/*.{ts,js}",
    "plugins/**/*.{ts,js}",
    "composables/**/*.{ts,js}",
    "utils/**/*.{ts,js}",
];

const ALWAYS_USED: &[&str] = &[
    "nuxt.config.{ts,js}",
    "app.vue",
    "app.config.{ts,js}",
    "error.vue",
];

const TOOLING_DEPENDENCIES: &[&str] = &["nuxt", "@nuxt/devtools", "@nuxt/test-utils"];

const USED_EXPORTS_SERVER_API: &[&str] = &["default", "defineEventHandler"];
const USED_EXPORTS_MIDDLEWARE: &[&str] = &["default"];

define_plugin! {
    struct NuxtPlugin => "nuxt",
    enablers: ENABLERS,
    entry_patterns: ENTRY_PATTERNS,
    always_used: ALWAYS_USED,
    tooling_dependencies: TOOLING_DEPENDENCIES,
    used_exports: [
        ("server/api/**/*.{ts,js}", USED_EXPORTS_SERVER_API),
        ("middleware/**/*.{ts,js}", USED_EXPORTS_MIDDLEWARE),
    ],
}
