import { MockMethods } from 'axios-mock-server'
import { User } from '~/@types'

export const users: User[] = [{ id: 0, name: 'aaaa' }, { id: 1, name: 'bbbb' }]

export interface Methods {
  get: {
    response: User[]
  }
}

export default {
  get: () => [200, users]
} as MockMethods
