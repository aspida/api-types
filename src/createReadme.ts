export type Attributes = {
  title: string
  description: string
  homepage: string
  image: string
  baseURL: string
  trailingSlash: boolean
}

export const createReadme = (
  packageName: string,
  org: string,
  attributes: Attributes,
  body: string,
  apiDocs: string
) => {
  return `# ${packageName} ${attributes.title}
<br />
<div align="center">
  <img src="https://aspida.github.io/api-types/assets/${org}/${attributes.image}" alt="${packageName} ${attributes.title}" />
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
${apiDocs}

## License

${packageName} is licensed under a [MIT License](https://github.com/aspida/api-types/blob/master/LICENSE).
`
}
