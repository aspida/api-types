import fs from 'fs'
import path from 'path'
import build from 'aspida/dist/buildTemplate'
import { Attributes } from './createReadme'

export const buildAspida = (input: string, attributes: Attributes) =>
  build({
    input: input,
    baseURL: attributes.baseURL,
    trailingSlash: attributes.trailingSlash,
    outputEachDir: true,
    outputMode: 'all'
  }).map((result, i) => {
    if (i) return result

    let { text } = result

    if (fs.existsSync(path.join(input, '@types/index.ts'))) {
      text = text.replace('export default api', "export * from './@types'\nexport default api")
    }

    if (fs.existsSync(path.join(input, '@constants/index.ts'))) {
      text = text.replace('export default api', "export * from './@constants'\nexport default api")
    }

    return { text, filePath: result.filePath }
  })
