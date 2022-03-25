#! /usr/bin/env bash
set -euo pipefail

PACKAGE_DIR=$(realpath "$1")
cd $PACKAGE_DIR

if [[ ! -f "$PACKAGE_DIR/.npmrc" ]]; then
    echo "No .npmrc found in ${PACKAGE_DIR}. Skipping..."
    exit 0
fi

if [[ ! -f "$PACKAGE_DIR/package.json" ]]; then
    echo "No package.json found in ${PACKAGE_DIR}"
    exit 1
fi

PACKAGE_NAME=$(jq -r ".name" package.json)
LOCAL_VERSION=$(jq -r ".version" package.json)

if [[ "$LOCAL_VERSION" == *"-"* ]]; then
    TAG="next";
else
    TAG="latest";
fi

REMOTE_VERSION="$(npm view ${PACKAGE_NAME}@${TAG} --json | jq -r '.version')"

echo "Local version: ${LOCAL_VERSION}"
echo "Remote version: ${REMOTE_VERSION}"

if [[ "$LOCAL_VERSION" != "$REMOTE_VERSION" ]]; 
then
    echo "Publishing ${PACKAGE_NAME}@${LOCAL_VERSION} on tag ${TAG}..."
    yarn build
    npm publish --tag "${TAG}"
fi
