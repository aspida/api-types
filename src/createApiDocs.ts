import { DirentTree, getDirentTree } from 'aspida/dist/getDirentTree'

export const createApiDocs = (input: string, trailingSlash: boolean) => {
  let docs = ''

  const walkDir = (tree: DirentTree) => {
    tree.children.forEach(c => {
      if (c.isDir) {
        walkDir(c.tree)
      } else {
        const endpoint = `${tree.path.replace(input, '')}/${c.name.replace(/(^index)?\.ts$/, '')}${
          trailingSlash ? '/' : ''
        }`

        docs = `${docs}
<details>
<summary><b>${endpoint}</b></summary>

\`\`\`ts
${c.$textForApiTypes.trim()}
\`\`\`
</details>`
      }
    })
  }

  walkDir(getDirentTree(input))

  return docs
}
