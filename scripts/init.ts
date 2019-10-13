import os from 'os'
import fs from 'fs-extra'
import ini from 'ini'
import prompts from 'prompts'
import buildApi from 'aspida/dist/buildRouteFile'
import writeApi from 'aspida/dist/writeRouteFile'
import buildMock from 'axios-mock-server/dist/lib/buildRouteFile'
import writeMock from 'axios-mock-server/dist/lib/writeRouteFile'

const gitConfigPath = `${os.homedir()}/.gitconfig`
const { user = {}} = fs.existsSync(gitConfigPath)
  ? ini.parse(fs.readFileSync(gitConfigPath, 'utf8'))
  : { user: { name: '', email: '' }}
const authorName = `${user.name || ''}${user.email ? ` <${user.email}>` : ''}`

const questions = [
  {
    name: 'name',
    type: 'text' as const,
    message: 'API name',
    validate: (name: string) =>
      !/^[0-9a-z-~][0-9a-z-._~]*$/.test(name)
        ? 'String does not match the pattern of "^[0-9a-z-~][0-9a-z-._~]*$".'
        : fs.existsSync(`./libs/${name}`)
        ? `"${name}" already exists.`
        : true
  },
  {
    name: 'author',
    type: 'text' as const,
    message: 'Author name',
    initial: authorName
  },
  {
    name: 'version',
    type: 'text' as const,
    message: 'API first release version',
    initial: '0.0.0',
    validate: (ver: string) => /^[0-9]+\.[0-9]+\.[0-9]+$/.test(ver) ? true : 'String does not match the pattern of "^[0-9]+\.[0-9]+\.[0-9]+$".'
  },
  {
    name: 'baseURL',
    type: 'text' as const,
    message: 'API baseURL',
    initial: 'https://example.com/v1'
  }
]

;(async () => {
  const answers = await prompts(questions)
  const targetPJ = `./libs/${answers.name}`
  fs.copySync('./templates', targetPJ)

  const input = `${targetPJ}/apis`

  writeApi(buildApi(input, answers.baseURL))
  writeMock(buildMock(input, { input }))

  const packageJson = fs.readFileSync('./templates/package.json', 'utf8')
    .replace(/(project_name|<% name %>)/g, answers.name)
    .replace('<% version %>', answers.version)
    .replace('<% author %>', answers.author)
    .replace('<% baseURL %>', answers.baseURL)
    .replace('<% mock-version %>', JSON.parse(fs.readFileSync('./package.json', 'utf8')).devDependencies['axios-mock-server'])

  fs.writeFileSync(`${targetPJ}/package.json`, packageJson, 'utf8')

  const readme = fs.readFileSync('./templates/README.md', 'utf8')
    .replace(/<% name %>/g, answers.name)

  fs.writeFileSync(`${targetPJ}/README.md`, readme, 'utf8')
})()
