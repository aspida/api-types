---
title: 気象庁防災気象情報API
description: 気象庁ホームページから防災気象情報を取得するAPI
homepage: https://www.jma.go.jp/bosai/map.html#5/36.138/137.285/&elem=ir&contents=himawari
image: bosai.jpg
baseURL: https://www.jma.go.jp/bosai
trailingSlash: false
---

参考サイト：https://qiita.com/e_toyoda/items/7a293313a725c4d306c0

`utils/himawariClient.ts`
```ts
import { apiClient } from "./apiClient"

export const himawariClient = apiClient.himawari.data.satimg
```

`index.ts`
```ts
import { BAND_PROD } from '@api-types/jma-bosai'
import { himawariClient } from "./utils/himawariClient"

;(async () => {
  const targetTimes = await himawariClient.targetTimes_fd_json.$get()
  console.log(targetTimes) // [{"basetime" : "20210224190000", "validtime" : "20210224190000"}...]

  const img = new Image()
  img.src = himawariClient
    ._basetime(targetTimes[0].basetime).fd._validtime(targetTimes[0].validtime)._band_prod(BAND_PROD.VISIBLE)._z(3)._x(7)._y_jpg(3).$path()
  document.body.appendChild(img)
})()
```
