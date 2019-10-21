import { MockMethods } from 'axios-mock-server'
import { PrefCode, Headers, Response } from '../../../@types'

export interface Methods {
  get: {
    headers: Headers
    params: {
      prefCode: PrefCode
      cityCode: string
    }
    response: Response<{
      data: {
        year: number
        positiveAgeClasses: {
          ageClass: number
          age: string
          value: number
        }[]
        negativeAgeClasses: {
          ageClass: number
          age: string
          value: number
        }[]
        total: {
          value: number
        }
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
        data: [
          {
            year: 2010,
            positiveAgeClasses: [
              { ageClass: 1, age: '0～14歳', value: 119 },
              { ageClass: 2, age: '15～64歳', value: 609 }
            ],
            negativeAgeClasses: [{ ageClass: 3, age: '65歳～', value: -67 }],
            total: { value: 661 }
          },
          {
            year: 2011,
            positiveAgeClasses: [
              { ageClass: 1, age: '0～14歳', value: 134 },
              { ageClass: 2, age: '15～64歳', value: 626 }
            ],
            negativeAgeClasses: [{ ageClass: 3, age: '65歳～', value: -61 }],
            total: { value: 699 }
          },
          {
            year: 2012,
            positiveAgeClasses: [
              { ageClass: 1, age: '0～14歳', value: 115 },
              { ageClass: 2, age: '15～64歳', value: 1023 }
            ],
            negativeAgeClasses: [{ ageClass: 3, age: '65歳～', value: -61 }],
            total: { value: 1077 }
          },
          {
            year: 2013,
            positiveAgeClasses: [
              { ageClass: 1, age: '0～14歳', value: 254 },
              { ageClass: 2, age: '15～64歳', value: 1724 }
            ],
            negativeAgeClasses: [{ ageClass: 3, age: '65歳～', value: -31 }],
            total: { value: 1947 }
          },
          {
            year: 2014,
            positiveAgeClasses: [
              { ageClass: 1, age: '0～14歳', value: 351 },
              { ageClass: 2, age: '15～64歳', value: 2032 },
              { ageClass: 3, age: '65歳～', value: 94 }
            ],
            total: { value: 2477 }
          },
          {
            year: 2015,
            positiveAgeClasses: [
              { ageClass: 1, age: '0～14歳', value: 150 },
              { ageClass: 2, age: '15～64歳', value: 1321 }
            ],
            negativeAgeClasses: [{ ageClass: 3, age: '65歳～', value: -91 }],
            total: { value: 1380 }
          },
          {
            year: 2016,
            positiveAgeClasses: [
              { ageClass: 1, age: '0～14歳', value: 80 },
              { ageClass: 2, age: '15～64歳', value: 859 }
            ],
            negativeAgeClasses: [{ ageClass: 3, age: '65歳～', value: -58 }],
            total: { value: 881 }
          },
          {
            year: 2017,
            positiveAgeClasses: [
              { ageClass: 1, age: '0～14歳', value: 152 },
              { ageClass: 2, age: '15～64歳', value: 954 }
            ],
            negativeAgeClasses: [{ ageClass: 3, age: '65歳～', value: -24 }],
            total: { value: 1082 }
          }
        ]
      }
    } as Methods['get']['response']
  ]
} as MockMethods
