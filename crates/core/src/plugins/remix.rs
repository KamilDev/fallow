//! Remix framework plugin.
//!
//! Detects Remix projects and marks route files, root layout, and entry points.
//! Recognizes conventional route exports (loader, action, meta, etc.).

use super::Plugin;

const ENABLERS: &[&str] = &[
    "@remix-run/node",
    "@remix-run/react",
    "@remix-run/cloudflare",
    "@remix-run/cloudflare-pages",
    "@remix-run/deno",
];

const ENTRY_PATTERNS: &[&str] = &[
    "app/routes/**/*.{ts,tsx,js,jsx}",
    "app/root.{ts,tsx,js,jsx}",
    "app/entry.client.{ts,tsx,js,jsx}",
    "app/entry.server.{ts,tsx,js,jsx}",
];

const ALWAYS_USED: &[&str] = &["remix.config.{ts,js,mjs}"];

const TOOLING_DEPENDENCIES: &[&str] = &[
    "@remix-run/dev",
    "@remix-run/node",
    "@remix-run/react",
    "@remix-run/cloudflare",
    "@remix-run/serve",
];

const ROUTE_EXPORTS: &[&str] = &[
    "default",
    "loader",
    "action",
    "meta",
    "links",
    "headers",
    "handle",
    "ErrorBoundary",
    "HydrateFallback",
];

define_plugin! {
    struct RemixPlugin => "remix",
    enablers: ENABLERS,
    entry_patterns: ENTRY_PATTERNS,
    always_used: ALWAYS_USED,
    tooling_dependencies: TOOLING_DEPENDENCIES,
    used_exports: [("app/routes/**/*.{ts,tsx,js,jsx}", ROUTE_EXPORTS)],
}
