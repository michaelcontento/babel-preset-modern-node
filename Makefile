install: node_modules/

node_modules/: package.json
	echo "> Installing ..."
	npm --loglevel=error --ignore-scripts install
	touch node_modules/

clean:
	rm -rf build/

mrproper: clean
	rm -rf node_modules/

test: install
	./test.sh

.PHONY: install clean mrproper test

.SILENT:
