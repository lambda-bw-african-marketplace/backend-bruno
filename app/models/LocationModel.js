const db = require('../../config/dbConfig')

class Locations {
  async all() {
    return await db('products').select('*').orderBy('city')
  }

  async city(city) {
    return await db('products').select('*').where('city', city)
  }
}

module.exports = new Locations()
