const db = require('../../config/dbConfig')

class ProductModel {
  async all() {
    return await db('products as p')
      .join('users as u', 'u.id', 'p.user_id')

      .select(
        'p.id',
        'p.name as product_name',
        'p.price',
        'city',
        'category',
        'description',
        'unit',
        'image_url',
        'user_id'
      )
  }

  async getById(id) {
    return await db('products').where('id', id)
  }

  async save(payload) {
    return await db('products').insert(payload).returning('id')
  }
}

module.exports = new ProductModel()
