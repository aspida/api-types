import fs from 'fs'
import path from 'path'
import rimraf from 'rimraf'
import { execSync } from 'child_process'
import prompts from 'prompts'
import buildApi from 'aspida/dist/buildRouteFile'
import writeApi from 'aspida/dist/writeRouteFile'
import buildMock from 'axios-mock-server/dist/lib/buildRouteFile'
import writeMock from 'axios-mock-server/dist/lib/writeRouteFile'
;(async () => {
  let targetName = process.argv[2]

  if (!targetName) {
    console.log('You can also enter "$ npm run build <API_NAME>".')

    targetName = (await prompts({
      name: 'name',
      type: 'text' as const,
      message: 'API name',
      validate: (name: string) =>
        fs.existsSync(`./libs/${name}`) || `"${name}" does not exist in "lib/*".`
    })).name
  } else if (!fs.existsSync(`./libs/${targetName}`)) {
    console.log(`"${targetName}" does not exist in "lib/*".`)
    return
  }

  const targetPJ = `libs/${targetName}`

  rimraf(`${targetPJ}/dist`, () => {
    const input = `${targetPJ}/apis`
    const info: { [key: string]: any } = JSON.parse(
      fs.readFileSync(`${targetPJ}/package.json`, 'utf8')
    )
    const { baseURL } = info.aspida

    writeApi(buildApi(input, baseURL))
    writeMock(buildMock(input, { input }))

    const SEPARATOR = process.platform === 'win32' ? ';' : ':'
    const env = {
      ...process.env,
      PATH: `${path.resolve('./node_modules/.bin')}${SEPARATOR}${process.env.PATH}`
    }

    try {
      execSync(`tsc --project ./${targetPJ}/tsconfig.json`, {
        cwd: process.cwd(),
        env,
        encoding: 'utf8'
      })

      console.log(`${targetPJ}/dist was built successfully.`)
    } catch (e) {
      console.log(e.stdout)
    }
  })
})()
