const ProductModel = require('../models/ProductModel')

class Products {
  async index(req, res) {
    try {
      const products = await ProductModel.all()
      res.status(200).json(products)
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new Products()
