import { MockMethods } from 'axios-mock-server'
import { PrefCode, Headers, Response } from '../../../@types'

export interface Methods {
  get: {
    headers: Headers
    params: {
      year: 2012
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
        year: 2012
        value: number
        concealmentFlg: 0 | 1
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
        prefCode: 13,
        prefName: '東京都',
        cityCode: '13101',
        cityName: '千代田区',
        sicName: '卸売業、小売業',
        sicCode: 'I',
        simcName: '繊維・衣服等卸売業',
        simcCode: '51',
        data: [
          {
            year: 2012,
            value: 62195,
            concealmentFlg: 0
          }
        ]
      }
    } as Methods['get']['response']
  ]
} as MockMethods
