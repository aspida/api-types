import { TargetTime } from '../../../@types'

/** 撮影時刻API */
export type Methods = {
  /** 撮影時刻一覧を取得 */
  get: {
    resBody: TargetTime[]
  }
}
