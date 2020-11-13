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
}

module.exports = new UserModel()

// "id": 2,
//     "name": "Rice",
//     "price": 3.99,
//     "category": "Grains",
//     "description": "raw jasmine rice",
//     "unit": "lbs",
//     "imageUrl": null,
//     "user_id": 2,
//     "email": "brunopaula@dryserv.com",
//     "password": "$2a$13$Sgb4yelCXGyCAN8FX1NfS.5aptQY19sASxFNV80C2Dwy2pzsIuPgG",
//     "isAdmin": false,
//     "first_name": "Bruno",
//     "last_name": "paula",
