import fs from 'fs'
import path from 'path'
import rimraf from 'rimraf'
import { execSync } from 'child_process'
import buildApi from 'aspida/dist/buildRouteFile'
import writeApi from 'aspida/dist/writeRouteFile'
import buildMock from 'axios-mock-server/dist/lib/buildRouteFile'
import writeMock from 'axios-mock-server/dist/lib/writeRouteFile'

const targetName = process.argv[2]

if (!targetName) {
  console.log('call with API name like "$ npm run build twitter".')
} else {
  const targetPJ = `libs/${targetName}`

  rimraf(`${targetPJ}/dist`, () => {
    const input = `${targetPJ}/apis`
    const info: { [key: string]: any } = JSON.parse(fs.readFileSync(`${targetPJ}/package.json`, 'utf8'))
    const { baseURL } = info.aspida

    writeApi(buildApi(input, baseURL))
    writeMock(buildMock(input, { input }))
    
    const SEPARATOR = process.platform === 'win32' ? ';' : ':'
    const env = {
      ...process.env,
      PATH: `${path.resolve("./node_modules/.bin")}${SEPARATOR}${process.env.PATH}`
    }

    try {
      execSync(
        `tsc --project ./${targetPJ}/tsconfig.json`,
        { cwd: process.cwd(), env, encoding: 'utf8' }
      )

      console.log(`${targetPJ}/dist was built successfully.`)
    } catch (e) {
      console.log(e.stdout)
    }
  })
}
