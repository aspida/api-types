import { MockMethods } from 'axios-mock-server'
import { Headers, Response } from '../../@types'

export interface Methods {
  get: {
    headers: Headers
    response: Response<{ sicCode: string; sicName: string }[]>
  }
}

export default {
  get: () => [
    200,
    {
      message: null,
      result: [
        { sicCode: 'A', sicName: '農業，林業' },
        { sicCode: 'B', sicName: '漁業' },
        { sicCode: 'C', sicName: '鉱業，採石業，砂利採取業' },
        { sicCode: 'D', sicName: '建設業' },
        { sicCode: 'E', sicName: '製造業' },
        { sicCode: 'F', sicName: '電気・ガス・熱供給・水道業' },
        { sicCode: 'G', sicName: '情報通信業' },
        { sicCode: 'H', sicName: '運輸業，郵便業' },
        { sicCode: 'I', sicName: '卸売業，小売業' },
        { sicCode: 'J', sicName: '金融業，保険業' },
        { sicCode: 'K', sicName: '不動産業，物品賃貸業' },
        { sicCode: 'L', sicName: '学術研究，専門・技術サービス業' },
        { sicCode: 'M', sicName: '宿泊業，飲食サービス業' },
        { sicCode: 'N', sicName: '生活関連サービス業，娯楽業' },
        { sicCode: 'O', sicName: '教育，学習支援業' },
        { sicCode: 'P', sicName: '医療，福祉' },
        { sicCode: 'Q', sicName: '複合サービス事業' },
        { sicCode: 'R', sicName: 'サービス業（他に分類されないもの）' },
        { sicCode: 'S', sicName: '公務（他に分類されるものを除く）' },
        { sicCode: 'T', sicName: '分類不能の産業' }
      ]
    } as Methods['get']['response']
  ]
} as MockMethods
