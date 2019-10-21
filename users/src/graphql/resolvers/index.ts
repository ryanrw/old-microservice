import _ from 'lodash'

import register from './register'
import login from './login'

export const resolvers = _.merge({}, register, login)
