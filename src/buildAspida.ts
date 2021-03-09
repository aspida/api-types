import fs from 'fs'
import path from 'path'
import build from 'aspida/dist/buildTemplate'
import { Attributes } from './createReadme'

export const buildAspida = (input: string, attributes: Attributes) => {
  const [{ text, filePath }] = build({
    input: input,
    baseURL: attributes.baseURL,
    trailingSlash: attributes.trailingSlash,
    outputEachDir: false,
    outputMode: 'all'
  })

  let aspidaText = text

  if (fs.existsSync(path.join(input, '@types/index.ts'))) {
    aspidaText = aspidaText.replace(
      'export default api',
      "export * from './@types'\nexport default api"
    )
  }

  if (fs.existsSync(path.join(input, '@constants/index.ts'))) {
    aspidaText = aspidaText.replace(
      'export default api',
      "export * from './@constants'\nexport default api"
    )
  }

  return { text: aspidaText, filePath }
}
