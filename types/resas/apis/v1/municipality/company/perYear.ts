import { MockMethods } from 'axios-mock-server'
import { PrefCode, Headers, Response } from '../../../@types'

export interface Methods {
  get: {
    headers: Headers
    params: {
      prefCode: PrefCode
      cityCode: string
      sicCode: string
      simcCode: string
    }
    response: Response<{
      prefCode: PrefCode
      prefName: string
      cityCode: string
      cityName: string
      sicCode: string
      sicName: string
      simcCode: string
      simcName: string
      data: {
        year: 2009 | 2012 | 2014 | 2016
        value: number
      }[]
    }>
  }
}

export default {
  get: () => [
    200,
    {
      message: null,
      result: {
        prefCode: 11,
        prefName: '埼玉県',
        cityCode: '11362',
        cityName: '皆野町',
        sicName: '製造業',
        sicCode: 'E',
        simcName: 'なめし革・同製品・毛皮製造業',
        simcCode: '20',
        data: [{ year: 2009, value: 0 }, { year: 2012, value: 0 }, { year: 2014, value: 0 }]
      }
    } as Methods['get']['response']
  ]
} as MockMethods
