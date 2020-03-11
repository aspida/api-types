<div align="center">
  <img src="https://aspidajs.github.io/apihub/assets/images/libs/resas/logo.png" alt="RESAS-API for aspida" title="RESAS-API for aspida" />
</div>

[RESAS-API | Cabinet Office,Government Of Japan.](https://opendata.resas-portal.go.jp/)

# Installation

```bash
$ npm install typescript ts-node @types/node axios @aspida/resas
```

# Usage

`index.ts`

Because there is mock data, this script works without registering API key.

```javascript
import axios from "axios"
import api, { mock, ApiTypes } from "@aspida/resas"

if (process.env.NODE_ENV === "production") {
  // Get API key here: https://opendata.resas-portal.go.jp/form.html
  axios.defaults.headers.common["X-API-KEY"] = process.env.API_KEY
} else {
  mock()
}

;(async () => {
  const prefCode = ApiTypes.PrefCode.Hokkaido
  const cities = await api().v1.cities.$get({ params: { prefCode } })
  const { cityCode } = cities.result.filter(city => city.cityName === "札幌市")[0]

  const population = await api().v1.population.composition.perYear.$get({
    params: { prefCode, cityCode }
  })

  console.log(population.result)
})()
```

`package.json`

```json
{
  "scripts": {
    "start": "ts-node index"
  }
}
```

# Run

```bash
$ npm start
```

# Result

```javascript
{ boundaryYear: 2015,
  data:
   [ { label: '総人口', data: [Array] },
     { label: '年少人口', data: [Array] },
     { label: '生産年齢人口', data: [Array] },
     { label: '老年人口', data: [Array] } ] }
```
