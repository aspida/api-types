import { MockMethods } from 'axios-mock-server'

export const users = [{ id: 0, name: 'aaaa' }, { id: 1, name: 'bbbb' }]

export type User = typeof users[0]

export interface Methods {
  get: {
    response: User[]
  }
}

export default {
  get: () => [200, users]
} as MockMethods
