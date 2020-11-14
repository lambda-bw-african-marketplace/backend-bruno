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
    return await db('products as p')
      .join('users as u', 'u.id', 'p.user_id')

      .where('u.id', id)
      .select(
        'p.id',
        'p.name as product_name',
        'p.price',
        'category',
        'description',
        'unit',
        'image_url',
        'user_id',
        'isAdmin',
        'first_name',
        'last_name'
      )
  }

  async update(id, payload) {
    const [userId] = await db('users')
      .update(payload)
      .where('id', id)
      .returning('id')
    return await db('users')
      .where('id', userId)
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
}

module.exports = new UserModel()
