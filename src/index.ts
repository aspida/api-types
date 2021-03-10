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

fs.writeFileSync('package.json', createPackageJson('./', attributes, packageName, org, name))
fs.writeFileSync('tsconfig.json', tsconfig)
fs.copyFileSync('../../../LICENSE', 'LICENSE')

const { text, filePath } = buildAspida('api', attributes)

fs.writeFileSync(filePath, text)
fs.writeFileSync(
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
