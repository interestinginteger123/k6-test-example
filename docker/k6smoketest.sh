#!/bin/sh

set -e
 
if [ -n "$GITHUB_ACTIONS" ]
then
  echo "** K6 Function Test Script **"
  k6 run -e ENDPOINT=$1 tests/smoke.js
  echo "** **"
fi