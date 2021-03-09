import fs from 'fs'
import path from 'path'
import fm from 'front-matter'
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
const packageJson = {
  name: packageName,
  version: '0.0.0',
  description: `${attributes.title} - ${attributes.description}`,
  license: 'MIT',
  main: 'dist/$api.js',
  types: 'dist/$api.d.ts',
  homepage: attributes.homepage,
  repository: {
    type: 'git',
    url: 'git+https://github.com/aspida/api-types.git'
  },
  bugs: {
    url: 'https://github.com/aspida/api-types/issues'
  },
  files: ['dist'],
  keywords: ['typescript', 'api-types', 'aspida', org, name]
}

const tsconfig = `{
  "extends": "../../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist"
  }
}
`

fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2))
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
