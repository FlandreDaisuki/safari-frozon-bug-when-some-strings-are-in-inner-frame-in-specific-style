#!/bin/bash

sed -i "s|<% INNER_FRAME_ORIGIN %>|${INNER_FRAME_ORIGIN}|" /root/app/src/SecondaryApp.vue

pnpm run build

python3 -m http.server 8100 --directory dist
