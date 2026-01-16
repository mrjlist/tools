# Changelog

All notable changes to this project will be documented in this file.

## [2.9.0] - 2026-01-16

### Added
- **Cluster mode support** for logger
  - Added `cluster` option to enable multiprocess logging
  - Master process writes logs to files
  - Worker processes send logs to master via multiprocess appender
  - Prevents file conflicts when multiple workers log simultaneously
  - Added [cluster-example.js](docs/cluster-example.js) with usage example
  - Added [test-cluster.js](docs/test-cluster.js) for testing cluster mode

### Changed
- Updated [logger.js](logger.js) to support cluster mode
- Updated [README.md](README.md) with cluster mode documentation

## [2.8.9] - Previous version
- (История изменений предыдущих версий)
