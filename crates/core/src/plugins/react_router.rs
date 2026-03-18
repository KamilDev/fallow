//! React Router (v7+) framework plugin.
//!
//! Detects React Router projects and marks route files, root layout, and entry points.
//! Recognizes conventional route exports (loader, action, meta, etc.).

use super::Plugin;

const ENABLERS: &[&str] = &["@react-router/dev"];

const ENTRY_PATTERNS: &[&str] = &[
    "app/routes/**/*.{ts,tsx,js,jsx}",
    "app/root.{ts,tsx,js,jsx}",
    "app/entry.client.{ts,tsx,js,jsx}",
    "app/entry.server.{ts,tsx,js,jsx}",
];

const ALWAYS_USED: &[&str] = &["react-router.config.{ts,js}"];

const TOOLING_DEPENDENCIES: &[&str] = &[
    "@react-router/dev",
    "@react-router/serve",
    "@react-router/node",
];

const ROUTE_EXPORTS: &[&str] = &[
    "default",
    "loader",
    "clientLoader",
    "action",
    "clientAction",
    "meta",
    "links",
    "headers",
    "handle",
    "ErrorBoundary",
    "HydrateFallback",
    "shouldRevalidate",
];

define_plugin! {
    struct ReactRouterPlugin => "react-router",
    enablers: ENABLERS,
    entry_patterns: ENTRY_PATTERNS,
    always_used: ALWAYS_USED,
    tooling_dependencies: TOOLING_DEPENDENCIES,
    used_exports: [("app/routes/**/*.{ts,tsx,js,jsx}", ROUTE_EXPORTS)],
}
