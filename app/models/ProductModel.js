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

  async update(id, payload) {
    const [productId] = await db('products')
      .update(payload)
      .where('id', id)
      .returning('id')
    return await db('products')
      .where('id', productId)
      .select(
        'id',
        'name',
        'price',
        'category',
        'description',
        'unit',
        'city',
        'image_url'
      )
  }
  async remove(id) {
    return db('products').where({id}).del()
  }
}

module.exports = new ProductModel()
