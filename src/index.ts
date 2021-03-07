import fs from 'fs'
import path from 'path'
import fm from 'front-matter'
import build from 'aspida/dist/buildTemplate'
import { createApiDocs } from './createApiDocs'

const name = path.basename(process.cwd())
const org = path.basename(path.join(process.cwd(), '../'))
const packageName = `@api-types/${org}-${name}`
const configText = fs.readFileSync('config.md', 'utf8')
const { attributes, body } = fm<{
  title: string
  description: string
  homepage: string
  image: string
  baseURL: string
  trailingSlash: boolean
}>(configText)

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

fs.writeFileSync(
  'README.md',
  `# ${packageName} ${attributes.title}
<br />
<div align="center">
  <img src="https://aspida.github.io/api-types/assets/${org}/${
    attributes.image
  }" alt="${packageName} ${attributes.title}" />
</div>
<br />

> [${attributes.title}](${attributes.homepage}) - ${attributes.description}
<div align="center">
  <a href="https://www.npmjs.com/package/${packageName}">
    <img src="https://img.shields.io/npm/v/${packageName}" alt="npm version" />
  </a>
  <a href="https://www.npmjs.com/package/${packageName}">
    <img src="https://img.shields.io/npm/dm/${packageName}" alt="npm download" />
  </a>
  <a href="https://github.com/aspida/api-types/actions?query=workflow%3A%22Node.js+CI%22">
    <img src="https://github.com/aspida/api-types/workflows/Node.js%20CI/badge.svg?branch=master" alt="Node.js CI" />
  </a>
</div>
<br />
<br />
<br />

${body}

## Getting Started

- Using [npm](https://www.npmjs.com/):

  \`\`\`sh
  $ npm install ${packageName} @aspida/axios axios
  \`\`\`

- Using [Yarn](https://yarnpkg.com/):

  \`\`\`sh
  $ yarn add ${packageName} @aspida/axios axios
  \`\`\`

\`index.ts\`
\`\`\`ts
import api from "${packageName}"
import aspida from '@aspida/axios'

;(async () => {
  const client = api(aspida())
  const resBody = await client.foo.baz.$get()
  console.log(resBody)
})()
\`\`\`

## API Documents

baseURL: ${attributes.baseURL}
<br />

${createApiDocs('api', attributes.trailingSlash)}

## License

${packageName} is licensed under a [MIT License](https://github.com/aspida/api-types/blob/master/LICENSE).
`
)
