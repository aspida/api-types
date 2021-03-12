import { TargetTime } from '../../../../@types'

/** 降水ナウキャストの予報時刻API */
export type Methods = {
  /** 降水ナウキャストの予報時刻一覧を取得 */
  get: {
    resBody: TargetTime[]
  }
}
