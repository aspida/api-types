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
    }
    response: Response<{
      prefCode: PrefCode
      prefName: string
      sicCode: string
      sicName: string
      data: {
        simcCode: string
        simcName: string
        value: number
        employee: number
        labor: number
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
        prefName: '埼玉県',
        prefCode: 11,
        sicCode: '',
        sicName: '',
        data: [
          {
            simcCode: '06',
            simcName: '総合工事業',
            value: 0.9794,
            employee: 1.2356,
            labor: 0.5201
          },
          {
            simcCode: '07',
            simcName: '職別工事業(設備工事業を除く)',
            value: 0.498,
            employee: 0.8222,
            labor: 0.3975
          },
          {
            simcCode: '08',
            simcName: '設備工事業',
            value: 0.5912,
            employee: 0.5013,
            labor: 0.774
          },
          {
            simcCode: '09',
            simcName: '食料品製造業',
            value: 0.1082,
            employee: 0.1696,
            labor: 0.4187
          },
          {
            simcCode: '11',
            simcName: '繊維工業',
            value: 0.2061,
            employee: 0.5293,
            labor: 0.2556
          },
          {
            simcCode: '12',
            simcName: '木材・木製品製造業（家具を除く）',
            value: 0.0718,
            employee: 0.546,
            labor: 0.0863
          },
          {
            simcCode: '15',
            simcName: '印刷・同関連業',
            value: 6.3702,
            employee: 3.9061,
            labor: 1.0701
          },
          {
            simcCode: '21',
            simcName: '窯業・土石製品製造業',
            value: 3.7875,
            employee: 2.4708,
            labor: 1.0058
          },
          {
            simcCode: '24',
            simcName: '金属製品製造業',
            value: 6.0179,
            employee: 4.5205,
            labor: 0.8735
          },
          {
            simcCode: '25',
            simcName: 'はん用機械器具製造業',
            value: 0.5088,
            employee: 0.5982,
            labor: 0.5581
          },
          {
            simcCode: '26',
            simcName: '生産用機械器具製造業',
            value: 0.3752,
            employee: 0.3989,
            labor: 0.6171
          },
          {
            simcCode: '31',
            simcName: '輸送用機械器具製造業',
            value: 0.518,
            employee: 0.8799,
            labor: 0.3863
          },
          {
            simcCode: '32',
            simcName: 'その他の製造業',
            value: 0.8986,
            employee: 1.1716,
            labor: 0.5033
          },
          {
            simcCode: '44',
            simcName: '道路貨物運送業',
            value: 2.3494,
            employee: 1.4363,
            labor: 1.0733
          },
          {
            simcCode: '52',
            simcName: '飲食料品卸売業',
            value: 1.0915,
            employee: 1.085,
            labor: 0.6601
          },
          {
            simcCode: '53',
            simcName: '建築材料，鉱物・金属材料等卸売業',
            value: 1.1763,
            employee: 1.3668,
            labor: 0.5647
          },
          {
            simcCode: '55',
            simcName: 'その他の卸売業',
            value: 0.4336,
            employee: 0.3509,
            labor: 0.8109
          },
          {
            simcCode: '57',
            simcName: '織物・衣服・身の回り品小売業',
            value: 0.4812,
            employee: 0.3808,
            labor: 0.8292
          },
          {
            simcCode: '58',
            simcName: '飲食料品小売業',
            value: 3.9467,
            employee: 4.213,
            labor: 0.6147
          },
          {
            simcCode: '59',
            simcName: '機械器具小売業',
            value: 0.8187,
            employee: 1.0637,
            labor: 0.505
          },
          {
            simcCode: '60',
            simcName: 'その他の小売業',
            value: 1.5472,
            employee: 1.3829,
            labor: 0.7341
          },
          {
            simcCode: '61',
            simcName: '無店舗小売業',
            value: 0.1122,
            employee: 0.3003,
            labor: 0.2452
          },
          {
            simcCode: '68',
            simcName: '不動産取引業',
            value: 0.2123,
            employee: 0.3216,
            labor: 0.4332
          },
          {
            simcCode: '69',
            simcName: '不動産賃貸業・管理業',
            value: 0.3278,
            employee: 0.6457,
            labor: 0.3331
          },
          {
            simcCode: '72',
            simcName: '専門サービス業（他に分類されないもの）',
            value: 0.4748,
            employee: 0.6368,
            labor: 0.4892
          },
          {
            simcCode: '74',
            simcName: '技術サービス業（他に分類されないもの）',
            value: 0.4818,
            employee: 0.9289,
            labor: 0.3403
          },
          {
            simcCode: '75',
            simcName: '宿泊業',
            value: 1.2506,
            employee: 0.8896,
            labor: 0.9224
          },
          {
            simcCode: '76',
            simcName: '飲食店',
            value: 0.5045,
            employee: 0.462,
            labor: 0.7165
          },
          {
            simcCode: '77',
            simcName: '持ち帰り・配達飲食サービス業',
            value: 2.5214,
            employee: 1.4847,
            labor: 1.1144
          },
          {
            simcCode: '78',
            simcName: '洗濯・理容・美容・浴場業',
            value: 2.0643,
            employee: 1.252,
            labor: 1.0819
          },
          {
            simcCode: '79',
            simcName: 'その他の生活関連サービス業',
            value: 3.6616,
            employee: 1.6579,
            labor: 1.4492
          },
          {
            simcCode: '80',
            simcName: '娯楽業',
            value: 12.5509,
            employee: 1.5275,
            labor: 5.3915
          },
          {
            simcCode: '82',
            simcName: 'その他の教育，学習支援業',
            value: 0.6954,
            employee: 1.1976,
            labor: 0.381
          },
          {
            simcCode: '83',
            simcName: '医療業',
            value: 0.7619,
            employee: 0.6677,
            labor: 0.7487
          },
          {
            simcCode: '85',
            simcName: '社会保険・社会福祉・介護事業',
            value: 1.7206,
            employee: 1.5204,
            labor: 0.7426
          },
          {
            simcCode: '88',
            simcName: '廃棄物処理業',
            value: 0.2636,
            employee: 0.7494,
            labor: 0.2308
          },
          {
            simcCode: '89',
            simcName: '自動車整備業',
            value: 3.7915,
            employee: 3.1138,
            labor: 0.799
          },
          {
            simcCode: '93',
            simcName: '政治・経済・文化団体',
            value: 0.1203,
            employee: 0.9557,
            labor: 0.0826
          },
          {
            simcCode: '94',
            simcName: '宗教',
            value: 5.9395,
            employee: 1.5436,
            labor: 2.5249
          }
        ]
      }
    } as Methods['get']['response']
  ]
} as MockMethods
