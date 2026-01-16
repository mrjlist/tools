![tools](docs/console2.png)

# tools
useful functions for every project

```console.debug()```

overwritten .debug, .log, .warn & .error functions
- added timestamp
- added highlighting
- object decoding
- date auto format
- added "+28ms" time in debug mode
- added line number for errors

## Logger

### Basic usage

```javascript
const tools = require('@mrjlist/tools');

const log = tools.logger('trace', {
  hourly: false
});

log.trace('Trace message');
log.debug('Debug message');
log.info('Info message');
log.warn('Warning message');
log.error('Error message');
```

### PM2 Cluster mode support

For projects using PM2 cluster mode, enable `cluster: true` option:

```javascript
const tools = require('@mrjlist/tools');

const log = tools.logger('trace', {
  hourly: false,
  cluster: true  // Включает поддержку PM2 cluster mode
});

log.info('Application started');
log.debug('Worker ready');
```

**PM2 configuration** (ecosystem.config.js):
```javascript
module.exports = {
  apps: [{
    name: 'app',
    script: './app.js',
    instances: 4,  // or 'max'
    exec_mode: 'cluster'
  }]
};
```

When `cluster: true` is enabled with PM2:
- **By default**: Each PM2 instance writes to separate files (`trace-0.log`, `trace-1.log`, etc.)
- **With `pm2Multiprocess: true`**: All instances write to common files (requires `pm2-intercom`)
- Automatically detects PM2 via `process.env.pm_id`
- Prevents file conflicts when multiple instances log simultaneously

**Using common log file** (all PM2 instances write to one file):
```javascript
const log = tools.logger('trace', {
  hourly: false,
  cluster: true,
  pm2Multiprocess: true  // Requires: npm install pm2-intercom
});
```

### Options

- `level` - minimum log level: 'silly', 'trace', 'debug', 'info', 'warn', 'error'
- `hourly` - when `true`, creates hourly log files (default: `false`)
- `cluster` - enables PM2 cluster mode support (default: `false`)
- `pm2Multiprocess` - use common log file for all PM2 instances (default: `false`, requires pm2-intercom)
