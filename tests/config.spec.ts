import fs from 'fs'
import path from 'path'
import fm from 'front-matter'
import { createPackageJson } from '../src/createPackageJson'
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
      const packageName = `@api-types/${org}-${name}`

      expect(createPackageJson(nameDir, attributes, packageName, org, name)).toBe(
        fs.readFileSync(path.join(nameDir, 'package.json'), 'utf8')
      )

      const apiDir = path.join(nameDir, 'api')

      expect(
        createReadme(
          packageName,
          org,
          attributes,
          body,
          createEndpoints(apiDir, attributes.trailingSlash),
          createTypes(apiDir),
          createConstants(apiDir)
        )
      ).toBe(fs.readFileSync(path.join(nameDir, 'README.md'), 'utf8'))

      expect(buildAspida(apiDir, attributes)).toBeTruthy()
    })
  })
})
