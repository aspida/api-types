import fs from 'fs'
import path from 'path'
import fm from 'front-matter'
import { createPackageJson } from './createPackageJson'
import { createEndpoints } from './createEndpoints'
import { createTypes } from './createTypes'
import { Attributes, createReadme } from './createReadme'
import { createConstants } from './createConstants'
import { buildAspida } from './buildAspida'

const name = path.basename(process.cwd())
const org = path.basename(path.join(process.cwd(), '../'))
const packageName = `@api-types/${org}-${name}`
const configText = fs.readFileSync('config.md', 'utf8')
const { attributes, body } = fm<Attributes>(configText)
const tsconfig = `{
  "extends": "../../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist"
  }
}
`

fs.promises.writeFile('package.json', createPackageJson('./', attributes, packageName, org, name))
fs.promises.writeFile('tsconfig.json', tsconfig)
fs.promises.copyFile('../../../LICENSE', 'LICENSE')

buildAspida('api', attributes).forEach(({ text, filePath }) =>
  fs.promises.writeFile(filePath, text)
)

fs.promises.writeFile(
  'README.md',
  createReadme(
    packageName,
    org,
    attributes,
    body,
    createEndpoints('api', attributes.trailingSlash),
    createTypes('api'),
    createConstants('api')
  )
)
