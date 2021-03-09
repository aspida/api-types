---
title: 気象庁防災気象情報API
description: 気象庁ホームページから防災気象情報を取得するAPI
homepage: https://www.jma.go.jp/bosai/map.html#5/36.138/137.285/&elem=ir&contents=himawari
image: himawari.jpg
baseURL: https://www.jma.go.jp/bosai/himawari/data
trailingSlash: false
---

参考サイト：https://qiita.com/e_toyoda/items/7a293313a725c4d306c0

`index.ts`
```ts
import { apiClient } from "./utils/apiClient"

;(async () => {
  const resBody = await apiClient.foo.baz.$get()
  console.log(resBody)

  const img = new Image()
  img.src = apiClient.foo.baz_jpg.$path()
  document.body.appendChild(img)
})()
```
