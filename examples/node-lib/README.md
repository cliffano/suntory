<!-- BEGIN:AVATAR -->
![Avatar](avatar.jpg)
<!-- END:AVATAR -->

<!-- BEGIN:BADGES -->
[![Build Status](https://github.com/pakkunbot/node-lib/workflows/CI/badge.svg)](https://github.com/pakkunbot/node-lib/actions?query=workflow%3ACI)
[![Dependencies Status](https://img.shields.io/librariesio/release/npm/nodelib)](https://libraries.io/npm/nodelib)
[![Code Scanning Status](https://github.com/pakkunbot/node-lib/workflows/CodeQL/badge.svg)](https://github.com/pakkunbot/node-lib/actions?query=workflow%3ACodeQL)
[![Coverage Status](https://coveralls.io/repos/github/pakkunbot/node-lib/badge.svg?branch=main)](https://coveralls.io/r/pakkunbot/node-lib?branch=main)
[![Security Status](https://snyk.io/test/github/pakkunbot/node-lib/badge.svg)](https://snyk.io/test/github/pakkunbot/node-lib)
[![Published Version](https://img.shields.io/npm/v/nodelib.svg)](https://www.npmjs.com/package/nodelib)
<!-- END:BADGES -->

# NodeLib

NodeLib is a A sample Node library project .

## Installation

```sh
npm install nodelib
```

## Usage

Create a configuration file, e.g. `nodelib.yaml`:

```yaml
---
text: Hello World
```

Create nodelib object and run it:

```js
import Display from 'nodelib';

const display = new Display('nodelib.yaml');
const text = display.format(false, 'lower');
console.log(text);
```

## Configuration

These are the configuration properties that you can use with `nodelib`.
Some example configuration files are available on [examples](examples) folder.

| Property | Type | Description | Example |
|----------|------|-------------|---------|
| `text` | String | The message text | Hello World |

## Colophon

<!-- BEGIN:DEVELOPERS_GUIDE -->
[Developer's Guide](https:/cliffano.github.io/developers-guide-nodejs.html)
<!-- END:DEVELOPERS_GUIDE -->

<!-- BEGIN:BUILD_REPORTS -->
Build reports:

* [Code complexity report](https://pakkunbot.github.io/node-lib/complexity/plato/index.html)
* [Unit tests report](https://pakkunbot.github.io/node-lib/test/mocha.txt)
* [Test coverage report](https://pakkunbot.github.io/node-lib/coverage/c8/index.html)
* [Integration tests report](https://pakkunbot.github.io/node-lib/test-integration/mocha.txt)
* [API Documentation](https://pakkunbot.github.io/node-lib/doc/jsdoc/index.html)

<!-- END:BUILD_REPORTS -->
