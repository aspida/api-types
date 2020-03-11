import { PrefCode } from './@types'

export const createAddArea = (areas: { prefCode: PrefCode; cityCode?: string }[]) =>
  areas
    .slice(0, 10)
    .map(area => `${area.prefCode}_${area.cityCode || ''}`)
    .join(',')

export const createAddIndustry = (industries: { sicCode: string; simcCode?: string }[]) =>
  industries
    .slice(0, 10)
    .map(industry => `${industry.sicCode}_${industry.simcCode || ''}`)
    .join(',')
