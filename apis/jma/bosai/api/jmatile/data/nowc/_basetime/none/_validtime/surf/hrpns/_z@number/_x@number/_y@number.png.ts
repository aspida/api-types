/**
 * 降水ナウキャスト画像API
 *
 * _basetime: 基準時刻 TargetTime['basetime']
 * _validtime: 実況時間または予報時刻 TargetTime['validtime']
 * _z: ズームレベル 4-10
 * _x: タイルのX座標
 * _y: タイルのY座標
 */
export type Methods = {
  /** 降水ナウキャスト画像をJPGで取得 */
  get: {
    resBody: ArrayBuffer
  }
}
