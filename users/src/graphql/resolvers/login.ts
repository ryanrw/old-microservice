import { PoolContext } from '../../interfaces/pg'
import AuthService from '../../services/auth'
import { UserInfo } from '../../interfaces/auth'

export default {
  Query: {
    login: async (_parents: any, args: UserInfo, context: PoolContext) => {
      const auth = new AuthService(args.username, args.passwd, context.pool)
      const result = await auth.login()
      return result
    },
  },
}
