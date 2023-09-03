# safari-frozon-bug-when-some-strings-are-in-inner-frame-in-specific-style

## Setup

```sh
docker compose up
```

You can also setup `.env` to tunnel the local service to mobile devices.

## Environment

- MacOS Ventura 13.5.1 Safari 16.6 (18615.3.12.11.2)
- iPadOS 16.6 (20G75) Safari

## Expected Behavior

1. Open Safari in [http://localhost:8680/](http://localhost:8680/)
2. You can see the FPS monitor works
3. You can scroll to bottom of the page and click the link

## Actual Behavior

1. Open Safari in [http://localhost:8680/](http://localhost:8680/)
2. Everything is frozen

![dio](dio.webp)