import { UserContext } from '../../types/context'
import { PostService } from '../../services/post'
import { Logger } from '../../loaders/logger'

export default {
  Query: {
    getPosts: async (_parents: any, _args: any, context: UserContext) => {
      const post = new PostService(context)
      const allPost = await post.getAll()

      return allPost
    },
  },
}
