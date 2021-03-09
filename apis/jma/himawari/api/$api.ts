/* eslint-disable */
import { AspidaClient } from 'aspida'
import { Methods as Methods0 } from './satimg/_basetime/fd/_validtime/_band_prod/_z@number/_x@number/_y@number.jpg'
import { Methods as Methods1 } from './satimg/_basetime/jp/_validtime/_band_prod/6/_x@number/_y@number.jpg'
import { Methods as Methods2 } from './satimg/targetTimes_fd.json'
import { Methods as Methods3 } from './satimg/targetTimes_jp.json'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://www.jma.go.jp/bosai/himawari/data' : baseURL).replace(/\/$/, '')
  const PATH0 = '/satimg'
  const PATH1 = '/fd'
  const PATH2 = '/jp'
  const PATH3 = '/6'
  const PATH4 = '/satimg/targetTimes_fd.json'
  const PATH5 = '/satimg/targetTimes_jp.json'
  const GET = 'GET'

  return {
    satimg: {
      _basetime: (val1: number | string) => {
        const prefix1 = `${PATH0}/${val1}`

        return {
          fd: {
            _validtime: (val3: number | string) => {
              const prefix3 = `${prefix1}${PATH1}/${val3}`

              return {
                _band_prod: (val4: number | string) => {
                  const prefix4 = `${prefix3}/${val4}`

                  return {
                    _z: (val5: number) => {
                      const prefix5 = `${prefix4}/${val5}`

                      return {
                        _x: (val6: number) => {
                          const prefix6 = `${prefix5}/${val6}`

                          return {
                            /**
                             * フルディスク画像API
                             * 
                             * _basetime: 撮影時間 TargetTime['basetime']
                             * _validtime: 撮影時間 TargetTime['validtime']
                             * _band_prod: 画像種別 BAND_PROD
                             * _z: ズームレベル 3-5
                             * _x: タイルのX座標
                             * _y: タイルのY座標
                             */
                            _y_jpg: (val7: number) => {
                              const prefix7 = `${prefix6}/${val7}.jpg`

                              return {
                                /**
                                 * フルディスク画像をJPGで取得
                                 */
                                get: (option?: { config?: T }) =>
                                  fetch<Methods0['get']['resBody']>(prefix, prefix7, GET, option).arrayBuffer(),
                                /**
                                 * フルディスク画像をJPGで取得
                                 */
                                $get: (option?: { config?: T }) =>
                                  fetch<Methods0['get']['resBody']>(prefix, prefix7, GET, option).arrayBuffer().then(r => r.body),
                                $path: () => `${prefix}${prefix7}`
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          jp: {
            _validtime: (val3: number | string) => {
              const prefix3 = `${prefix1}${PATH2}/${val3}`

              return {
                _band_prod: (val4: number | string) => {
                  const prefix4 = `${prefix3}/${val4}`

                  return {
                    $6: {
                      _x: (val6: number) => {
                        const prefix6 = `${prefix4}${PATH3}/${val6}`

                        return {
                          /**
                           * 日本付近画像API
                           * 
                           * _basetime: 撮影時間 TargetTime['basetime']
                           * _validtime: 撮影時間 TargetTime['validtime']
                           * _band_prod: 画像種別 BAND_PROD
                           * _x: タイルのX座標
                           * _y: タイルのY座標
                           */
                          _y_jpg: (val7: number) => {
                            const prefix7 = `${prefix6}/${val7}.jpg`

                            return {
                              /**
                               * 日本付近画像をJPGで取得
                               */
                              get: (option?: { config?: T }) =>
                                fetch<Methods1['get']['resBody']>(prefix, prefix7, GET, option).arrayBuffer(),
                              /**
                               * 日本付近画像をJPGで取得
                               */
                              $get: (option?: { config?: T }) =>
                                fetch<Methods1['get']['resBody']>(prefix, prefix7, GET, option).arrayBuffer().then(r => r.body),
                              $path: () => `${prefix}${prefix7}`
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      /**
       * 撮影時刻API
       */
      targetTimes_fd_json: {
        /**
         * 撮影時刻一覧を取得
         */
        get: (option?: { config?: T }) =>
          fetch<Methods2['get']['resBody']>(prefix, PATH4, GET, option).json(),
        /**
         * 撮影時刻一覧を取得
         */
        $get: (option?: { config?: T }) =>
          fetch<Methods2['get']['resBody']>(prefix, PATH4, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH4}`
      },
      /**
       * 日本付近の撮影時刻API
       */
      targetTimes_jp_json: {
        /**
         * 日本付近の撮影時刻一覧を取得
         */
        get: (option?: { config?: T }) =>
          fetch<Methods3['get']['resBody']>(prefix, PATH5, GET, option).json(),
        /**
         * 日本付近の撮影時刻一覧を取得
         */
        $get: (option?: { config?: T }) =>
          fetch<Methods3['get']['resBody']>(prefix, PATH5, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH5}`
      }
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export * from './@types'
export * from './@constants'
export default api
