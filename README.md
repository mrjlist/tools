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

### Cluster mode support

For projects using Node.js cluster mode, enable `cluster: true` option:

```javascript
const cluster = require('cluster');
const tools = require('@mrjlist/tools');

const log = tools.logger('trace', {
  hourly: false,
  cluster: true  // Включает поддержку cluster mode
});

if (cluster.isMaster || cluster.isPrimary) {
  // Master process
  console.log('Master process started');

  // Fork workers
  for (let i = 0; i < 4; i++) {
    cluster.fork();
  }
} else {
  // Worker process
  log.info(`Worker ${process.pid} started`);
}
```

When `cluster: true` is enabled:
- Master process writes logs to files
- Worker processes send logs to master via multiprocess appender
- Prevents file conflicts when multiple workers log simultaneously

See [cluster-example.js](docs/cluster-example.js) for a complete example.

### Options

- `level` - minimum log level: 'silly', 'trace', 'debug', 'info', 'warn', 'error'
- `hourly` - when `true`, creates hourly log files (default: `false`)
- `cluster` - enables cluster mode support (default: `false`)
