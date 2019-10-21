const pg = require('pg')
const find = require('../src/graphql/resolvers/find')

jest.mock('pg')

const { find: mockFind } = find.default.Query

const mockContext = {
  pool: new pg.Pool(),
}

describe('Find post service', () => {
  it('should return a post', async () => {
    const result = await mockFind(null, { postid: 1 }, mockContext)

    expect(result).toStrictEqual({
      author: 'ryan',
      title: 'Hello, world',
      content: 'hello world!',
    })
  })
})
