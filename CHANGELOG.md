# Changelog

All notable changes to this project will be documented in this file.

## [2.10.0] - 2026-01-16

### Added
- **PM2 Cluster mode support** for logger
  - Added `cluster` option to enable PM2 multiprocess logging
  - Automatic PM2 detection via `process.env.pm_id`
  - Two modes of operation:
    - **Default**: Separate log files per PM2 instance (`trace-0.log`, `trace-1.log`, etc.)
    - **Multiprocess**: Common log file for all instances (requires `pm2-intercom`)
  - Added `pm2Multiprocess` option for common log file mode
  - Prevents file conflicts when multiple PM2 instances log simultaneously
  - Added [pm2-example.js](docs/pm2-example.js) with PM2 usage example
  - Added [ecosystem.config.js](docs/ecosystem.config.js) for PM2 configuration

### Changed
- Updated [logger.js](logger.js) to support PM2 cluster mode
- Updated [README.md](README.md) with PM2 cluster mode documentation
- Removed dependency on Node.js `cluster` module (now uses PM2 detection)

### Options
- `cluster: true` - enables PM2 cluster mode support
- `pm2Multiprocess: true` - use common log file (requires pm2-intercom)

## [2.9.0] - 2026-01-16
- Initial cluster mode implementation (replaced in 2.10.0)

## [2.8.9] - Previous version
- (История изменений предыдущих версий)
