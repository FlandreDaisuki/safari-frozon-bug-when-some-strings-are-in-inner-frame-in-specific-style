# safari-frozon-bug-when-some-strings-are-in-inner-frame-in-specific-style

There are some factors to trigger the bug:

1. inner frame should have some specific words
2. some specific style in inner frame
3. some specific style in outer frame

Here is a [demo site](https://flandredaisuki.github.io/safari-frozon-bug-when-some-strings-are-in-inner-frame-in-specific-style/outer-frame/)

⚠️ Caution! Your Safari tab may be frozen. ⚠️

## Setup

```sh
docker compose up
```

You can also setup `.env` to tunnel the local service to mobile devices.

## Expected Behavior

1. Open Safari in [http://localhost:8680/](http://localhost:8680/)
2. You can see the FPS monitor works
3. You can scroll to bottom of the page and click the link

## Actual Behavior

1. Open Safari in [http://localhost:8680/](http://localhost:8680/)
2. Everything is frozen

![dio](dio.webp)

## Environment

- M2 MacOS Ventura 13.5.2 (22G91) Safari 16.6（18615.3.12.11.2）
- MacOS Ventura 13.5.2 (22G91) Version 16.6 (18615.3.12.11.2)
- MacOS Ventura 13.5.2 Safari 16.6 (18615.3.12.11.2)
- MacOS Ventura 13.5.1 Safari 16.6 (18615.3.12.11.2)
- MacOS Ventura 13.5 Safari 16.6（18615.3.12.11.2）
- MacOS Ventura 13.4.1 Safari 16.5.2 (18615.2.9.11.10)
- MacOS Monterey 12.6.2 Safari 15.6.1
- MacOS Monterey 12.5.1 Safari 15.6.1 (17613.3.9.1.16)
- iPadOS 16.6 (20G75) Safari
- iPadOS 16.6 (20G81) Safari
- iPhone 14 Pro 16.6.1 Safari
- iPhone 14 16.6.1
- iPhone 14 16.3.1
- iPhone 13 16.6 (20G75) Safari
- iPhone 12Pro 16.6.1
- iPhone 12 16.6.1

### Some reports show they do not meet this bug


- MacOS Sonoma 14.0 Safari Technical Preview (ua: `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15`)
- MacOS Ventura 13.5.2 Safari Technical Preview (ua: `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15`)
- MacOS Big Sur 11.6 Safari 15.0 (16612.1.29.41.4, 16612)
- iOS 17 PublicBeta (21A5362a)
