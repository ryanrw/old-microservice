const pg = require('pg')
const addPost = require('../src/graphql/resolvers/addPost')

jest.mock('pg')

const { addPost: mockAddPost } = addPost.default.Mutation

const mockContext = {
  pool: new pg.Pool(),
  userid: 'some id',
}

const mockContextWithOutUserid = {
  pool: new pg.Pool(),
}

const args = { title: 'test', content: 'test' }

describe('Add post service', () => {
  it('Should add post if user is login', async () => {
    const result = await mockAddPost(null, args, mockContext)

    expect(result.isSuccess).toBe(true)
  })

  it('Should not success if user not login', async () => {
    const result = await mockAddPost(null, args, mockContextWithOutUserid)

    expect(result.isSuccess).toBe(false)
  })

  it('Should not success if not provide corrected args', async () => {
    const result = await mockAddPost(null, null, mockContext)

    expect(result.isSuccess).toBe(false)
  })
})
