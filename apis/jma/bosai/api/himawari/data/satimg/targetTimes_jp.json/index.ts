import { TargetTime } from '../../../../@types'

/** 日本付近の撮影時刻API */
export type Methods = {
  /** 日本付近の撮影時刻一覧を取得 */
  get: {
    resBody: TargetTime[]
  }
}
