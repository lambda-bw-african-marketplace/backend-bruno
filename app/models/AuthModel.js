const db = require('../../config/dbConfig')
class AuthModel {
  async create(payload) {
    return await db('users').insert(payload).returning('id')
  }

  async findBy(field, email) {
    return await db('users').where(field, email)
  }
}

module.exports = new AuthModel()
