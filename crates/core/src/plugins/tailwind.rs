//! Tailwind CSS plugin.
//!
//! Detects Tailwind projects and marks config files as always used.

use super::Plugin;

const ENABLERS: &[&str] = &["tailwindcss", "@tailwindcss/postcss"];

const ALWAYS_USED: &[&str] = &["tailwind.config.{ts,js,cjs,mjs}"];

const TOOLING_DEPENDENCIES: &[&str] = &[
    "tailwindcss",
    "@tailwindcss/postcss",
    "@tailwindcss/typography",
    "@tailwindcss/forms",
    "autoprefixer",
];

define_plugin! {
    struct TailwindPlugin => "tailwind",
    enablers: ENABLERS,
    always_used: ALWAYS_USED,
    tooling_dependencies: TOOLING_DEPENDENCIES,
}
