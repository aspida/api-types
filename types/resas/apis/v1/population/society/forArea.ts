import { MockMethods } from 'axios-mock-server'
import { PrefCode, Headers, Response } from '../../../@types'

export interface Methods {
  get: {
    headers: Headers
    params: {
      prefCode: PrefCode
    }
    response: Response<{
      data: {
        year: number
        positiveAreas: {
          areaCode: string
          areaName: string
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
            positiveAreas: [
              {
                areaCode: '01',
                areaName: '北海道',
                value: 3342
              },
              {
                areaCode: '02',
                areaName: '東北',
                value: 8424
              },
              {
                areaCode: '03',
                areaName: '北関東',
                value: 3720
              },
              {
                areaCode: '05',
                areaName: '中部',
                value: 11607
              },
              {
                areaCode: '06',
                areaName: '関西',
                value: 12721
              },
              {
                areaCode: '07',
                areaName: '中国',
                value: 3460
              },
              {
                areaCode: '08',
                areaName: '四国',
                value: 1563
              },
              {
                areaCode: '09',
                areaName: '九州・沖縄',
                value: 6469
              }
            ],
            negativeAreas: [
              {
                areaCode: '04',
                areaName: '東京圏',
                value: -2975
              }
            ],
            total: {
              value: 48331
            }
          },
          {
            year: 2011,
            positiveAreas: [
              {
                areaCode: '01',
                areaName: '北海道',
                value: 2097
              },
              {
                areaCode: '02',
                areaName: '東北',
                value: 11698
              },
              {
                areaCode: '03',
                areaName: '北関東',
                value: 5044
              },
              {
                areaCode: '04',
                areaName: '東京圏',
                value: 9030
              },
              {
                areaCode: '05',
                areaName: '中部',
                value: 7873
              },
              {
                areaCode: '06',
                areaName: '関西',
                value: 6354
              },
              {
                areaCode: '07',
                areaName: '中国',
                value: 1494
              },
              {
                areaCode: '08',
                areaName: '四国',
                value: 665
              },
              {
                areaCode: '09',
                areaName: '九州・沖縄',
                value: 227
              }
            ],
            total: {
              value: 44482
            }
          },
          {
            year: 2012,
            positiveAreas: [
              {
                areaCode: '01',
                areaName: '北海道',
                value: 2605
              },
              {
                areaCode: '02',
                areaName: '東北',
                value: 7650
              },
              {
                areaCode: '03',
                areaName: '北関東',
                value: 5301
              },
              {
                areaCode: '04',
                areaName: '東京圏',
                value: 14516
              },
              {
                areaCode: '05',
                areaName: '中部',
                value: 10234
              },
              {
                areaCode: '06',
                areaName: '関西',
                value: 9798
              },
              {
                areaCode: '07',
                areaName: '中国',
                value: 1834
              },
              {
                areaCode: '08',
                areaName: '四国',
                value: 1271
              },
              {
                areaCode: '09',
                areaName: '九州・沖縄',
                value: 3288
              }
            ],
            total: {
              value: 56497
            }
          },
          {
            year: 2013,
            positiveAreas: [
              {
                areaCode: '01',
                areaName: '北海道',
                value: 3389
              },
              {
                areaCode: '02',
                areaName: '東北',
                value: 7389
              },
              {
                areaCode: '03',
                areaName: '北関東',
                value: 6217
              },
              {
                areaCode: '04',
                areaName: '東京圏',
                value: 12932
              },
              {
                areaCode: '05',
                areaName: '中部',
                value: 13982
              },
              {
                areaCode: '06',
                areaName: '関西',
                value: 14758
              },
              {
                areaCode: '07',
                areaName: '中国',
                value: 3464
              },
              {
                areaCode: '08',
                areaName: '四国',
                value: 1918
              },
              {
                areaCode: '09',
                areaName: '九州・沖縄',
                value: 6123
              }
            ],
            total: {
              value: 70172
            }
          },
          {
            year: 2014,
            positiveAreas: [
              {
                areaCode: '01',
                areaName: '北海道',
                value: 4077
              },
              {
                areaCode: '02',
                areaName: '東北',
                value: 8101
              },
              {
                areaCode: '03',
                areaName: '北関東',
                value: 6462
              },
              {
                areaCode: '04',
                areaName: '東京圏',
                value: 9443
              },
              {
                areaCode: '05',
                areaName: '中部',
                value: 14578
              },
              {
                areaCode: '06',
                areaName: '関西',
                value: 16585
              },
              {
                areaCode: '07',
                areaName: '中国',
                value: 3839
              },
              {
                areaCode: '08',
                areaName: '四国',
                value: 2082
              },
              {
                areaCode: '09',
                areaName: '九州・沖縄',
                value: 8113
              }
            ],
            total: {
              value: 73280
            }
          },
          {
            year: 2015,
            positiveAreas: [
              {
                areaCode: '01',
                areaName: '北海道',
                value: 4308
              },
              {
                areaCode: '02',
                areaName: '東北',
                value: 9724
              },
              {
                areaCode: '03',
                areaName: '北関東',
                value: 6662
              },
              {
                areaCode: '04',
                areaName: '東京圏',
                value: 10590
              },
              {
                areaCode: '05',
                areaName: '中部',
                value: 16580
              },
              {
                areaCode: '06',
                areaName: '関西',
                value: 18073
              },
              {
                areaCode: '07',
                areaName: '中国',
                value: 4314
              },
              {
                areaCode: '08',
                areaName: '四国',
                value: 2247
              },
              {
                areaCode: '09',
                areaName: '九州・沖縄',
                value: 9198
              }
            ],
            total: {
              value: 81696
            }
          },
          {
            year: 2016,
            positiveAreas: [
              {
                areaCode: '01',
                areaName: '北海道',
                value: 4044
              },
              {
                areaCode: '02',
                areaName: '東北',
                value: 9484
              },
              {
                areaCode: '03',
                areaName: '北関東',
                value: 5817
              },
              {
                areaCode: '04',
                areaName: '東京圏',
                value: 6156
              },
              {
                areaCode: '05',
                areaName: '中部',
                value: 16202
              },
              {
                areaCode: '06',
                areaName: '関西',
                value: 17014
              },
              {
                areaCode: '07',
                areaName: '中国',
                value: 4109
              },
              {
                areaCode: '08',
                areaName: '四国',
                value: 2323
              },
              {
                areaCode: '09',
                areaName: '九州・沖縄',
                value: 9028
              }
            ],
            total: {
              value: 74177
            }
          },
          {
            year: 2017,
            positiveAreas: [
              {
                areaCode: '01',
                areaName: '北海道',
                value: 4078
              },
              {
                areaCode: '02',
                areaName: '東北',
                value: 10538
              },
              {
                areaCode: '03',
                areaName: '北関東',
                value: 4948
              },
              {
                areaCode: '04',
                areaName: '東京圏',
                value: 5148
              },
              {
                areaCode: '05',
                areaName: '中部',
                value: 16541
              },
              {
                areaCode: '06',
                areaName: '関西',
                value: 17533
              },
              {
                areaCode: '07',
                areaName: '中国',
                value: 4796
              },
              {
                areaCode: '08',
                areaName: '四国',
                value: 2427
              },
              {
                areaCode: '09',
                areaName: '九州・沖縄',
                value: 9489
              }
            ],
            total: {
              value: 75498
            }
          }
        ]
      }
    } as Methods['get']['response']
  ]
} as MockMethods
