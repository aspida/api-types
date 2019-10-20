import { PrefCode } from '~/@types'

export const createAddArea = (areas: { prefCode: PrefCode; cityCode: string }[]) =>
  areas
    .slice(0, 10)
    .map(area => `${area.prefCode}_${area.cityCode}`)
    .join(',')
