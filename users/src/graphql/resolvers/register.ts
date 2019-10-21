import { PoolContext } from '../../interfaces/pg'
import { UserInfo } from '../../interfaces/auth'
import RegisterService from '../../services/register'

export default {
  Mutation: {
    register: async (_parent: any, args: UserInfo, context: PoolContext) => {
      const registerService = new RegisterService(
        args.username,
        args.passwd,
        context.pool
      )
      const result = await registerService.Register()
      return result
    },
  },
}
