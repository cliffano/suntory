# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

### Changed
- Upgrade Bob to 5.3.0

## 1.4.0 - 2026-07-03
### Added
- Add x-post-deps-extra-apt run hook

### Changed
- Decouple deps from CI run

## 1.3.0 - 2026-06-28
### Added
- Add deps_extra hook to automatically provision extra packages

### Changed
- Extract common generator vars init to set_generator_vars

## 1.2.0 - 2026-06-25
### Added
- Add pre and post hook targets support

## 1.1.0 - 2026-06-19
### Changed
- Re-add coverage checking and publishing
- Upgrade Bob to 5.2.1

## 1.0.0 - 2026-06-13
### Added
- Add update-partials target
- Add mdl to lint target

### Fixed
- Fix intermittent timeouts on coverage and test-integration runs

## 0.12.0 - 2026-05-22
### Added
- Add Github token prefix input handling for update-dotfiles

## 0.11.2 - 2026-05-13
### Fixed
- Fix copilot instructions being missed out on update-dotfiles target

## 0.11.1 - 2026-05-10
### Fixed
- Fix missing author_url in example Suntory config

## 0.11.0 - 2026-05-09
### Added
- Add update-dotfiles implementation

### Fixed
- Fix dotfiles source config name
- Fix generator used for project updates

## 0.10.0 - 2026-05-09
### Added
- Initial version
