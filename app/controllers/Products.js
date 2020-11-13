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

  async show(req, res) {
    const {id} = req.params
    try {
      const [product] = await ProductModel.getById(id)
      if (!product) res.status(400).json({error: 'Invalid product id'})
      res.status(200).json(product)
    } catch (error) {
      console.log(error)
    }
  }

  async create(req, res) {
    const {
      name,
      city,
      category,
      description,
      unit,
      price,
      image_url,
      user_id,
    } = req.body

    const newProduct = {
      name,
      city,
      category,
      description,
      unit,
      price,
      image_url,
      user_id,
    }

    try {
      const [saveNewProduct] = await ProductModel.save(newProduct)
      res.status(201).json({
        id: saveNewProduct,
        name,
        city,
        category,
        description,
        unit,
        price,
        image_url,
        user_id,
      })
    } catch (error) {
      console.log(error)
      res.status(500).json({error: 'Opps something went wrong'})
    }
  }
}

module.exports = new Products()
