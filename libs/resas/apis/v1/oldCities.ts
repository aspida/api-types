import { MockMethods } from 'axios-mock-server'
import { PrefCode, Headers, Response } from '../@types'

export interface Methods {
  get: {
    headers: Headers
    params: {
      prefCode: PrefCode
      cityCode: string
    }
    response: Response<
      {
        prefCode: PrefCode
        cityCode: string
        cityName: string
        oldCityCode: string
        oldCityName: string
      }[]
    >
  }
}

export default {
  get: () => [
    200,
    {
      message: null,
      result: [
        {
          prefCode: 2,
          cityCode: '02201',
          cityName: '青森市',
          oldCityCode: '01',
          oldCityName: '奥内村'
        },
        {
          prefCode: 2,
          cityCode: '02201',
          cityName: '青森市',
          oldCityCode: '02',
          oldCityName: '横内村'
        },
        {
          prefCode: 2,
          cityCode: '02201',
          cityName: '青森市',
          oldCityCode: '03',
          oldCityName: '原別村'
        },
        {
          prefCode: 2,
          cityCode: '02201',
          cityName: '青森市',
          oldCityCode: '04',
          oldCityName: '五郷村'
        },
        {
          prefCode: 2,
          cityCode: '02201',
          cityName: '青森市',
          oldCityCode: '05',
          oldCityName: '後潟村'
        },
        {
          prefCode: 2,
          cityCode: '02201',
          cityName: '青森市',
          oldCityCode: '06',
          oldCityName: '荒川村'
        },
        {
          prefCode: 2,
          cityCode: '02201',
          cityName: '青森市',
          oldCityCode: '07',
          oldCityName: '高田村'
        },
        {
          prefCode: 2,
          cityCode: '02201',
          cityName: '青森市',
          oldCityCode: '08',
          oldCityName: '七和村２－２'
        },
        {
          prefCode: 2,
          cityCode: '02201',
          cityName: '青森市',
          oldCityCode: '10',
          oldCityName: '女鹿沢村２－１'
        },
        {
          prefCode: 2,
          cityCode: '02201',
          cityName: '青森市',
          oldCityCode: '11',
          oldCityName: '新城村'
        },
        {
          prefCode: 2,
          cityCode: '02201',
          cityName: '青森市',
          oldCityCode: '12',
          oldCityName: '青森市'
        },
        {
          prefCode: 2,
          cityCode: '02201',
          cityName: '青森市',
          oldCityCode: '13',
          oldCityName: '大杉村'
        },
        {
          prefCode: 2,
          cityCode: '02201',
          cityName: '青森市',
          oldCityCode: '14',
          oldCityName: '大野村'
        },
        {
          prefCode: 2,
          cityCode: '02201',
          cityName: '青森市',
          oldCityCode: '15',
          oldCityName: '滝内村'
        },
        {
          prefCode: 2,
          cityCode: '02201',
          cityName: '青森市',
          oldCityCode: '16',
          oldCityName: '東岳村'
        },
        {
          prefCode: 2,
          cityCode: '02201',
          cityName: '青森市',
          oldCityCode: '17',
          oldCityName: '筒井町'
        },
        {
          prefCode: 2,
          cityCode: '02201',
          cityName: '青森市',
          oldCityCode: '18',
          oldCityName: '浜館村'
        },
        {
          prefCode: 2,
          cityCode: '02201',
          cityName: '青森市',
          oldCityCode: '20',
          oldCityName: '野沢村２－１'
        },
        {
          prefCode: 2,
          cityCode: '02201',
          cityName: '青森市',
          oldCityCode: '21',
          oldCityName: '野内村'
        },
        {
          prefCode: 2,
          cityCode: '02201',
          cityName: '青森市',
          oldCityCode: '22',
          oldCityName: '浪岡町'
        }
      ]
    } as Methods['get']['response']
  ]
} as MockMethods
