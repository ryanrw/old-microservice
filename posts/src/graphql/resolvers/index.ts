// entry of all resolver here
import _ from 'lodash'
import addPost from './addPost'
import find from './find'
import getPosts from './getPosts'

export const resolvers = _.merge({}, addPost, getPosts, find)
