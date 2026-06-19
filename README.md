<!-- BEGIN:AVATAR -->
![Avatar](avatar.jpg)
<!-- END:AVATAR -->

<!-- BEGIN:BADGES -->
[![Build Status](https://github.com/cliffano/suntory/actions/workflows/ci-workflow.yaml/badge.svg)](https://github.com/cliffano/suntory/actions/workflows/ci-workflow.yaml)
<!-- END:BADGES -->

# Suntory

Suntory is a Makefile for building node.js packages.
It provides utility targets for styling, linting, building, testing, and documenting node.js packages.

Have a look at [SuntoryExample/](examples/) as an example project which uses Suntory.

## Installation

1. Download `src/Makefile-suntory` as the `Makefile` of your project:
    `curl https://raw.githubusercontent.com/cliffano/suntory/main/src/Makefile-suntory -o Makefile`
2. Create configuration file `suntory.yml` with properties described in [Configuration](#configuration) section
3. Run the available `Makefile` targets described in [Usage](#usage) section

## Configuration

Create Suntory configuration file called `suntory.yml` with contains the following properties:

| Property | Description | Example |
|----------|-------------|---------|
| package_name | The name of the node.js package | `somepackage` |
| author | The author of the package | `Some Author` |
| generator.component | The generator component type from [generator-node](https://github.com/cliffano/generator-node) | `node-cli` |
| generator.inputs.project_id | The project ID | `somepackage` |
| generator.inputs.project_name | The project display name | `Some Package` |
| generator.inputs.project_desc | The project description | `A sample node CLI package` |
| generator.inputs.author_name | The author's name | `Some Author` |
| generator.inputs.author_email | The author's email address | `someauthor@example.com` |
| generator.inputs.github_id | The GitHub user or organisation ID | `pakkunbot` |
| generator.inputs.github_repo | The GitHub repository name | `suntoryexample` |

## Usage

The following targets are available:

| Target | Description |
|--------|-------------|
| ci | CI target to be executed by CI/CD tool, end to end build of the node.js package |
| stage | Ensure stage directory exists |
| clean | Remove all temporary (staged, generated, cached) files using [Bob](https://github.com/cliffano/bob) |
| deps | Retrieve package dependencies using [npm](https://www.npmjs.com/) and [Bob](https://github.com/cliffano/bob) |
| deps-upgrade | Upgrade package dependencies using [Bob](https://github.com/cliffano/bob) |
| rmdeps | Remove package dependencies using [Bob](https://github.com/cliffano/bob) |
| update-to-latest | Update Makefile to the latest version tag |
| update-to-main | Update Makefile to the main branch |
| update-to-version | Update Makefile to the version defined in `TARGET_SUNTORY_VERSION` parameter |
| update-dotfiles | Update the dotfiles with latest from [generator-node](https://github.com/cliffano/generator-node) |
| style | Run code styling against source and test code using [Bob](https://github.com/cliffano/bob) |
| lint | Run lint checks against source and test code using [Bob](https://github.com/cliffano/bob), then generate lint report |
| complexity | Run complexity checks against source and test code using [Bob](https://github.com/cliffano/bob), then generate complexity report |
| test | Run unit testing using [Bob](https://github.com/cliffano/bob), then generate test report |
| test-integration | Run integration testing using [Bob](https://github.com/cliffano/bob), then generate test report |
| test-examples | Run example scripts under `examples/` directory |
| coverage | Run coverage checks using [Bob](https://github.com/cliffano/bob), then generate coverage report |
| release-major | Create a major release using [rtk](https://github.com/cliffano/rtk) |
| release-minor | Create a minor release using [rtk](https://github.com/cliffano/rtk) |
| release-patch | Create a patch release using [rtk](https://github.com/cliffano/rtk) |
| package | Build the node.js package using [Bob](https://github.com/cliffano/bob) |
| install | Install the built package using [npm](https://www.npmjs.com/) link |
| uninstall | Uninstall the package using [npm](https://www.npmjs.com/) unlink |
| reinstall | Uninstall, rebuild, and then install the package again |
| publish | Publish package to [npm](https://www.npmjs.com/) |
| doc | Generate package documentation using [Bob](https://github.com/cliffano/bob) |

## Colophon

Related Projects:

* [generator-node](https://github.com/cliffano/generator-node) - node.js packages generator using Plop
