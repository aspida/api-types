import { MockMethods } from 'axios-mock-server'
import { User, users } from './index'

export interface Methods {
  get: {
    response: User
  }
}

export default {
  get: ({ values }) => [200, users.filter((user) => user.id === values.userId)[0]]
} as MockMethods
