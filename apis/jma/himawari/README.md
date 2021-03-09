# @api-types/jma-himawari 気象庁防災気象情報API
<br />
<div align="center">
  <img src="https://aspida.github.io/api-types/assets/jma/himawari.jpg" alt="@api-types/jma-himawari 気象庁防災気象情報API" />
</div>
<br />

> [気象庁防災気象情報API](https://www.jma.go.jp/bosai/map.html#5/36.138/137.285/&elem=ir&contents=himawari) - 気象庁ホームページから防災気象情報を取得するAPI

<a href="https://www.npmjs.com/package/@api-types/jma-himawari">
  <img src="https://img.shields.io/npm/v/@api-types/jma-himawari" alt="npm version" />
</a>
<a href="https://www.npmjs.com/package/@api-types/jma-himawari">
  <img src="https://img.shields.io/npm/dm/@api-types/jma-himawari" alt="npm download" />
</a>
<br />
<br />

参考サイト：https://qiita.com/e_toyoda/items/7a293313a725c4d306c0

<br />

## Getting Started

- Using [npm](https://www.npmjs.com/):

  ```sh
  $ npm install @api-types/jma-himawari @aspida/axios axios
  ```

- Using [Yarn](https://yarnpkg.com/):

  ```sh
  $ yarn add @api-types/jma-himawari @aspida/axios axios
  ```

`index.ts`
```ts
import api from "@api-types/jma-himawari"
import aspida from '@aspida/axios'

;(async () => {
  const client = api(aspida())
  const resBody = await client.foo.baz.$get()
  console.log(resBody)

  const img = new Image()
  img.src = client.foo.baz_jpg.$path()
  document.body.appendChild(img)
})()
```
<br />

## Endpoints

baseURL: https://www.jma.go.jp/bosai/himawari/data
<br />

<details>
<summary><b>/satimg/_basetime/fd/_validtime/_band_prod/_z@number/_x@number/_y@number.jpg</b></summary>
<br />

```ts
/**
 * フルディスク画像API
 * _basetime: 撮影時間 TargetTime['basetime']
 * _validtime: 撮影時間 TargetTime['validtime']
 * _band_prod: 画像種別 BAND_PROD
 * _z: ズームレベル 3-5
 * _x: タイルのX座標
 * _y: タイルのY座標
 */
type Methods = {
  /**
   * フルディスク画像をJPGで取得
   */
  get: {
    resBody: ArrayBuffer
  }
}
```
</details>
<details>
<summary><b>/satimg/targetTimes_fd.json</b></summary>
<br />

```ts
/**
 * 撮影時刻API
 */
type Methods = {
  /**
   * 撮影時刻一覧を取得
   */
  get: {
    resBody: TargetTime[]
  }
}
```
</details>
<br />

## Types

<details>
<summary><b>TargetTime</b></summary>
<br />

```ts
/**
 * 撮影時刻
 */
type TargetTime = {
  basetime: string
  validtime: string
}
```
</details>
<br />

## Constants

<details>
<summary><b>BAND_PROD</b></summary>
<br />

```ts
/** 画像種別 */
const BAND_PROD = {
  /** 可視画像 */
  VISIBLE: 'B13/TBB',
  /** 赤外画像 */
  INFRARED: 'B03/ALBD',
  /** 水蒸気画像 */
  WATER_VAPOR: 'B08/TBB',
  /** トゥルーカラー再現画像 */
  TRUE_COLOR: 'REP/ETC',
  /** 雲頂強調画像 */
  CLOUD_TOP: 'SND/ETC'
} as const
```
</details>
<br />

## License

@api-types/jma-himawari is licensed under a [MIT License](https://github.com/aspida/api-types/blob/master/LICENSE).
