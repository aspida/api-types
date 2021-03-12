import { TargetTime } from '../../../../@types'

/** 降水ナウキャストの実況時刻API */
export type Methods = {
  /** 降水ナウキャストの実況時刻一覧を取得 */
  get: {
    resBody: TargetTime[]
  }
}
