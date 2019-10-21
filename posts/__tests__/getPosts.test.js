const pg = require('pg')
const getPosts = require('../src/graphql/resolvers/getPosts')

jest.mock('pg')

const { getPosts: mockGetPosts } = getPosts.default.Query

const mockContext = {
  pool: new pg.Pool(),
}

describe('Get all post service', () => {
  it('should get all post', async () => {
    const result = await mockGetPosts(null, null, mockContext)

    expect(result).toStrictEqual([
      {
        author: 'ryan',
        title: 'Hello, world',
        content: 'hello world!',
      },
    ])
  })
})
