#![expect(clippy::print_stdout, clippy::print_stderr)]

/// Health / complexity analysis report types.
pub mod health_types;

/// Report formatting utilities for analysis results.
///
/// Exposed for snapshot testing of output formats.
pub mod report;
