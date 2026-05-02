#!/usr/bin/env bash
set -o errexit
set -o nounset

cd ../
npm link .
cd examples/

npm link nodelib
node _nodelib.js
