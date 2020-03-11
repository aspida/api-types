import { MockMethods } from 'axios-mock-server'
import { PrefCode, Headers, Response } from '../../../@types'

export interface Methods {
  get: {
    headers: Headers
    params: {
      prefecture_cd: PrefCode
      displayMethod: 0 | 1
      matter: 0 | 1 | 2 | 3
      classification: 0 | 1 | 2
      displayType: '00' | '10' | '11' | '12' | '20'
      gender: 0 | 1 | 2
    }
    response: Response<{
      changes: {
        label: string
        prefCode: string
        data: {
          year: number
          value: number
        }[]
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
        changes: [
          {
            label: '東京都',
            prefCode: '13',
            data: [
              { year: 2000, value: 55.3 },
              { year: 2001, value: 52.6 },
              { year: 2002, value: 46.3 },
              { year: 2003, value: 50.3 },
              { year: 2004, value: 46.6 },
              { year: 2005, value: 59.8 },
              { year: 2006, value: 53 },
              { year: 2007, value: 57.1 },
              { year: 2008, value: 47.9 },
              { year: 2009, value: 60.9 },
              { year: 2010, value: 54.7 },
              { year: 2011, value: 65.8 },
              { year: 2012, value: 64.4 },
              { year: 2013, value: 64.5 },
              { year: 2014, value: 66.4 },
              { year: 2015, value: 53.7 },
              { year: 2016, value: 77.1 }
            ]
          }
        ]
      }
    } as Methods['get']['response']
  ]
} as MockMethods
