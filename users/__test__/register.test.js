const register = require('../src/graphql/resolvers/register')
const pg = require('pg')

jest.mock('pg')

const { register: mockRegister } = register.default.Mutation

const mockContext = {
  pool: new pg.Pool(),
}

describe('User register service', () => {
  it('should register the user info', async () => {
    const result = await mockRegister(
      null,
      { username: 'ryan', passwd: '1234' },
      mockContext
    )

    expect(result.isSuccess).toBe(true)
  })

  it('should not register the user info', async () => {
    const result = await mockRegister(null, { username: 'ryan' }, mockContext)

    expect(result.isSuccess).toBe(false)
  })
})
