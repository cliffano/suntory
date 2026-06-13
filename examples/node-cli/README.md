<!-- BEGIN:AVATAR -->
To be populated by generator-node node-cli-partials
<!-- END:AVATAR -->

<!-- BEGIN:BADGES -->
To be populated by generator-node node-cli-partials
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
To be populated by generator-node node-cli-partials
<!-- END:DEVELOPERS_GUIDE -->

<!-- BEGIN:BUILD_REPORTS -->
To be populated by generator-node node-cli-partials
<!-- END:BUILD_REPORTS -->
