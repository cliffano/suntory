<!-- BEGIN:AVATAR -->
![Avatar](avatar.jpg)
<!-- END:AVATAR -->

<!-- BEGIN:BADGES -->
[![Build Status](https://github.com/pakkunbot/node-cli/workflows/CI/badge.svg)](https://github.com/pakkunbot/node-cli/actions?query=workflow%3ACI)
[![Dependencies Status](https://img.shields.io/librariesio/release/npm/nodecli)](https://libraries.io/npm/nodecli)
[![Code Scanning Status](https://github.com/pakkunbot/node-cli/workflows/CodeQL/badge.svg)](https://github.com/pakkunbot/node-cli/actions?query=workflow%3ACodeQL)
[![Coverage Status](https://coveralls.io/repos/github/pakkunbot/node-cli/badge.svg?branch=main)](https://coveralls.io/r/pakkunbot/node-cli?branch=main)
[![Security Status](https://snyk.io/test/github/pakkunbot/node-cli/badge.svg)](https://snyk.io/test/github/pakkunbot/node-cli)
[![Published Version](https://img.shields.io/npm/v/nodecli.svg)](https://www.npmjs.com/package/nodecli)
<!-- END:BADGES -->

# NodeCLI

NodeCLI is a A sample Node CLI project .

## Installation

```sh
npm install -g nodecli
```

## Usage

Create a configuration file, e.g. `nodecli.yaml`:

```yaml
---
text: Hello World
```

Run nodecli with display command:

```sh
nodecli display
```

Run nodecli with specified config file:

```sh
nodecli --config-file nodecli.yaml display
```

Run nodecli with specified config file and custom flags:

```sh
nodecli --config-file nodecli.yaml display --reverse true --transform upper
```

Show help guide:

```sh
nodecli --help
```

## Configuration

These are the configuration properties that you can use with `nodecli` CLI.
Some example configuration files are available on [examples](examples) folder.

| Property | Type | Description | Example |
|----------|------|-------------|---------|
| `text` | String | The message text | Hello World |

## Colophon

<!-- BEGIN:DEVELOPERS_GUIDE -->
[Developer's Guide](https://cliffano.github.io/developers-guide-nodejs.html)
<!-- END:DEVELOPERS_GUIDE -->

<!-- BEGIN:BUILD_REPORTS -->
Build reports:

* [Code complexity report](https://pakkunbot.github.io/nodecli/complexity/plato/index.html)
* [Unit tests report](https://pakkunbot.github.io/nodecli/test/mocha.txt)
* [Test coverage report](https://pakkunbot.github.io/nodecli/coverage/c8/index.html)
* [Integration tests report](https://pakkunbot.github.io/nodecli/test-integration/cmdt.txt)
* [API Documentation](https://pakkunbot.github.io/nodecli/doc/jsdoc/index.html)
<!-- END:BUILD_REPORTS -->
