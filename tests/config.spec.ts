import fs from 'fs'
import path from 'path'
import fm from 'front-matter'
import { createEndpoints } from '../src/createEndpoints'
import { createTypes } from '../src/createTypes'
import { Attributes, createReadme } from '../src/createReadme'
import { createConstants } from '../src/createConstants'
import { buildAspida } from '../src/buildAspida'

test('create README and $api.ts', () => {
  const apisDir = path.join(__dirname, '../apis')

  fs.readdirSync(apisDir).forEach(org => {
    const orgDir = path.join(apisDir, org)
    fs.readdirSync(orgDir).forEach(name => {
      const nameDir = path.join(orgDir, name)
      const { attributes, body } = fm<Attributes>(
        fs.readFileSync(path.join(nameDir, 'config.md'), 'utf8')
      )
      const apiDir = path.join(nameDir, 'api')

      expect(
        createReadme(
          `@api-types/${org}-${name}`,
          org,
          attributes,
          body,
          createEndpoints(apiDir, attributes.trailingSlash),
          createTypes(apiDir),
          createConstants(apiDir)
        )
      ).toBe(fs.readFileSync(path.join(nameDir, 'README.md'), 'utf8'))

      const aspidaFile = path.join(apiDir, '$api.ts')
      const { text, filePath } = buildAspida(apiDir, attributes)
      expect(text).toBe(fs.readFileSync(aspidaFile, 'utf8'))
      expect(filePath).toBe(aspidaFile)
    })
  })
})
