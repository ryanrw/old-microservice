const pg = jest.genMockFromModule('pg')

class Pool {
  async query() {
    return {
      rowCount: 2,
      rows: [
        {
          passwd:
            '$2b$10$9qHrymuVGUdweHLDRc/R7.msa/4.9OXujRAbxy8QJWzh0izsanGBS',
        },
      ],
    }
  }
}

pg.Pool = Pool

module.exports = pg
