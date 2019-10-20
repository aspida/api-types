import { MockMethods } from 'axios-mock-server'
import { PrefCode, BigCityFlag, Headers, Response } from '~/@types'

export interface Methods {
  get: {
    headers: Headers
    params: { prefCode: PrefCode }
    response: Response<
      {
        prefCode: PrefCode
        cityCode: string
        cityName: string
        bigCityFlag: string
      }[]
    >
  }
}

export default {
  get: ({ params }) => [
    200,
    {
      message: null,
      result: [
        {
          prefCode: params.prefCode,
          cityCode: '01100',
          cityName: '札幌市',
          bigCityFlag: BigCityFlag.City
        },
        {
          prefCode: params.prefCode,
          cityCode: '01101',
          cityName: '札幌市中央区',
          bigCityFlag: BigCityFlag.Ward
        },
        {
          prefCode: params.prefCode,
          cityCode: '01102',
          cityName: '札幌市北区',
          bigCityFlag: BigCityFlag.Ward
        },
        {
          prefCode: params.prefCode,
          cityCode: '01103',
          cityName: '札幌市東区',
          bigCityFlag: BigCityFlag.Ward
        },
        {
          prefCode: params.prefCode,
          cityCode: '01104',
          cityName: '札幌市白石区',
          bigCityFlag: BigCityFlag.Ward
        },
        {
          prefCode: params.prefCode,
          cityCode: '01105',
          cityName: '札幌市豊平区',
          bigCityFlag: BigCityFlag.Ward
        },
        {
          prefCode: params.prefCode,
          cityCode: '01106',
          cityName: '札幌市南区',
          bigCityFlag: BigCityFlag.Ward
        },
        {
          prefCode: params.prefCode,
          cityCode: '01107',
          cityName: '札幌市西区',
          bigCityFlag: BigCityFlag.Ward
        },
        {
          prefCode: params.prefCode,
          cityCode: '01108',
          cityName: '札幌市厚別区',
          bigCityFlag: BigCityFlag.Ward
        },
        {
          prefCode: params.prefCode,
          cityCode: '01109',
          cityName: '札幌市手稲区',
          bigCityFlag: BigCityFlag.Ward
        },
        {
          prefCode: params.prefCode,
          cityCode: '01110',
          cityName: '札幌市清田区',
          bigCityFlag: BigCityFlag.Ward
        },
        {
          prefCode: params.prefCode,
          cityCode: '01202',
          cityName: '函館市',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01203',
          cityName: '小樽市',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01204',
          cityName: '旭川市',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01205',
          cityName: '室蘭市',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01206',
          cityName: '釧路市',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01207',
          cityName: '帯広市',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01208',
          cityName: '北見市',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01209',
          cityName: '夕張市',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01210',
          cityName: '岩見沢市',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01211',
          cityName: '網走市',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01212',
          cityName: '留萌市',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01213',
          cityName: '苫小牧市',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01214',
          cityName: '稚内市',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01215',
          cityName: '美唄市',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01216',
          cityName: '芦別市',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01217',
          cityName: '江別市',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01218',
          cityName: '赤平市',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01219',
          cityName: '紋別市',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01220',
          cityName: '士別市',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01221',
          cityName: '名寄市',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01222',
          cityName: '三笠市',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01223',
          cityName: '根室市',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01224',
          cityName: '千歳市',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01225',
          cityName: '滝川市',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01226',
          cityName: '砂川市',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01227',
          cityName: '歌志内市',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01228',
          cityName: '深川市',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01229',
          cityName: '富良野市',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01230',
          cityName: '登別市',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01231',
          cityName: '恵庭市',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01233',
          cityName: '伊達市',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01234',
          cityName: '北広島市',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01235',
          cityName: '石狩市',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01236',
          cityName: '北斗市',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01303',
          cityName: '当別町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01304',
          cityName: '新篠津村',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01331',
          cityName: '松前町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01332',
          cityName: '福島町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01333',
          cityName: '知内町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01334',
          cityName: '木古内町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01337',
          cityName: '七飯町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01343',
          cityName: '鹿部町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01345',
          cityName: '森町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01346',
          cityName: '八雲町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01347',
          cityName: '長万部町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01361',
          cityName: '江差町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01362',
          cityName: '上ノ国町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01363',
          cityName: '厚沢部町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01364',
          cityName: '乙部町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01367',
          cityName: '奥尻町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01370',
          cityName: '今金町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01371',
          cityName: 'せたな町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01391',
          cityName: '島牧村',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01392',
          cityName: '寿都町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01393',
          cityName: '黒松内町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01394',
          cityName: '蘭越町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01395',
          cityName: 'ニセコ町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01396',
          cityName: '真狩村',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01397',
          cityName: '留寿都村',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01398',
          cityName: '喜茂別町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01399',
          cityName: '京極町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01400',
          cityName: '倶知安町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01401',
          cityName: '共和町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01402',
          cityName: '岩内町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01403',
          cityName: '泊村',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01404',
          cityName: '神恵内村',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01405',
          cityName: '積丹町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01406',
          cityName: '古平町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01407',
          cityName: '仁木町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01408',
          cityName: '余市町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01409',
          cityName: '赤井川村',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01423',
          cityName: '南幌町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01424',
          cityName: '奈井江町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01425',
          cityName: '上砂川町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01427',
          cityName: '由仁町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01428',
          cityName: '長沼町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01429',
          cityName: '栗山町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01430',
          cityName: '月形町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01431',
          cityName: '浦臼町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01432',
          cityName: '新十津川町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01433',
          cityName: '妹背牛町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01434',
          cityName: '秩父別町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01436',
          cityName: '雨竜町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01437',
          cityName: '北竜町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01438',
          cityName: '沼田町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01452',
          cityName: '鷹栖町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01453',
          cityName: '東神楽町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01454',
          cityName: '当麻町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01455',
          cityName: '比布町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01456',
          cityName: '愛別町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01457',
          cityName: '上川町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01458',
          cityName: '東川町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01459',
          cityName: '美瑛町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01460',
          cityName: '上富良野町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01461',
          cityName: '中富良野町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01462',
          cityName: '南富良野町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01463',
          cityName: '占冠村',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01464',
          cityName: '和寒町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01465',
          cityName: '剣淵町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01468',
          cityName: '下川町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01469',
          cityName: '美深町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01470',
          cityName: '音威子府村',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01471',
          cityName: '中川町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01472',
          cityName: '幌加内町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01481',
          cityName: '増毛町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01482',
          cityName: '小平町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01483',
          cityName: '苫前町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01484',
          cityName: '羽幌町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01485',
          cityName: '初山別村',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01486',
          cityName: '遠別町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01487',
          cityName: '天塩町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01511',
          cityName: '猿払村',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01512',
          cityName: '浜頓別町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01513',
          cityName: '中頓別町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01514',
          cityName: '枝幸町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01516',
          cityName: '豊富町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01517',
          cityName: '礼文町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01518',
          cityName: '利尻町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01519',
          cityName: '利尻富士町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01520',
          cityName: '幌延町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01543',
          cityName: '美幌町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01544',
          cityName: '津別町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01545',
          cityName: '斜里町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01546',
          cityName: '清里町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01547',
          cityName: '小清水町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01549',
          cityName: '訓子府町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01550',
          cityName: '置戸町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01552',
          cityName: '佐呂間町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01555',
          cityName: '遠軽町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01559',
          cityName: '湧別町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01560',
          cityName: '滝上町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01561',
          cityName: '興部町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01562',
          cityName: '西興部村',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01563',
          cityName: '雄武町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01564',
          cityName: '大空町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01571',
          cityName: '豊浦町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01575',
          cityName: '壮瞥町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01578',
          cityName: '白老町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01581',
          cityName: '厚真町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01584',
          cityName: '洞爺湖町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01585',
          cityName: '安平町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01586',
          cityName: 'むかわ町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01601',
          cityName: '日高町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01602',
          cityName: '平取町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01604',
          cityName: '新冠町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01607',
          cityName: '浦河町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01608',
          cityName: '様似町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01609',
          cityName: 'えりも町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01610',
          cityName: '新ひだか町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01631',
          cityName: '音更町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01632',
          cityName: '士幌町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01633',
          cityName: '上士幌町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01634',
          cityName: '鹿追町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01635',
          cityName: '新得町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01636',
          cityName: '清水町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01637',
          cityName: '芽室町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01638',
          cityName: '中札内村',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01639',
          cityName: '更別村',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01641',
          cityName: '大樹町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01642',
          cityName: '広尾町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01643',
          cityName: '幕別町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01644',
          cityName: '池田町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01645',
          cityName: '豊頃町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01646',
          cityName: '本別町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01647',
          cityName: '足寄町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01648',
          cityName: '陸別町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01649',
          cityName: '浦幌町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01661',
          cityName: '釧路町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01662',
          cityName: '厚岸町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01663',
          cityName: '浜中町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01664',
          cityName: '標茶町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01665',
          cityName: '弟子屈町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01667',
          cityName: '鶴居村',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01668',
          cityName: '白糠町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01691',
          cityName: '別海町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01692',
          cityName: '中標津町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01693',
          cityName: '標津町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01694',
          cityName: '羅臼町',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01695',
          cityName: '色丹村',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01696',
          cityName: '国後郡泊村',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01697',
          cityName: '留夜別村',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01698',
          cityName: '留別村',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01699',
          cityName: '紗那村',
          bigCityFlag: BigCityFlag.General
        },
        {
          prefCode: params.prefCode,
          cityCode: '01700',
          cityName: '蘂取村',
          bigCityFlag: BigCityFlag.General
        }
      ]
    } as Methods['get']['response']
  ]
} as MockMethods
