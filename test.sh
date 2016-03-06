#!/usr/bin/env bash
set -e

VERSION=$(node -v | cut -d'.' -f1-2 | cut -c2-)
echo "> Testing preset ${VERSION} ..."

echo "> Running babel ..."
rm -rf build/
mkdir build/
./node_modules/.bin/babel --quiet --presets ../$VERSION --out-dir build tests

for file in $(ls -1 build/*.js); do
    echo "> Testing ${file} ..."
    node $file
done
