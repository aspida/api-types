import { DirentTree, getDirentTree } from 'aspida/dist/getDirentTree'

export const createEndpoints = (input: string, trailingSlash: boolean) => {
  let docs = ''

  const walkDir = (tree: DirentTree) => {
    tree.children.forEach(c => {
      if (c.isDir) {
        walkDir(c.tree)
      } else {
        const endpoint = `${tree.path.replace(input, '')}${
          c.name === 'index.ts' ? '' : `/${c.name.replace(/(^index)?\.ts$/, '')}`
        }${trailingSlash ? '/' : ''}`

        docs = `${docs}
<details>
<summary><b>${endpoint}</b></summary>
<br />

\`\`\`ts
${c.$textForApiTypes.trim().replace('export ', '')}
\`\`\`
</details>`
      }
    })
  }

  walkDir(getDirentTree(input))

  return docs
}
