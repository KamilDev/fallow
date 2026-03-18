//! Expo framework plugin.
//!
//! Detects Expo projects and marks app entry points and config files.

use super::Plugin;

const ENABLERS: &[&str] = &["expo"];

const ENTRY_PATTERNS: &[&str] = &[
    "App.{ts,tsx,js,jsx}",
    "app/**/*.{ts,tsx,js,jsx}",
    "src/App.{ts,tsx,js,jsx}",
];

const ALWAYS_USED: &[&str] = &[
    "app.json",
    "app.config.{ts,js}",
    "metro.config.{ts,js}",
    "babel.config.{ts,js}",
];

const TOOLING_DEPENDENCIES: &[&str] = &["expo", "expo-cli", "@expo/webpack-config"];

define_plugin! {
    struct ExpoPlugin => "expo",
    enablers: ENABLERS,
    entry_patterns: ENTRY_PATTERNS,
    always_used: ALWAYS_USED,
    tooling_dependencies: TOOLING_DEPENDENCIES,
}
