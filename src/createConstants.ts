import fs from 'fs'
import path from 'path'
import { listFiles } from './listFiles'

export const createConstants = (input: string) => {
  if (!fs.existsSync(path.join(input, '@constants/index.ts'))) return ''

  let constants = ''

  const texts = listFiles(path.join(input, '@constants'))
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
        constant: `${text.slice(0, cursor - 2)}${
          text.slice(cursor - 1).startsWith('as const') ? ' as const' : ''
        }`,
        name: text.match(/^const (.+?) /)?.[1] ?? ''
      }
    })
    .sort((a, b) => (a.name < b.name ? -1 : 1))
    .forEach(({ comment, constant, name }) => {
      constants = `${constants}
<details>
<summary><b>${name}</b></summary>
<br />

\`\`\`ts
${comment}${constant}
\`\`\`
</details>`
    })

  return `
## Constants
${constants}
<br />
`
}
