import { MockMethods } from 'axios-mock-server'
import { PrefCode, Headers, Response } from '../../../@types'

export interface Methods {
  get: {
    headers: Headers
    params: {
      year: 2012
      prefCode: PrefCode
      areaType: 1 | 2
      dispType: 1 | 2 | 3
      sicCode: string
      simcCode: string
      addIndustry?: string
    }
    response: Response<{
      prefCode: string
      prefName: string
      sicCode: string
      sicName: string
      simcCode: string
      simcName: string
      prefectures: {
        prefCode: PrefCode
        prefName: string
        value: number
      }[]
      cities: {
        prefCode: PrefCode
        prefName: string
        cityCode: string
        cityName: string
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
        prefCode: '11',
        prefName: '埼玉県',
        sicCode: 'E',
        sicName: '製造業',
        simcCode: '20',
        simcName: 'なめし革・同製品・毛皮製造業',
        prefectures: [
          { prefCode: 1, prefName: '北海道', value: 0.30848 },
          { prefCode: 3, prefName: '岩手県', value: 2.21218 },
          { prefCode: 4, prefName: '宮城県', value: 0.42222 },
          { prefCode: 5, prefName: '秋田県', value: 3.44696 },
          { prefCode: 6, prefName: '山形県', value: 4.54647 },
          { prefCode: 7, prefName: '福島県', value: 2.53323 },
          { prefCode: 8, prefName: '茨城県', value: 0.36249 },
          { prefCode: 9, prefName: '栃木県', value: 0.50879 },
          { prefCode: 10, prefName: '群馬県', value: 0.07647 },
          { prefCode: 11, prefName: '埼玉県', value: 2.03076 },
          { prefCode: 12, prefName: '千葉県', value: 0.69098 },
          { prefCode: 13, prefName: '東京都', value: 1.01792 },
          { prefCode: 14, prefName: '神奈川県', value: 0.07523 },
          { prefCode: 15, prefName: '新潟県', value: 0.68978 },
          { prefCode: 16, prefName: '富山県', value: 0.60879 },
          { prefCode: 17, prefName: '石川県', value: 0.10467 },
          { prefCode: 18, prefName: '福井県', value: 0.13289 },
          { prefCode: 19, prefName: '山梨県', value: 0.64245 },
          { prefCode: 20, prefName: '長野県', value: 0.39188 },
          { prefCode: 21, prefName: '岐阜県', value: 0.17422 },
          { prefCode: 22, prefName: '静岡県', value: 0.32037 },
          { prefCode: 23, prefName: '愛知県', value: 0.53636 },
          { prefCode: 24, prefName: '三重県', value: 0.11075 },
          { prefCode: 25, prefName: '滋賀県', value: 0.28875 },
          { prefCode: 26, prefName: '京都府', value: 1.28648 },
          { prefCode: 27, prefName: '大阪府', value: 1.45303 },
          { prefCode: 28, prefName: '兵庫県', value: 5.51896 },
          { prefCode: 29, prefName: '奈良県', value: 3.46389 },
          { prefCode: 30, prefName: '和歌山県', value: 1.11721 },
          { prefCode: 31, prefName: '鳥取県', value: 1.0373 },
          { prefCode: 32, prefName: '島根県', value: 0.57766 },
          { prefCode: 33, prefName: '岡山県', value: 0.35362 },
          { prefCode: 34, prefName: '広島県', value: 0.54478 },
          { prefCode: 36, prefName: '徳島県', value: 0.50626 },
          { prefCode: 37, prefName: '香川県', value: 1.98932 },
          { prefCode: 38, prefName: '愛媛県', value: 0.42018 },
          { prefCode: 39, prefName: '高知県', value: 0.03391 },
          { prefCode: 40, prefName: '福岡県', value: 0.08926 },
          { prefCode: 41, prefName: '佐賀県', value: 1.18518 },
          { prefCode: 43, prefName: '熊本県', value: 0.07152 },
          { prefCode: 44, prefName: '大分県', value: 0.28302 },
          { prefCode: 46, prefName: '鹿児島県', value: 0.02459 },
          { prefCode: 47, prefName: '沖縄県', value: 0.06266 }
        ],
        cities: [
          {
            prefCode: 11,
            prefName: '埼玉県',
            cityCode: '11101',
            cityName: 'さいたま市',
            value: 0.51211
          },
          {
            prefCode: 11,
            prefName: '埼玉県',
            cityCode: '11201',
            cityName: '川越市',
            value: 0.29315
          },
          {
            prefCode: 11,
            prefName: '埼玉県',
            cityCode: '11202',
            cityName: '熊谷市',
            value: 1.60434
          },
          {
            prefCode: 11,
            prefName: '埼玉県',
            cityCode: '11203',
            cityName: '川口市',
            value: 8.11285
          },
          {
            prefCode: 11,
            prefName: '埼玉県',
            cityCode: '11206',
            cityName: '行田市',
            value: 4.90313
          },
          {
            prefCode: 11,
            prefName: '埼玉県',
            cityCode: '11210',
            cityName: '加須市',
            value: 0.17733
          },
          {
            prefCode: 11,
            prefName: '埼玉県',
            cityCode: '11212',
            cityName: '東松山市',
            value: 0.28689
          },
          {
            prefCode: 11,
            prefName: '埼玉県',
            cityCode: '11214',
            cityName: '春日部市',
            value: 2.35491
          },
          {
            prefCode: 11,
            prefName: '埼玉県',
            cityCode: '11216',
            cityName: '羽生市',
            value: 1.05551
          },
          {
            prefCode: 11,
            prefName: '埼玉県',
            cityCode: '11217',
            cityName: '鴻巣市',
            value: 2.60627
          },
          {
            prefCode: 11,
            prefName: '埼玉県',
            cityCode: '11221',
            cityName: '草加市',
            value: 8.57537
          },
          {
            prefCode: 11,
            prefName: '埼玉県',
            cityCode: '11222',
            cityName: '越谷市',
            value: 6.6653
          },
          { prefCode: 11, prefName: '埼玉県', cityCode: '11223', cityName: '蕨市', value: 6.32599 },
          {
            prefCode: 11,
            prefName: '埼玉県',
            cityCode: '11224',
            cityName: '戸田市',
            value: 0.03354
          },
          {
            prefCode: 11,
            prefName: '埼玉県',
            cityCode: '11227',
            cityName: '朝霞市',
            value: 2.08742
          },
          {
            prefCode: 11,
            prefName: '埼玉県',
            cityCode: '11234',
            cityName: '八潮市',
            value: 9.59932
          },
          {
            prefCode: 11,
            prefName: '埼玉県',
            cityCode: '11237',
            cityName: '三郷市',
            value: 12.25184
          },
          {
            prefCode: 11,
            prefName: '埼玉県',
            cityCode: '11240',
            cityName: '幸手市',
            value: 8.04544
          },
          {
            prefCode: 11,
            prefName: '埼玉県',
            cityCode: '11243',
            cityName: '吉川市',
            value: 0.09595
          },
          {
            prefCode: 11,
            prefName: '埼玉県',
            cityCode: '11385',
            cityName: '上里町',
            value: 0.48466
          },
          {
            prefCode: 11,
            prefName: '埼玉県',
            cityCode: '11464',
            cityName: '杉戸町',
            value: 0.53496
          },
          {
            prefCode: 11,
            prefName: '埼玉県',
            cityCode: '11465',
            cityName: '松伏町',
            value: 1.21321
          }
        ]
      }
    } as Methods['get']['response']
  ]
} as MockMethods
