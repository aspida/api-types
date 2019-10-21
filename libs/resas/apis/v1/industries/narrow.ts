import { MockMethods } from 'axios-mock-server'
import { Headers, Response } from '../../@types'

export interface Methods {
  get: {
    headers: Headers
    params: { simcCode: string }
    response: Response<{ simcCode: string; siscCode: string; siscName: string }[]>
  }
}

export default {
  get: () => [
    200,
    {
      message: null,
      result: [
        {
          siscCode: '200',
          simcCode: '20',
          siscName: '管理，補助的経済活動を行う事業所（20なめし革・同製品・毛皮製造業）'
        },
        {
          siscCode: '201',
          simcCode: '20',
          siscName: 'なめし革製造業'
        },
        {
          siscCode: '202',
          simcCode: '20',
          siscName: '工業用革製品製造業（手袋を除く）'
        },
        {
          siscCode: '203',
          simcCode: '20',
          siscName: '革製履物用材料・同附属品製造業'
        },
        {
          siscCode: '204',
          simcCode: '20',
          siscName: '革製履物製造業'
        },
        {
          siscCode: '205',
          simcCode: '20',
          siscName: '革製手袋製造業'
        },
        {
          siscCode: '206',
          simcCode: '20',
          siscName: 'かばん製造業'
        },
        {
          siscCode: '207',
          simcCode: '20',
          siscName: '袋物製造業'
        },
        {
          siscCode: '208',
          simcCode: '20',
          siscName: '毛皮製造業'
        },
        {
          siscCode: '209',
          simcCode: '20',
          siscName: 'その他のなめし革製品製造業'
        }
      ]
    } as Methods['get']['response']
  ]
} as MockMethods
