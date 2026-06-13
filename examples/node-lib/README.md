<!-- BEGIN:AVATAR -->
To be populated by generator-node node-lib-partials
<!-- END:AVATAR -->

<!-- BEGIN:BADGES -->
To be populated by generator-node node-lib-partials
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
To be populated by generator-node node-lib-partials
<!-- END:DEVELOPERS_GUIDE -->

<!-- BEGIN:BUILD_REPORTS -->
To be populated by generator-node node-lib-partials
<!-- END:BUILD_REPORTS -->
