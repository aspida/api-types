/** 画像種別 */
export const BAND_PROD = {
  /** 可視画像 */
  VISIBLE: 'B13/TBB',
  /** 赤外画像 */
  INFRARED: 'B03/ALBD',
  /** 水蒸気画像 */
  WATER_VAPOR: 'B08/TBB',
  /** トゥルーカラー再現画像 */
  TRUE_COLOR: 'REP/ETC',
  /** 雲頂強調画像 */
  CLOUD_TOP: 'SND/ETC'
} as const
