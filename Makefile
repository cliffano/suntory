all: ci
ci: clean lint test

clean:
	cd examples/node-cli/ && \
	  make -f ../../src/Makefile-suntory clean
	cd examples/node-lib/ && \
	  make -f ../../src/Makefile-suntory clean

lint:
	checkmake src/Makefile-suntory

test:
	cd examples/node-cli/ && \
	  make -f ../../src/Makefile-suntory deps-extra-apt ci test-examples deps-upgrade update-dotfiles update-to-latest update-to-main && \
	  make -f ../../src/Makefile-suntory update-to-version TARGET_SUNTORY_VERSION=1.0.0
	cd examples/node-lib/ && \
	  make -f ../../src/Makefile-suntory deps-extra-apt ci test-examples deps-upgrade update-dotfiles update-to-latest update-to-main && \
	  make -f ../../src/Makefile-suntory update-to-version TARGET_SUNTORY_VERSION=1.0.0

release-major:
	rtk release --release-increment-type major

release-minor:
	rtk release --release-increment-type minor

release-patch:
	rtk release --release-increment-type patch

release: release-minor

.PHONY: all ci clean lint release release-major release-minor release-patch test