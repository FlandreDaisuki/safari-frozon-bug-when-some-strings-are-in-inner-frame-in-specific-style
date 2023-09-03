#!/bin/bash

yarn run build

python3 -m http.server 8000 --directory dist
