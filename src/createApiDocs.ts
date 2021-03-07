import { DirentTree, getDirentTree } from 'aspida/dist/getDirentTree'

export const createApiDocs = (input: string, trailingSlash: boolean) => {
  let docs = ''

  const walkDir = (tree: DirentTree) => {
    tree.children.forEach(c => {
      if (c.isDir) {
        walkDir(c.tree)
      } else {
        const endpoint = `${tree.path.replace('api', '')}/${c.name.replace(/(^index)?\.ts$/, '')}${
          trailingSlash ? '/' : ''
        }`

        docs = `${docs}<details>
<summary><b>${endpoint}</b></summary>
${c.methods.map(
  m => `
\`\`\`ts
${m.props.query?.value}
\`\`\`
`
)}
</details>`
      }
    })
  }

  walkDir(getDirentTree(input))

  return docs
}
