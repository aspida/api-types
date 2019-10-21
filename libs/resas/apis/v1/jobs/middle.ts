import { MockMethods } from 'axios-mock-server'
import { Headers, Response } from '../../@types'

export interface Methods {
  get: {
    headers: Headers
    params: { iscoCode: string }
    response: Response<{ iscoCode: string; ismcoCode: string; ismcoName: string }[]>
  }
}

export default {
  get: () => [
    200,
    {
      message: null,
      result: [
        { iscoCode: 'B', ismcoCode: '05', ismcoName: '研究者' },
        { iscoCode: 'B', ismcoCode: '06', ismcoName: '農林水産技術者' },
        { iscoCode: 'B', ismcoCode: '07', ismcoName: '製造技術者（開発）' },
        { iscoCode: 'B', ismcoCode: '08', ismcoName: '製造技術者（開発を除く）' },
        { iscoCode: 'B', ismcoCode: '09', ismcoName: '建築・土木・測量技術者' },
        { iscoCode: 'B', ismcoCode: '10', ismcoName: '情報処理・通信技術者' },
        { iscoCode: 'B', ismcoCode: '11', ismcoName: 'その他の技術者' },
        { iscoCode: 'B', ismcoCode: '12', ismcoName: '医師，歯科医師，獣医師，薬剤師' },
        { iscoCode: 'B', ismcoCode: '13', ismcoName: '保健師，助産師，看護師' },
        { iscoCode: 'B', ismcoCode: '14', ismcoName: '医療技術者' },
        { iscoCode: 'B', ismcoCode: '15', ismcoName: 'その他の保健医療従事者' },
        { iscoCode: 'B', ismcoCode: '16', ismcoName: '社会福祉専門職業従事者' },
        { iscoCode: 'B', ismcoCode: '17', ismcoName: '法務従事者' },
        { iscoCode: 'B', ismcoCode: '18', ismcoName: '経営・金融・保険専門職業従事者' },
        { iscoCode: 'B', ismcoCode: '19', ismcoName: '教員' },
        { iscoCode: 'B', ismcoCode: '20', ismcoName: '宗教家' },
        { iscoCode: 'B', ismcoCode: '21', ismcoName: '著述家，記者，編集者' },
        { iscoCode: 'B', ismcoCode: '22', ismcoName: '美術家，デザイナー，写真家，映像撮影者' },
        { iscoCode: 'B', ismcoCode: '23', ismcoName: '音楽家，舞台芸術家' },
        { iscoCode: 'B', ismcoCode: '24', ismcoName: 'その他の専門的職業従事者' }
      ]
    } as Methods['get']['response']
  ]
} as MockMethods
