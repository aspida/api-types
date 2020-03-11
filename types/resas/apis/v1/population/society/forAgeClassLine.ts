import { MockMethods } from 'axios-mock-server'
import { PrefCode, Headers, Response } from '../../../@types'

export interface Methods {
  get: {
    headers: Headers
    params: {
      prefCode: PrefCode
      cityCode: string
    }
    response: Response<{
      data: {
        label: string
        data: {
          axisx: string
          axisy: number
        }[]
      }[]
    }>
  }
}

export default {
  get: () => [
    200,
    {
      message: null,
      result: {
        data: [
          {
            label: '1980年→1985年',
            data: [
              { axisx: '0～4歳→5～9歳', axisy: 197 },
              { axisx: '5～9歳→10～14歳', axisy: 200 },
              { axisx: '10～14歳→15～19歳', axisy: 725 },
              { axisx: '15～19歳→20～24歳', axisy: 649 },
              { axisx: '20～24歳→25～29歳', axisy: -2308 },
              { axisx: '25～29歳→30～34歳', axisy: -1010 },
              { axisx: '30～34歳→35～39歳', axisy: -256 },
              { axisx: '35～39歳→40～44歳', axisy: -70 },
              { axisx: '40～44歳→45～49歳', axisy: -90 },
              { axisx: '45～49歳→50～54歳', axisy: -259 },
              { axisx: '50～54歳→55～59歳', axisy: -354 },
              { axisx: '55～59歳→60～64歳', axisy: -352 },
              { axisx: '60～64歳→65～69歳', axisy: -300 },
              { axisx: '65～69歳→70～74歳', axisy: -284 },
              { axisx: '70～74歳→75～79歳', axisy: -213 },
              { axisx: '75～79歳→80～84歳', axisy: -97 },
              { axisx: '80～84歳→85～89歳', axisy: -20 },
              { axisx: '85～89歳→90歳～', axisy: -1 }
            ]
          },
          {
            label: '1985年→1990年',
            data: [
              { axisx: '0～4歳→5～9歳', axisy: -168 },
              { axisx: '5～9歳→10～14歳', axisy: -343 },
              { axisx: '10～14歳→15～19歳', axisy: -7 },
              { axisx: '15～19歳→20～24歳', axisy: 34 },
              { axisx: '20～24歳→25～29歳', axisy: -2468 },
              { axisx: '25～29歳→30～34歳', axisy: -1141 },
              { axisx: '30～34歳→35～39歳', axisy: -638 },
              { axisx: '35～39歳→40～44歳', axisy: -770 },
              { axisx: '40～44歳→45～49歳', axisy: -690 },
              { axisx: '45～49歳→50～54歳', axisy: -660 },
              { axisx: '50～54歳→55～59歳', axisy: -689 },
              { axisx: '55～59歳→60～64歳', axisy: -707 },
              { axisx: '60～64歳→65～69歳', axisy: -597 },
              { axisx: '65～69歳→70～74歳', axisy: -451 },
              { axisx: '70～74歳→75～79歳', axisy: -338 },
              { axisx: '75～79歳→80～84歳', axisy: -210 },
              { axisx: '80～84歳→85～89歳', axisy: -123 },
              { axisx: '85～89歳→90歳～', axisy: -29 }
            ]
          },
          {
            label: '1990年→1995年',
            data: [
              { axisx: '0～4歳→5～9歳', axisy: 44 },
              { axisx: '5～9歳→10～14歳', axisy: -61 },
              { axisx: '10～14歳→15～19歳', axisy: 266 },
              { axisx: '15～19歳→20～24歳', axisy: 381 },
              { axisx: '20～24歳→25～29歳', axisy: -1617 },
              { axisx: '25～29歳→30～34歳', axisy: -841 },
              { axisx: '30～34歳→35～39歳', axisy: -273 },
              { axisx: '35～39歳→40～44歳', axisy: -147 },
              { axisx: '40～44歳→45～49歳', axisy: -175 },
              { axisx: '45～49歳→50～54歳', axisy: -230 },
              { axisx: '50～54歳→55～59歳', axisy: -257 },
              { axisx: '55～59歳→60～64歳', axisy: -311 },
              { axisx: '60～64歳→65～69歳', axisy: -205 },
              { axisx: '65～69歳→70～74歳', axisy: -126 },
              { axisx: '70～74歳→75～79歳', axisy: -69 },
              { axisx: '75～79歳→80～84歳', axisy: -51 },
              { axisx: '80～84歳→85～89歳', axisy: -36 },
              { axisx: '85～89歳→90歳～', axisy: 1 }
            ]
          },
          {
            label: '1995年→2000年',
            data: [
              { axisx: '0～4歳→5～9歳', axisy: 303 },
              { axisx: '5～9歳→10～14歳', axisy: 141 },
              { axisx: '10～14歳→15～19歳', axisy: 490 },
              { axisx: '15～19歳→20～24歳', axisy: 648 },
              { axisx: '20～24歳→25～29歳', axisy: -540 },
              { axisx: '25～29歳→30～34歳', axisy: -35 },
              { axisx: '30～34歳→35～39歳', axisy: 382 },
              { axisx: '35～39歳→40～44歳', axisy: 327 },
              { axisx: '40～44歳→45～49歳', axisy: 269 },
              { axisx: '45～49歳→50～54歳', axisy: 243 },
              { axisx: '50～54歳→55～59歳', axisy: 76 },
              { axisx: '55～59歳→60～64歳', axisy: -65 },
              { axisx: '60～64歳→65～69歳', axisy: -41 },
              { axisx: '65～69歳→70～74歳', axisy: -93 },
              { axisx: '70～74歳→75～79歳', axisy: -42 },
              { axisx: '75～79歳→80～84歳', axisy: -31 },
              { axisx: '80～84歳→85～89歳', axisy: -31 },
              { axisx: '85～89歳→90歳～', axisy: 28 }
            ]
          },
          {
            label: '2000年→2005年',
            data: [
              { axisx: '0～4歳→5～9歳', axisy: 477 },
              { axisx: '5～9歳→10～14歳', axisy: 324 },
              { axisx: '10～14歳→15～19歳', axisy: 419 },
              { axisx: '15～19歳→20～24歳', axisy: 968 },
              { axisx: '20～24歳→25～29歳', axisy: 651 },
              { axisx: '25～29歳→30～34歳', axisy: 526 },
              { axisx: '30～34歳→35～39歳', axisy: 655 },
              { axisx: '35～39歳→40～44歳', axisy: 739 },
              { axisx: '40～44歳→45～49歳', axisy: 547 },
              { axisx: '45～49歳→50～54歳', axisy: 358 },
              { axisx: '50～54歳→55～59歳', axisy: 282 },
              { axisx: '55～59歳→60～64歳', axisy: 28 },
              { axisx: '60～64歳→65～69歳', axisy: 74 },
              { axisx: '65～69歳→70～74歳', axisy: 88 },
              { axisx: '70～74歳→75～79歳', axisy: 34 },
              { axisx: '75～79歳→80～84歳', axisy: 1 },
              { axisx: '80～84歳→85～89歳', axisy: 21 },
              { axisx: '85～89歳→90歳～', axisy: 46 }
            ]
          },
          {
            label: '2005年→2010年',
            data: [
              { axisx: '0～4歳→5～9歳', axisy: 311 },
              { axisx: '5～9歳→10～14歳', axisy: 212 },
              { axisx: '10～14歳→15～19歳', axisy: 232 },
              { axisx: '15～19歳→20～24歳', axisy: 1046 },
              { axisx: '20～24歳→25～29歳', axisy: 1148 },
              { axisx: '25～29歳→30～34歳', axisy: 597 },
              { axisx: '30～34歳→35～39歳', axisy: 708 },
              { axisx: '35～39歳→40～44歳', axisy: 787 },
              { axisx: '40～44歳→45～49歳', axisy: 654 },
              { axisx: '45～49歳→50～54歳', axisy: 289 },
              { axisx: '50～54歳→55～59歳', axisy: 56 },
              { axisx: '55～59歳→60～64歳', axisy: -173 },
              { axisx: '60～64歳→65～69歳', axisy: 36 },
              { axisx: '65～69歳→70～74歳', axisy: -50 },
              { axisx: '70～74歳→75～79歳', axisy: -38 },
              { axisx: '75～79歳→80～84歳', axisy: -63 },
              { axisx: '80～84歳→85～89歳', axisy: -52 },
              { axisx: '85～89歳→90歳～', axisy: -43 }
            ]
          },
          {
            label: '2010年→2015年',
            data: [
              { axisx: '0～4歳→5～9歳', axisy: 524 },
              { axisx: '5～9歳→10～14歳', axisy: 308 },
              { axisx: '10～14歳→15～19歳', axisy: 363 },
              { axisx: '15～19歳→20～24歳', axisy: 1330 },
              { axisx: '20～24歳→25～29歳', axisy: 1840 },
              { axisx: '25～29歳→30～34歳', axisy: 1298 },
              { axisx: '30～34歳→35～39歳', axisy: 1294 },
              { axisx: '35～39歳→40～44歳', axisy: 1447 },
              { axisx: '40～44歳→45～49歳', axisy: 1099 },
              { axisx: '45～49歳→50～54歳', axisy: 606 },
              { axisx: '50～54歳→55～59歳', axisy: 279 },
              { axisx: '55～59歳→60～64歳', axisy: -2 },
              { axisx: '60～64歳→65～69歳', axisy: 154 },
              { axisx: '65～69歳→70～74歳', axisy: 63 },
              { axisx: '70～74歳→75～79歳', axisy: 68 },
              { axisx: '75～79歳→80～84歳', axisy: 58 },
              { axisx: '80～84歳→85～89歳', axisy: 28 },
              { axisx: '85～89歳→90歳～', axisy: 23 }
            ]
          }
        ]
      }
    } as Methods['get']['response']
  ]
} as MockMethods
