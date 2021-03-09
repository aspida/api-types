import fs from 'fs'
import path from 'path'
import { listFiles } from './listFiles'

export const createTypes = (input: string) => {
  if (!fs.existsSync(path.join(input, '@types/index.ts'))) return ''

  let types = ''

  const texts = listFiles(path.join(input, '@types'))
    .map(file => fs.readFileSync(file, 'utf8'))
    .join('')
    .split(/(?:^|\n)export /g)

  texts
    .slice(1)
    .map((text, i) => {
      const prevText = texts[i]
      const commentIndex = prevText.lastIndexOf('/**')
      const comment = commentIndex !== -1 ? `${prevText.slice(commentIndex)}\n` : ''
      const { length } = text
      let cursor = 0
      let depth = 1

      while (depth && cursor <= length) {
        if (text[cursor] === '}') {
          depth -= 1
        } else if (text[cursor] === '{') {
          depth += 1
        }

        cursor += 1
      }

      return {
        comment,
        type: text.slice(0, cursor - 2),
        name: text.match(/^(?:interface|type) (.+?) /)?.[1] ?? ''
      }
    })
    .sort((a, b) => (a.name < b.name ? -1 : 1))
    .forEach(({ comment, type, name }) => {
      types = `${types}
<details>
<summary><b>${name}</b></summary>
<br />

\`\`\`ts
${comment}${type}
\`\`\`
</details>`
    })

  return `
## Types
${types}
<br />
`
}
