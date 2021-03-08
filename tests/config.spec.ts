import fs from 'fs'
import path from 'path'
import fm from 'front-matter'
import { createApiDocs } from '../src/createApiDocs'
import { Attributes, createReadme } from '../src/createReadme'

test('create README', () => {
  fs.readdirSync(path.join(__dirname, '../apis')).forEach(org => {
    fs.readdirSync(path.join(__dirname, '../apis', org)).forEach(name => {
      const { attributes, body } = fm<Attributes>(
        fs.readFileSync(path.join(__dirname, '../apis', org, name, 'config.md'), 'utf8')
      )
      expect(fs.readFileSync(path.join(__dirname, '../apis', org, name, 'README.md'), 'utf8')).toBe(
        createReadme(
          `@api-types/${org}-${name}`,
          org,
          attributes,
          body,
          createApiDocs(path.join(__dirname, '../apis', org, name, 'api'), attributes.trailingSlash)
        )
      )
    })
  })
})
