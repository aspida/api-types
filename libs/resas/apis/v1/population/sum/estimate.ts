import { MockMethods } from 'axios-mock-server'
import { PrefCode, Headers, Response } from '~/@types'

type PopulationData<T extends '総人口' | '転入数' | '転出数' | '出生数' | '死亡数'> = {
  label: T
  data: { year: number; value: number }[]
}

export interface Methods {
  get: {
    headers: Headers
    params: {
      prefCode: PrefCode
      cityCode: string
      addArea?: string
    }
    response: Response<{
      boundaryYear: number
      data: [
        PopulationData<'総人口'>,
        PopulationData<'転入数'>,
        PopulationData<'転出数'>,
        PopulationData<'出生数'>,
        PopulationData<'死亡数'>
      ]
    }>
  }
}

export default {
  get: () => [
    200,
    {
      message: null,
      result: {
        boundaryYear: 2015,
        data: [
          {
            label: '総人口',
            data: [
              { year: 1995, value: 12602 },
              { year: 2000, value: 12199 },
              { year: 2005, value: 11518 },
              { year: 2010, value: 10888 },
              { year: 2015, value: 10133 },
              { year: 2020, value: 9525 },
              { year: 2025, value: 8856 },
              { year: 2030, value: 8200 },
              { year: 2035, value: 7541 },
              { year: 2040, value: 6893 }
            ]
          },
          {
            label: '転入数',
            data: [
              { year: 1994, value: 344 },
              { year: 1995, value: 477 },
              { year: 1996, value: 413 },
              { year: 1997, value: 340 },
              { year: 1998, value: 329 },
              { year: 1999, value: 361 },
              { year: 2000, value: 341 },
              { year: 2001, value: 333 },
              { year: 2002, value: 279 },
              { year: 2003, value: 309 },
              { year: 2004, value: 304 },
              { year: 2005, value: 277 },
              { year: 2006, value: 266 },
              { year: 2007, value: 290 },
              { year: 2008, value: 337 },
              { year: 2009, value: 278 },
              { year: 2010, value: 262 },
              { year: 2011, value: 261 },
              { year: 2012, value: 214 },
              { year: 2013, value: 218 },
              { year: 2014, value: 218 },
              { year: 2015, value: 261 },
              { year: 2016, value: 223 }
            ]
          },
          {
            label: '転出数',
            data: [
              { year: 1994, value: 356 },
              { year: 1995, value: 355 },
              { year: 1996, value: 423 },
              { year: 1997, value: 441 },
              { year: 1998, value: 438 },
              { year: 1999, value: 406 },
              { year: 2000, value: 406 },
              { year: 2001, value: 374 },
              { year: 2002, value: 372 },
              { year: 2003, value: 365 },
              { year: 2004, value: 467 },
              { year: 2005, value: 384 },
              { year: 2006, value: 365 },
              { year: 2007, value: 353 },
              { year: 2008, value: 348 },
              { year: 2009, value: 332 },
              { year: 2010, value: 288 },
              { year: 2011, value: 355 },
              { year: 2012, value: 311 },
              { year: 2013, value: 288 },
              { year: 2014, value: 315 },
              { year: 2015, value: 306 },
              { year: 2016, value: 317 }
            ]
          },
          {
            label: '出生数',
            data: [
              { year: 1994, value: 96 },
              { year: 1995, value: 99 },
              { year: 1996, value: 112 },
              { year: 1997, value: 102 },
              { year: 1998, value: 106 },
              { year: 1999, value: 96 },
              { year: 2000, value: 99 },
              { year: 2001, value: 93 },
              { year: 2002, value: 89 },
              { year: 2003, value: 99 },
              { year: 2004, value: 80 },
              { year: 2005, value: 64 },
              { year: 2006, value: 70 },
              { year: 2007, value: 80 },
              { year: 2008, value: 74 },
              { year: 2009, value: 93 },
              { year: 2010, value: 67 },
              { year: 2011, value: 86 },
              { year: 2012, value: 67 },
              { year: 2013, value: 72 },
              { year: 2014, value: 58 },
              { year: 2015, value: 51 },
              { year: 2016, value: 56 }
            ]
          },
          {
            label: '死亡数',
            data: [
              { year: 1994, value: 130 },
              { year: 1995, value: 134 },
              { year: 1996, value: 129 },
              { year: 1997, value: 99 },
              { year: 1998, value: 135 },
              { year: 1999, value: 124 },
              { year: 2000, value: 128 },
              { year: 2001, value: 123 },
              { year: 2002, value: 140 },
              { year: 2003, value: 137 },
              { year: 2004, value: 146 },
              { year: 2005, value: 147 },
              { year: 2006, value: 126 },
              { year: 2007, value: 144 },
              { year: 2008, value: 163 },
              { year: 2009, value: 161 },
              { year: 2010, value: 165 },
              { year: 2011, value: 132 },
              { year: 2012, value: 158 },
              { year: 2013, value: 165 },
              { year: 2014, value: 173 },
              { year: 2015, value: 154 },
              { year: 2016, value: 173 }
            ]
          }
        ]
      }
    } as Methods['get']['response']
  ]
} as MockMethods
