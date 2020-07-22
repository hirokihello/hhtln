.PHONY: build
build:
	yarn install
	cp dotenv.dist .env
	run

.PHONY: run
run:
	yarn start

.PHONY: lint
lint:
	yarn eslint . --ext .tsx --ext .ts --fix

.PHONY: install
install:
	yarn install
