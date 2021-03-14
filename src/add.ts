import fs from 'fs'
import path from 'path'
import fm from 'front-matter'
import { createPackageJson } from './createPackageJson'
import { Attributes } from './createReadme'
import { update } from './update'

function add() {
  const [, , org, name] = process.argv

  if (!/^[a-z0-9]{3,}$/.test(org) || !/^[a-z0-9]{5,}$/.test(name)) {
    console.log(
      `Enter "$ npm run add <Organization name (>= 3 alphanumeric chars)> <API name (>= 5 alphanumeric chars)>"`
    )

    return
  }

  const imagePath = `${name}.png`
  const config = `---
title: My cool API
description: My cool API for TypeScript. 
homepage: https://example.com
image: ${imagePath}
baseURL: https://example.com/api/v1
trailingSlash: false
---

\`index.ts\`
\`\`\`ts
import { apiClient } from "./utils/apiClient"

;(async () => {
  const resBody = await apiClient.foo.baz.$get()
  console.log(resBody)

  const img = new Image()
  img.src = apiClient.foo.baz_jpg.$path()
  document.body.appendChild(img)
})()
\`\`\`
`

  const orgDir = path.join(__dirname, '../apis', org)
  const apiDir = path.join(orgDir, name)
  const aspidaDir = path.join(apiDir, 'api')
  if (!fs.existsSync(orgDir)) fs.mkdirSync(orgDir)
  fs.mkdirSync(apiDir)
  fs.mkdirSync(aspidaDir)

  fs.writeFileSync(
    path.join(aspidaDir, 'index.ts'),
    `export type Methods = {
  get: {
    resBody: string
  }
}
`
  )
  fs.writeFileSync(path.join(apiDir, 'config.md'), config)
  fs.writeFileSync(
    path.join(apiDir, 'package.json'),
    createPackageJson(apiDir, fm<Attributes>(config).attributes, '', '', '')
  )
  update()

  const assetsDir = path.join(__dirname, '../docs/assets', org)
  if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir)
  fs.copyFileSync(
    path.join(__dirname, '../docs/logos/png/logo.png'),
    path.join(assetsDir, imagePath)
  )

  console.log(`Success!
$ cd apis/${org}/${name}`)
}

add()
