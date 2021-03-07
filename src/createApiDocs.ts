import { DirentTree, getDirentTree } from 'aspida/dist/getDirentTree'

export const createApiDocs = (input: string, trailingSlash: boolean) => {
  let docs = ''

  const walkDir = (tree: DirentTree) => {
    tree.children.forEach(c => {
      if (c.isDir) {
        walkDir(c.tree)
      } else {
        docs = `${docs}
${tree.path.replace('api', '')}/${c.name.replace(/(^index)?\.ts$/, '')}${trailingSlash ? '/' : ''}
${c.methods.map(
  m => `${m.name.toUpperCase()}
\`\`\`ts
${m.props.query?.value}
\`\`\`
`
)}
`
      }
    })
  }

  walkDir(getDirentTree(input))

  return docs
}
