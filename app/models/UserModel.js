const db = require('../../config/dbConfig')
class UserModel {
  async index(email) {
    return await db('users')
      .where('email', email)
      .select(
        'id',
        'email',
        'isAdmin',
        'first_name',
        'last_name',
        'created_at',
        'updated_at'
      )
  }

  async findBy(field, name) {
    return await db('users').where(field, name)
  }

  async getProducts(id) {
    return await db('products')
      .join('users', 'users.id', 'products.user_id')
      .join('location', 'users.id', 'products.user_id')
      .where('users.id', id)
      .select('*')
  }
}

module.exports = new UserModel()
