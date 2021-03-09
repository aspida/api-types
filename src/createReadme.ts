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
  endpoints: string,
  types: string,
  constants: string
) => {
  return `<!-- This file is automatically generated from config.md -->
# ${packageName} ${attributes.title}

<br />
<div align="center">
  <img src="https://aspida.github.io/api-types/assets/${org}/${attributes.image}" alt="${packageName} ${attributes.title}" />
</div>
<br />

> [${attributes.title}](${attributes.homepage}) - ${attributes.description}

<a href="https://www.npmjs.com/package/${packageName}">
  <img src="https://img.shields.io/npm/v/${packageName}" alt="npm version" />
</a>
<a href="https://www.npmjs.com/package/${packageName}">
  <img src="https://img.shields.io/npm/dm/${packageName}" alt="npm download" />
</a>
<br />
<br />

## Getting Started

- Using [npm](https://www.npmjs.com/):

  \`\`\`sh
  $ npm install ${packageName} @aspida/axios axios
  \`\`\`

- Using [Yarn](https://yarnpkg.com/):

  \`\`\`sh
  $ yarn add ${packageName} @aspida/axios axios
  \`\`\`

\`utils/apiClient.ts\`
\`\`\`ts
import api from "${packageName}"
import aspida from '@aspida/axios'

export const apiClient = api(aspida())
\`\`\`
<br />

## Usage

${body}
<br />

## Endpoints

baseURL: ${attributes.baseURL}
<br />
${endpoints}
<br />
${types}${constants}
## License

${packageName} is licensed under a [MIT License](https://github.com/aspida/api-types/blob/master/LICENSE).
`
}
