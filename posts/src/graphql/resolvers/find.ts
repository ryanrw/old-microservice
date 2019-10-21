import { UserContext } from '../../types/context'
import { UserFindPostInput } from '../../types/post'
import { PostService } from '../../services/post'

export default {
  Query: {
    find: async (
      _parent: any,
      args: UserFindPostInput,
      context: UserContext
    ) => {
      const post = new PostService(context)
      const result = await post.find(args.postid)

      return result
    },
  },
}
