import fs from 'fs'
import path from 'path'
import fm from 'front-matter'
import build from 'aspida/dist/buildTemplate'

const dirName = path.basename(process.cwd())
const [org, name] = dirName.split('-')
const configText = fs.readFileSync('config.md', 'utf8')
const { attributes } = fm<{
  description: string
  homepage: string
  baseURL: string
  trailingSlash: boolean
}>(configText)

const packageJson = {
  name: `@api-types/${dirName}`,
  version: '0.0.0',
  description: attributes.description,
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
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist"
  }
}
`

fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2))
fs.writeFileSync('tsconfig.json', tsconfig)

const [{ text, filePath }] = build({
  input: 'api',
  baseURL: attributes.baseURL,
  trailingSlash: attributes.trailingSlash,
  outputEachDir: false,
  outputMode: 'all'
})

fs.writeFileSync(
  filePath,
  text.replace('export default api', "export * from './@types'\nexport default api")
)
