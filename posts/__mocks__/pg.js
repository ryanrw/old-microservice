const pg = jest.genMockFromModule('pg')

class Pool {
  async query() {
    return {
      rowCount: 1,
      rows: [
        {
          username: 'ryan',
          title: 'Hello, world',
          content: 'hello world!',
        },
      ],
    }
  }
}

pg.Pool = Pool

module.exports = pg
