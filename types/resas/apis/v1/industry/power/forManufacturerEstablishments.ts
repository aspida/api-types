import { MockMethods } from 'axios-mock-server'
import { PrefCode, Headers, Response } from '../../../@types'

type Establishment<T extends '全事業所' | '継続' | '参入' | '退出'> = {
  label: T
  data: {
    year: number
    value: number
    labor: number
    employee: number
  }[]
}

export interface Methods {
  get: {
    headers: Headers
    params: {
      prefCode: PrefCode
      sicCode: string
      simcCode: string
      addArea?: string
    }
    response: Response<{
      prefCode: PrefCode
      prefName: string
      sicCode: string
      sicName: string
      simcCode: string
      simcName: string
      establishments: [
        Establishment<'退出'>,
        Establishment<'継続'>,
        Establishment<'全事業所'>,
        Establishment<'参入'>
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
        prefCode: 11,
        prefName: '埼玉県',
        sicCode: 'E',
        sicName: '製造業',
        simcCode: '20',
        simcName: 'なめし革・同製品・毛皮製造業',
        establishments: [
          {
            label: '退出',
            data: [
              {
                year: 1990,
                value: 10802.6712,
                labor: 894.752,
                employee: 12.0734
              },
              {
                year: 1994,
                value: 10789.8851,
                labor: 810.1032,
                employee: 13.3191
              },
              {
                year: 2005,
                value: 6345.4444,
                labor: 719.2569,
                employee: 8.8222
              },
              {
                year: 2004,
                value: 6719.7872,
                labor: 679.2043,
                employee: 9.8936
              },
              {
                year: 1995,
                value: 10217.4575,
                labor: 824.5531,
                employee: 12.3915
              },
              {
                year: 2002,
                value: 6882.5692,
                labor: 692.5186,
                employee: 9.9385
              },
              {
                year: 1996,
                value: 10083.215,
                labor: 799.3036,
                employee: 12.615
              },
              {
                year: 2001,
                value: 7896.5181,
                labor: 728.2344,
                employee: 10.8434
              },
              {
                year: 1997,
                value: 7192.2045,
                labor: 631.0209,
                employee: 11.3977
              },
              {
                year: 2000,
                value: 6565.8144,
                labor: 600.2677,
                employee: 10.9381
              },
              {
                year: 1998,
                value: 6205.3015,
                labor: 573.7056,
                employee: 10.8162
              },
              {
                year: 2008,
                value: 19323,
                labor: 1380.2143,
                employee: 14
              },
              {
                year: 2006,
                value: 8078.1034,
                labor: 988.4599,
                employee: 8.1724
              },
              {
                year: 1993,
                value: 9624.4361,
                labor: 757.426,
                employee: 12.7068
              },
              {
                year: 1991,
                value: 9528.8515,
                labor: 730.265,
                employee: 13.0485
              },
              {
                year: 2009,
                value: 5493.5,
                labor: 955.3913,
                employee: 5.75
              },
              {
                year: 1999,
                value: 6710.72,
                labor: 623.2095,
                employee: 10.768
              },
              {
                year: 1992,
                value: 10513.4692,
                labor: 764.2353,
                employee: 13.7568
              },
              {
                year: 2007,
                value: 11194.3571,
                labor: 1234.0236,
                employee: 9.0714
              },
              {
                year: 2003,
                value: 5882.6,
                labor: 678.2872,
                employee: 8.6727
              }
            ]
          },
          {
            label: '継続',
            data: [
              {
                year: 1993,
                value: 14723.15,
                labor: 657.7729,
                employee: 22.3833
              },
              {
                year: 2004,
                value: 16380.1455,
                labor: 753.2676,
                employee: 21.7455
              },
              {
                year: 1992,
                value: 14373.7627,
                labor: 668.8107,
                employee: 21.4915
              },
              {
                year: 2006,
                value: 13433.8966,
                labor: 676.947,
                employee: 19.8448
              },
              {
                year: 2000,
                value: 14872.8167,
                labor: 740.5552,
                employee: 20.0833
              },
              {
                year: 2010,
                value: 8567.623,
                labor: 516.9387,
                employee: 16.5738
              },
              {
                year: 2005,
                value: 15701.2807,
                labor: 727.6203,
                employee: 21.5789
              },
              {
                year: 1991,
                value: 14892,
                labor: 698.9432,
                employee: 21.3065
              },
              {
                year: 2008,
                value: 9731.3667,
                labor: 519.9305,
                employee: 18.7167
              },
              {
                year: 2007,
                value: 13175.9322,
                labor: 663.2935,
                employee: 19.8644
              },
              {
                year: 2009,
                value: 8958.4918,
                labor: 534.7045,
                employee: 16.7541
              },
              {
                year: 1990,
                value: 14318.1333,
                labor: 652.8024,
                employee: 21.9333
              },
              {
                year: 1994,
                value: 16267.7193,
                labor: 694.0569,
                employee: 23.4386
              },
              {
                year: 2003,
                value: 15950.5789,
                labor: 753.8831,
                employee: 21.1579
              },
              {
                year: 1999,
                value: 15082.6724,
                labor: 716.4578,
                employee: 21.0517
              },
              {
                year: 1998,
                value: 17188.5763,
                labor: 783.7141,
                employee: 21.9322
              },
              {
                year: 1996,
                value: 19847.0877,
                labor: 841.1033,
                employee: 23.5965
              },
              {
                year: 1997,
                value: 19214.4912,
                labor: 830.9757,
                employee: 23.1228
              },
              {
                year: 2002,
                value: 16152.2407,
                labor: 746.1257,
                employee: 21.6481
              },
              {
                year: 2001,
                value: 16517.1356,
                labor: 800.0911,
                employee: 20.6441
              },
              {
                year: 1995,
                value: 18082.678,
                labor: 785.6244,
                employee: 23.0169
              }
            ]
          },
          {
            label: '全事業所',
            data: [
              {
                year: 1996,
                value: 10848.4114,
                labor: 790.7954,
                employee: 13.7184
              },
              {
                year: 1999,
                value: 8016.1078,
                labor: 642.5307,
                employee: 12.4758
              },
              {
                year: 2008,
                value: 7843.4873,
                labor: 592.3858,
                employee: 13.2405
              },
              {
                year: 2003,
                value: 8436.8065,
                labor: 669.7593,
                employee: 12.5968
              },
              {
                year: 1990,
                value: 11295.493,
                labor: 839.4636,
                employee: 13.4556
              },
              {
                year: 1997,
                value: 8564.0507,
                labor: 677.0724,
                employee: 12.6486
              },
              {
                year: 2009,
                value: 6865.1504,
                labor: 524.4486,
                employee: 13.0902
              },
              {
                year: 1998,
                value: 7864.9791,
                labor: 632.4598,
                employee: 12.4355
              },
              {
                year: 2007,
                value: 9926.8662,
                labor: 725.2294,
                employee: 13.6879
              },
              {
                year: 2000,
                value: 7884.6295,
                labor: 643.8003,
                employee: 12.247
              },
              {
                year: 1994,
                value: 10733.4386,
                labor: 756.7174,
                employee: 14.1842
              },
              {
                year: 1992,
                value: 9930.2488,
                labor: 720.4746,
                employee: 13.7829
              },
              {
                year: 2002,
                value: 8615.7112,
                labor: 667.6908,
                employee: 12.9037
              },
              {
                year: 2004,
                value: 9180.2381,
                labor: 670.5565,
                employee: 13.6905
              },
              {
                year: 1993,
                value: 9623.3943,
                labor: 720.5787,
                employee: 13.3551
              },
              {
                year: 2005,
                value: 8706.0402,
                labor: 669.3995,
                employee: 13.0057
              },
              {
                year: 1995,
                value: 10664.0517,
                labor: 788.7754,
                employee: 13.5198
              },
              {
                year: 2001,
                value: 8546.3712,
                labor: 676.5016,
                employee: 12.6332
              },
              {
                year: 2006,
                value: 9441.2273,
                labor: 721.2049,
                employee: 13.0909
              },
              {
                year: 1991,
                value: 9507.2393,
                labor: 707.8499,
                employee: 13.4312
              },
              {
                year: 2010,
                value: 7171.7742,
                labor: 515.8353,
                employee: 13.9032
              }
            ]
          },
          {
            label: '参入',
            data: [
              {
                year: 2004,
                value: 6154.6552,
                labor: 540.8636,
                employee: 11.3793
              },
              {
                year: 2010,
                value: 5820.2381,
                labor: 514.2707,
                employee: 11.3175
              },
              {
                year: 1999,
                value: 6598.2857,
                labor: 446.2609,
                employee: 14.7857
              },
              {
                year: 2009,
                value: 5252.3276,
                labor: 492.1405,
                employee: 10.6724
              },
              {
                year: 2000,
                value: 5513.65,
                labor: 481.5415,
                employee: 11.45
              },
              {
                year: 2005,
                value: 5563.5313,
                labor: 533.0329,
                employee: 10.4375
              },
              {
                year: 1995,
                value: 3474.1111,
                labor: 529.9492,
                employee: 6.5556
              },
              {
                year: 2001,
                value: 5608.4762,
                labor: 452.9923,
                employee: 12.381
              },
              {
                year: 2006,
                value: 8481.2895,
                labor: 760.1156,
                employee: 11.1579
              },
              {
                year: 2007,
                value: 9195.549,
                labor: 777.733,
                employee: 11.8235
              },
              {
                year: 2002,
                value: 5079.64,
                labor: 463.4708,
                employee: 10.96
              },
              {
                year: 2003,
                value: 6421.069,
                labor: 571.1994,
                employee: 11.2414
              },
              {
                year: 2008,
                value: 7532.4694,
                labor: 627.7058,
                employee: 12
              },
              {
                year: 1992,
                value: 2304.2,
                labor: 480.0417,
                employee: 4.8
              },
              {
                year: 1991,
                value: 3019.6,
                labor: 718.9524,
                employee: 4.2
              },
              {
                year: 1997,
                value: 2285,
                labor: 397.3913,
                employee: 5.75
              },
              {
                year: 1996,
                value: 2602.625,
                labor: 424.9184,
                employee: 6.125
              },
              {
                year: 1994,
                value: 2981.3333,
                labor: 511.0857,
                employee: 5.8333
              },
              {
                year: 1998,
                value: 6348.375,
                labor: 412.9024,
                employee: 15.375
              },
              {
                year: 1993,
                value: 1685,
                labor: 324.0385,
                employee: 5.2
              }
            ]
          }
        ]
      }
    } as Methods['get']['response']
  ]
} as MockMethods
