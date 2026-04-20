#!/usr/bin/env bash
set -o errexit
set -o nounset

cd ../
npm link .
cd examples/

printf "\n\n========================================\n"
printf "Show help guide:\n"
nodecli --help

printf "\n\n========================================\n"
printf "Show version info: nodecli --version\n"
nodecli --version

printf "\n\n========================================\n"
printf "Run command with default config file:\n"
nodecli display

printf "\n\n========================================\n"
printf "Run command with specified config file:\n"
nodecli --config-file nodecli.yaml display

printf "\n\n========================================\n"
printf "Run command with specified config file and custom flags:\n"
nodecli --config-file nodecli.yaml display --reverse true --transform upper
