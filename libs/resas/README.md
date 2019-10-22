<div align="center">
  <img src="https://aspidajs.github.io/apihub/assets/images/libs/resas/logo.png" alt="RESAS-API for aspida" title="RESAS-API for aspida" />
</div>

[RESAS-API | Cabinet Office,Government Of Japan.](https://opendata.resas-portal.go.jp/)

# Installation

```bash
$ npm install typescript ts-node @types/node axios @aspida/resas
```

# Usage

`index.js`

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

  console.log(population)
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

```json
{
  "message": null,
  "result": {
    "boundaryYear": 2015,
    "data": [
      {
        "label": "総人口",
        "data": [
          { "year": 1980, "value": 12817 },
          { "year": 1985, "value": 12707 },
          { "year": 1990, "value": 12571 },
          { "year": 1995, "value": 12602 },
          { "year": 2000, "value": 12199 },
          { "year": 2005, "value": 11518 },
          { "year": 2010, "value": 10888 },
          { "year": 2015, "value": 10133 },
          { "year": 2020, "value": 9275 },
          { "year": 2025, "value": 8431 },
          { "year": 2030, "value": 7610 },
          { "year": 2035, "value": 6816 },
          { "year": 2040, "value": 6048 },
          { "year": 2045, "value": 5324 }
        ]
      }
    ]
  }
}
```
