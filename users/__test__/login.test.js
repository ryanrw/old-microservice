const login = require('../src/graphql/resolvers/login')
const pg = require('pg')

jest.mock('pg')

const { login: mockLogin } = login.default.Query

const mockContext = {
  pool: new pg.Pool(),
}

describe('Login service', () => {
  it('should login success', async () => {
    const result = await mockLogin(
      null,
      { username: 'ryan', passwd: '1234' },
      mockContext
    )
    expect(result.isSuccess).toBe(true)
  })

  it('should login unsuccessfully when enter wrong password', async () => {
    const result = await mockLogin(
      null,
      { username: 'ryan', passwd: '12345' },
      mockContext
    )
    expect(result.isSuccess).toBe(false)
  })
})
