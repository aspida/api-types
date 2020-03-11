import { MockMethods } from 'axios-mock-server'
import { PrefCode, Headers, Response } from '../../@types'

export interface Methods {
  get: {
    headers: Headers
    params: {
      prefCode: PrefCode
      ageFrom: number
      ageTo: number
    }
    response: Response<{
      line: {
        boundaryYear: number
        data: {
          yearRange: string
          year: number
          value: number
        }[]
      }
      bar: {
        boundaryYear: number
        mandata: {
          year: number
          value: number
        }[]
        womandata: {
          year: number
          value: number
        }[]
      }
    }>
  }
}

export default {
  get: () => [
    200,
    {
      message: null,
      result: {
        line: {
          boundaryYear: 2015,
          data: [
            { yearRange: '1998-2002', year: 2000, value: 1.48 },
            { yearRange: '2003-2007', year: 2005, value: 1.33 },
            { yearRange: '2008-2012', year: 2010, value: 1.48 }
          ]
        },
        bar: {
          boundaryYear: 2015,
          mandata: [
            { year: 1980, value: 3533 },
            { year: 1985, value: 3710 },
            { year: 1990, value: 3837 },
            { year: 1995, value: 4009 },
            { year: 2000, value: 4012 },
            { year: 2005, value: 4027 },
            { year: 2010, value: 3943 },
            { year: 2015, value: 3763 },
            { year: 2020, value: 3580 },
            { year: 2025, value: 3373 },
            { year: 2030, value: 3179 },
            { year: 2035, value: 2953 },
            { year: 2040, value: 2749 }
          ],
          womandata: [
            { year: 1980, value: 3891 },
            { year: 1985, value: 4065 },
            { year: 1990, value: 4149 },
            { year: 1995, value: 4281 },
            { year: 2000, value: 4321 },
            { year: 2005, value: 4390 },
            { year: 2010, value: 4248 },
            { year: 2015, value: 4074 },
            { year: 2020, value: 3795 },
            { year: 2025, value: 3547 },
            { year: 2030, value: 3310 },
            { year: 2035, value: 3090 },
            { year: 2040, value: 2819 }
          ]
        }
      }
    } as Methods['get']['response']
  ]
} as MockMethods
