import { MockMethods } from 'axios-mock-server'
import { PrefCode, Headers, Response } from '../../../@types'

export interface Methods {
  get: {
    headers: Headers
    params: {
      year: 2005 | 2010 | 2015 | 2020
      prefecture_cd: PrefCode
      city_cd: string
      matter: 0 | 3
      displayMethod: 0 | 1
    }
    response: Response<{
      prefCode: string
      prefName: string
      cityCode: string
      cityName: string
      year: string
      displayMethod: string
      matter: string
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
        year: '2010',
        displayMethod: '0',
        matter: '0',
        data: [
          {
            classification_cd: '1',
            classification_name: '250人以下',
            value1: 12,
            value2: 32,
            value3: 1
          },
          {
            classification_cd: '2',
            classification_name: '500人以下',
            value1: 2,
            value2: 37,
            value3: 2
          },
          {
            classification_cd: '3',
            classification_name: '750人以下',
            value1: 0,
            value2: 37,
            value3: 2
          },
          {
            classification_cd: '4',
            classification_name: '1000人以下',
            value1: 5,
            value2: 50,
            value3: 11
          },
          {
            classification_cd: '5',
            classification_name: '1250人以下',
            value1: 2,
            value2: 55,
            value3: 16
          },
          {
            classification_cd: '6',
            classification_name: '1500人以下',
            value1: 3,
            value2: 63,
            value3: 25
          },
          {
            classification_cd: '7',
            classification_name: '1750人以下',
            value1: 2,
            value2: 68,
            value3: 32
          },
          {
            classification_cd: '8',
            classification_name: '2000人以下',
            value1: 2,
            value2: 74,
            value3: 39
          },
          {
            classification_cd: '9',
            classification_name: '2250人以下',
            value1: 3,
            value2: 82,
            value3: 52
          },
          {
            classification_cd: '10',
            classification_name: '2500人以下',
            value1: 1,
            value2: 84,
            value3: 57
          },
          {
            classification_cd: '11',
            classification_name: '2750人以下',
            value1: 1,
            value2: 87,
            value3: 63
          },
          {
            classification_cd: '12',
            classification_name: '3000人以下',
            value1: 1,
            value2: 89,
            value3: 68
          },
          {
            classification_cd: '13',
            classification_name: '3250人以下',
            value1: 2,
            value2: 95,
            value3: 81
          },
          {
            classification_cd: '14',
            classification_name: '3500人以下',
            value1: 1,
            value2: 97,
            value3: 89
          },
          {
            classification_cd: '15',
            classification_name: '3750人以下',
            value1: 0,
            value2: 97,
            value3: 89
          },
          {
            classification_cd: '16',
            classification_name: '4000人以下',
            value1: 0,
            value2: 97,
            value3: 89
          },
          {
            classification_cd: '17',
            classification_name: '4250人以下',
            value1: 0,
            value2: 97,
            value3: 89
          },
          {
            classification_cd: '18',
            classification_name: '4500人以下',
            value1: 0,
            value2: 97,
            value3: 89
          },
          {
            classification_cd: '19',
            classification_name: '4750人以下',
            value1: 0,
            value2: 97,
            value3: 89
          },
          {
            classification_cd: '20',
            classification_name: '4750人超',
            value1: 1,
            value2: 100,
            value3: 100
          }
        ]
      }
    } as Methods['get']['response']
  ]
} as MockMethods
