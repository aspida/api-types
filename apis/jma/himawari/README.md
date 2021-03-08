# @api-types/jma-himawari 気象庁防災気象情報API
<br />
<div align="center">
  <img src="https://aspida.github.io/api-types/assets/jma/himawari.jpg" alt="@api-types/jma-himawari 気象庁防災気象情報API" />
</div>
<br />

> [気象庁防災気象情報API](https://www.jma.go.jp/bosai/map.html#5/36.138/137.285/&elem=ir&contents=himawari) - 気象庁ホームページから防災気象情報を取得するAPI
<div align="center">
  <a href="https://www.npmjs.com/package/@api-types/jma-himawari">
    <img src="https://img.shields.io/npm/v/@api-types/jma-himawari" alt="npm version" />
  </a>
  <a href="https://www.npmjs.com/package/@api-types/jma-himawari">
    <img src="https://img.shields.io/npm/dm/@api-types/jma-himawari" alt="npm download" />
  </a>
  <a href="https://github.com/aspida/api-types/actions?query=workflow%3A%22Node.js+CI%22">
    <img src="https://github.com/aspida/api-types/workflows/Node.js%20CI/badge.svg?branch=master" alt="Node.js CI" />
  </a>
</div>
<br />
<br />
<br />

参考サイト：https://qiita.com/e_toyoda/items/7a293313a725c4d306c0


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
})()
```

## API Documents

baseURL: https://www.jma.go.jp/bosai/himawari/data
<br />

<details>
<summary><b>/satimg/targetTimes_fd.json</b></summary>

```ts
/**
 * 撮影時刻API
 */
export type Methods = {
  /**
   * 撮影時刻一覧を取得
   */
  get: {
    resBody: TargetTime[]
  }
}
```
</details>

## License

@api-types/jma-himawari is licensed under a [MIT License](https://github.com/aspida/api-types/blob/master/LICENSE).
