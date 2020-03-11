import { MockMethods } from 'axios-mock-server'
import { Headers, Response } from '../../@types'

export interface Methods {
  get: {
    headers: Headers
    params: { sicCode: string }
    response: Response<{ sicCode: string; simcCode: string; simcName: string }[]>
  }
}

export default {
  get: () => [
    200,
    {
      message: null,
      result: [
        {
          simcCode: '09',
          sicCode: 'E',
          simcName: '食料品製造業'
        },
        {
          simcCode: '10',
          sicCode: 'E',
          simcName: '飲料・たばこ・飼料製造業'
        },
        {
          simcCode: '11',
          sicCode: 'E',
          simcName: '繊維工業'
        },
        {
          simcCode: '12',
          sicCode: 'E',
          simcName: '木材・木製品製造業（家具を除く）'
        },
        {
          simcCode: '13',
          sicCode: 'E',
          simcName: '家具・装備品製造業'
        },
        {
          simcCode: '14',
          sicCode: 'E',
          simcName: 'パルプ・紙・紙加工品製造業'
        },
        {
          simcCode: '15',
          sicCode: 'E',
          simcName: '印刷・同関連業'
        },
        {
          simcCode: '16',
          sicCode: 'E',
          simcName: '化学工業'
        },
        {
          simcCode: '17',
          sicCode: 'E',
          simcName: '石油製品・石炭製品製造業'
        },
        {
          simcCode: '18',
          sicCode: 'E',
          simcName: 'プラスチック製品製造業（別掲を除く）'
        },
        {
          simcCode: '19',
          sicCode: 'E',
          simcName: 'ゴム製品製造業'
        },
        {
          simcCode: '20',
          sicCode: 'E',
          simcName: 'なめし革・同製品・毛皮製造業'
        },
        {
          simcCode: '21',
          sicCode: 'E',
          simcName: '窯業・土石製品製造業'
        },
        {
          simcCode: '22',
          sicCode: 'E',
          simcName: '鉄鋼業'
        },
        {
          simcCode: '23',
          sicCode: 'E',
          simcName: '非鉄金属製造業'
        },
        {
          simcCode: '24',
          sicCode: 'E',
          simcName: '金属製品製造業'
        },
        {
          simcCode: '25',
          sicCode: 'E',
          simcName: 'はん用機械器具製造業'
        },
        {
          simcCode: '26',
          sicCode: 'E',
          simcName: '生産用機械器具製造業'
        },
        {
          simcCode: '27',
          sicCode: 'E',
          simcName: '業務用機械器具製造業'
        },
        {
          simcCode: '28',
          sicCode: 'E',
          simcName: '電子部品・デバイス・電子回路製造業'
        },
        {
          simcCode: '29',
          sicCode: 'E',
          simcName: '電気機械器具製造業'
        },
        {
          simcCode: '30',
          sicCode: 'E',
          simcName: '情報通信機械器具製造業'
        },
        {
          simcCode: '31',
          sicCode: 'E',
          simcName: '輸送用機械器具製造業'
        },
        {
          simcCode: '32',
          sicCode: 'E',
          simcName: 'その他の製造業'
        }
      ]
    } as Methods['get']['response']
  ]
} as MockMethods
