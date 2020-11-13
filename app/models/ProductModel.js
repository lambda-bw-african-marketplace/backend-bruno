const db = require('../../config/dbConfig')

class ProductModel {
  async all() {
    return await db('product_locations as pl')
      .join('users as u', 'u.id', 'pl.user_id')
      .join('products as p', 'p.user_id', 'u.id')
      .join('locations as l', 'l.id', 'pl.location_id')
      .select('p.id', 'p.name as product_name', 'l.name as location', 'p.price')
  }
}

module.exports = new ProductModel()

//   {
//     "user_id": 1,
//     "location_id": 1,
//     "id": 1,
//     "email": "brunopaula@dryserv.com",
//     "password": "$2a$13$bQ/DH.TIzc8wqmYGzVJqHu4owPIiYety3/8KzS1KTIwKbhnvUoip6",
//     "isAdmin": false,
//     "first_name": "Bruno",
//     "last_name": "paula",
//     "created_at": "2020-11-12T19:47:21.307Z",
//     "updated_at": "2020-11-12T19:47:21.307Z",
//     "name": "boston",
//     "price": 3.58,
//     "category": "Grains",
//     "description": "Pinto Raw Beans",
//     "unit": "lbs",
//     "imageUrl": null
//   },
