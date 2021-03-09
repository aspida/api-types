import fs from 'fs'
import path from 'path'
import fm from 'front-matter'
import { createEndpoints } from '../src/createEndpoints'
import { createTypes } from '../src/createTypes'
import { Attributes, createReadme } from '../src/createReadme'
import { createConstants } from 'src/createConstants'

test('create README', () => {
  fs.readdirSync(path.join(__dirname, '../apis')).forEach(org => {
    fs.readdirSync(path.join(__dirname, '../apis', org)).forEach(name => {
      const { attributes, body } = fm<Attributes>(
        fs.readFileSync(path.join(__dirname, '../apis', org, name, 'config.md'), 'utf8')
      )
      const apiDir = path.join(__dirname, '../apis', org, name, 'api')
      expect(fs.readFileSync(path.join(__dirname, '../apis', org, name, 'README.md'), 'utf8')).toBe(
        createReadme(
          `@api-types/${org}-${name}`,
          org,
          attributes,
          body,
          createEndpoints(apiDir, attributes.trailingSlash),
          createTypes(apiDir),
          createConstants(apiDir)
        )
      )
    })
  })
})
