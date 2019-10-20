import { MockMethods } from 'axios-mock-server'
import { PrefCode, Headers, Response } from '~/@types'

export interface Methods {
  get: {
    headers: Headers
    params: {
      prefCode: PrefCode
      cityCode: string
      addArea?: string
    }
    response: Response<{
      line: {
        boundaryYear: number
        data: {
          year: number
          value: number
        }[]
      }
      bar: {
        data: {
          year: number
          sum: number
          class: {
            label: string
            value: number
          }[]
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
            { year: 1985, value: -0.85 },
            { year: 1990, value: -1.06 },
            { year: 1995, value: 0.25 },
            { year: 2000, value: -3.19 },
            { year: 2005, value: -5.57 },
            { year: 2010, value: -5.46 },
            { year: 2015, value: -6.92 },
            { year: 2020, value: -5.99 },
            { year: 2025, value: -7.01 },
            { year: 2030, value: -7.4 },
            { year: 2035, value: -8.03 },
            { year: 2040, value: -8.58 }
          ]
        },
        bar: {
          data: [
            {
              year: 1985,
              sum: -0.85,
              class: [
                { label: '老年人口', value: 9.81 },
                { label: '生産年齢人口', value: -1.47 },
                { label: '年少人口', value: -4.7 }
              ]
            },
            {
              year: 1990,
              sum: -1.06,
              class: [
                { label: '老年人口', value: 22.27 },
                { label: '生産年齢人口', value: -1.11 },
                { label: '年少人口', value: -15.27 }
              ]
            },
            {
              year: 1995,
              sum: 0.25,
              class: [
                { label: '老年人口', value: 21.82 },
                { label: '生産年齢人口', value: -1.17 },
                { label: '年少人口', value: -13.93 }
              ]
            },
            {
              year: 2000,
              sum: -3.19,
              class: [
                { label: '老年人口', value: 13.45 },
                { label: '生産年齢人口', value: -5.62 },
                { label: '年少人口', value: -14.4 }
              ]
            },
            {
              year: 2005,
              sum: -5.57,
              class: [
                { label: '老年人口', value: 5.84 },
                { label: '生産年齢人口', value: -7.4 },
                { label: '年少人口', value: -16.54 }
              ]
            },
            {
              year: 2010,
              sum: -5.46,
              class: [
                { label: '老年人口', value: 4.43 },
                { label: '生産年齢人口', value: -9.16 },
                { label: '年少人口', value: -8.38 }
              ]
            },
            {
              year: 2015,
              sum: -6.92,
              class: [
                { label: '老年人口', value: 8.27 },
                { label: '生産年齢人口', value: -13.28 },
                { label: '年少人口', value: -13.39 }
              ]
            },
            {
              year: 2020,
              sum: -5.99,
              class: [
                { label: '老年人口', value: 2.18 },
                { label: '生産年齢人口', value: -9.42 },
                { label: '年少人口', value: -13.28 }
              ]
            },
            {
              year: 2025,
              sum: -7.01,
              class: [
                { label: '老年人口', value: -2.29 },
                { label: '生産年齢人口', value: -9.06 },
                { label: '年少人口', value: -13.4 }
              ]
            },
            {
              year: 2030,
              sum: -7.4,
              class: [
                { label: '老年人口', value: -5.05 },
                { label: '生産年齢人口', value: -8.28 },
                { label: '年少人口', value: -12.1 }
              ]
            },
            {
              year: 2035,
              sum: -8.03,
              class: [
                { label: '老年人口', value: -6.95 },
                { label: '生産年齢人口', value: -8.36 },
                { label: '年少人口', value: -10.85 }
              ]
            },
            {
              year: 2040,
              sum: -8.58,
              class: [
                { label: '老年人口', value: -3.85 },
                { label: '生産年齢人口', value: -12.28 },
                { label: '年少人口', value: -8.91 }
              ]
            }
          ]
        }
      }
    } as Methods['get']['response']
  ]
} as MockMethods
