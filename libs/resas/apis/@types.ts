export enum PrefCode {
  Hokkaido = 1,
  Aomori,
  Iwate,
  Miyagi,
  Akita,
  Yamagata,
  Fukushima,
  Ibaraki,
  Tochigi,
  Gunma,
  Saitama,
  Chiba,
  Tokyo,
  Kanagawa,
  Niigata,
  Toyama,
  Ishikawa,
  Fukui,
  Yamanashi,
  Nagano,
  Gifu,
  Shizuoka,
  Aichi,
  Mie,
  Shiga,
  Kyoto,
  Osaka,
  Hyogo,
  Nara,
  Wakayama,
  Tottori,
  Shimane,
  Okayama,
  Hiroshima,
  Yamaguchi,
  Tokushima,
  Kagawa,
  Ehime,
  Kochi,
  Fukuoka,
  Saga,
  Nagasaki,
  Kumamoto,
  Oita,
  Miyazaki,
  Kagoshima,
  Okinawa
}

export enum BigCityFlag {
  General = '0',
  Ward = '1',
  City = '2',
  Tokyo23Ward = '3'
}

export const AllCityCode = '-'

export interface Headers {
  'X-API-KEY': string
}

export interface Response<T> {
  message: string | null
  result: T
}

export interface ResasError extends Error {
  statusCode: string
  message: string
  description: string
}
