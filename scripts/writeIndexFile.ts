import fs from 'fs'

export default (dirPath: string) => {
  const input = `${dirPath}/apis`
  const hasTypes = fs.existsSync(`${input}/@types`) || fs.existsSync(`${input}/@types.ts`)
  const hasUtils = fs.existsSync(`${input}/@utils`) || fs.existsSync(`${input}/@utils.ts`)
  const text = `import { version } from './package.json'
import api, { apiBaseURL, ApiInstance${hasTypes ? ', ApiTypes' : ''}${
    hasUtils ? ', apiUtils' : ''
  } } from './apis/$api'
import mock from './apis/$mock'

export { version, apiBaseURL, ApiInstance, mock${hasTypes ? ', ApiTypes' : ''}${
    hasUtils ? ', apiUtils' : ''
  } }

export default api
`

  fs.writeFileSync(`${dirPath}/index.ts`, text, 'utf8')
}
