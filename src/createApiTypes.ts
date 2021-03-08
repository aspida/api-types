import fs from 'fs'
import path from 'path'

const listFiles = (targetDir: string) => {
  const list: string[] = []

  fs.readdirSync(targetDir).forEach(file => {
    const target = path.posix.join(targetDir, file)

    if (fs.statSync(target).isFile()) {
      list.push(target)
    } else {
      list.push(...listFiles(target))
    }
  })

  return list
}

export const createApiTypes = (input: string) => {
  let docs = ''

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
      docs = `${docs}
<details>
<summary><b>${name}</b></summary>
<br />

\`\`\`ts
${comment}${type}
\`\`\`
</details>`
    })

  return docs
}
