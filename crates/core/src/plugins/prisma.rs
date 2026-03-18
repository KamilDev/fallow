//! Prisma ORM plugin.
//!
//! Detects Prisma projects and marks seed files as entry points
//! and schema files as always used.

use super::Plugin;

const ENABLERS: &[&str] = &["prisma", "@prisma/client"];

const ENTRY_PATTERNS: &[&str] = &["prisma/seed.{ts,js}"];

const ALWAYS_USED: &[&str] = &["prisma/schema.prisma"];

const TOOLING_DEPENDENCIES: &[&str] = &["prisma", "@prisma/client"];

define_plugin! {
    struct PrismaPlugin => "prisma",
    enablers: ENABLERS,
    entry_patterns: ENTRY_PATTERNS,
    always_used: ALWAYS_USED,
    tooling_dependencies: TOOLING_DEPENDENCIES,
}
