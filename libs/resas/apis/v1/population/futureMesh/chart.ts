import { MockMethods } from 'axios-mock-server'
import { PrefCode, Headers, Response } from '../../../@types'

export interface Methods {
  get: {
    headers: Headers
    params: {
      year: 2010 | 2050
      prefCode: PrefCode
      city_cd: string
      displayMethod: 0 | 1
    }
    response: Response<{
      prefCode: string
      prefName: string
      cityCode: string
      cityName: string
      year: string
      displayMethod: string
      data: {
        classification_cd: string
        classification_name: string
        value1: number
        value2: number
        value3: number
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
        prefCode: '13',
        prefName: '東京都',
        cityCode: '13101',
        cityName: '千代田区',
        year: '2050',
        displayMethod: '0',
        data: [
          {
            classification_cd: '1',
            classification_name: '400人以下',
            value1: 2,
            value2: 20,
            value3: 0
          },
          {
            classification_cd: '2',
            classification_name: '800人以下',
            value1: 0,
            value2: 20,
            value3: 0
          },
          {
            classification_cd: '3',
            classification_name: '1200人以下',
            value1: 0,
            value2: 20,
            value3: 0
          },
          {
            classification_cd: '4',
            classification_name: '1600人以下',
            value1: 0,
            value2: 20,
            value3: 0
          },
          {
            classification_cd: '5',
            classification_name: '2000人以下',
            value1: 1,
            value2: 30,
            value3: 3
          },
          {
            classification_cd: '6',
            classification_name: '2400人以下',
            value1: 0,
            value2: 30,
            value3: 3
          },
          {
            classification_cd: '7',
            classification_name: '2800人以下',
            value1: 0,
            value2: 30,
            value3: 3
          },
          {
            classification_cd: '8',
            classification_name: '3200人以下',
            value1: 0,
            value2: 30,
            value3: 3
          },
          {
            classification_cd: '9',
            classification_name: '3600人以下',
            value1: 0,
            value2: 30,
            value3: 3
          },
          {
            classification_cd: '10',
            classification_name: '4000人以下',
            value1: 0,
            value2: 30,
            value3: 3
          },
          {
            classification_cd: '11',
            classification_name: '4400人以下',
            value1: 1,
            value2: 40,
            value3: 9
          },
          {
            classification_cd: '12',
            classification_name: '4800人以下',
            value1: 0,
            value2: 40,
            value3: 9
          },
          {
            classification_cd: '13',
            classification_name: '5200人以下',
            value1: 0,
            value2: 40,
            value3: 9
          },
          {
            classification_cd: '14',
            classification_name: '5600人以下',
            value1: 0,
            value2: 40,
            value3: 9
          },
          {
            classification_cd: '15',
            classification_name: '6000人以下',
            value1: 0,
            value2: 40,
            value3: 9
          },
          {
            classification_cd: '16',
            classification_name: '6400人以下',
            value1: 0,
            value2: 40,
            value3: 9
          },
          {
            classification_cd: '17',
            classification_name: '6800人以下',
            value1: 0,
            value2: 40,
            value3: 9
          },
          {
            classification_cd: '18',
            classification_name: '7200人以下',
            value1: 2,
            value2: 60,
            value3: 29
          },
          {
            classification_cd: '19',
            classification_name: '7600人以下',
            value1: 0,
            value2: 60,
            value3: 29
          },
          {
            classification_cd: '20',
            classification_name: '7600人超',
            value1: 4,
            value2: 100,
            value3: 100
          }
        ]
      }
    } as Methods['get']['response']
  ]
} as MockMethods
