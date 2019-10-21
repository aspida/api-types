import { MockMethods } from 'axios-mock-server'
import { Headers, Response } from '../../@types'

export interface Methods {
  get: {
    headers: Headers
    response: Response<{ iscoCode: string; iscoName: string }[]>
  }
}

export default {
  get: () => [
    200,
    {
      message: null,
      result: [
        { iscoCode: 'A', iscoName: '管理的職業従事者' },
        { iscoCode: 'B', iscoName: '専門的・技術的職業従事者' },
        { iscoCode: 'C', iscoName: '事務従事者' },
        { iscoCode: 'D', iscoName: '販売従事者' },
        { iscoCode: 'E', iscoName: 'サービス職業従事者' },
        { iscoCode: 'F', iscoName: '保安職業従事者' },
        { iscoCode: 'G', iscoName: '農林漁業従事者' },
        { iscoCode: 'H', iscoName: '生産工程従事者' },
        { iscoCode: 'I', iscoName: '輸送・機械運転従事者' },
        { iscoCode: 'J', iscoName: '建設・採掘従事者' },
        { iscoCode: 'K', iscoName: '運搬・清掃・包装等従事者' },
        { iscoCode: 'L', iscoName: '分類不能の職業' }
      ]
    } as Methods['get']['response']
  ]
} as MockMethods
