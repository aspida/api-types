import fs from 'fs'
import path from 'path'
import fm from 'front-matter'
import { createPackageJson } from './createPackageJson'
import { createEndpoints } from './createEndpoints'
import { createTypes } from './createTypes'
import { Attributes, createReadme } from './createReadme'
import { createConstants } from './createConstants'
import { buildAspida } from './buildAspida'

function update() {
  const [, , org, name] = process.argv
  const dirPath = path.join(__dirname, '../apis', org, name)

  if (!fs.existsSync(dirPath)) {
    console.log(`Enter "$ npm run update <Organization name> <API name>"`)

    return
  }

  const packageName = `@api-types/${org}-${name}`
  const configText = fs.readFileSync(path.join(dirPath, 'config.md'), 'utf8')
  const { attributes, body } = fm<Attributes>(configText)
  const tsconfig = `{
  "extends": "../../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist"
  }
}
`

  fs.promises.writeFile(
    path.join(dirPath, 'package.json'),
    createPackageJson(dirPath, attributes, packageName, org, name)
  )
  fs.promises.writeFile(path.join(dirPath, 'tsconfig.json'), tsconfig)
  fs.promises.copyFile('LICENSE', path.join(dirPath, 'LICENSE'))

  buildAspida(path.join(dirPath, 'api'), attributes).forEach(({ text, filePath }) =>
    fs.promises.writeFile(filePath, text)
  )

  fs.promises.writeFile(
    path.join(dirPath, 'README.md'),
    createReadme(
      packageName,
      org,
      attributes,
      body,
      createEndpoints(path.join(dirPath, 'api'), attributes.trailingSlash),
      createTypes(path.join(dirPath, 'api')),
      createConstants(path.join(dirPath, 'api'))
    )
  )
}

update()
