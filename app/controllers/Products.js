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
    let {
      name,
      city,
      category,
      description,
      unit,
      price,
      image_url,
      user_id,
    } = req.body

    name = name.toLowerCase()
    city = city.toLowerCase()
    unit = unit.toLowerCase()
    category = category.toLowerCase()

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

  async update(req, res) {
    const id = req.params.id
    const [product] = await ProductModel.getById(id)
    if (!product)
      return res.status(404).json({
        messse: `Product with the id# ${id} not found`,
      })
    if (req.token.id !== product.user_id) {
      return res.status(200).json({
        messse: 'You do not have sufficient privileges to update this product',
      })
    }
    let {name, price, city, category, description, unit, image_url} = req.body

    name = name.toLowerCase()
    city = city.toLowerCase()
    unit = unit.toLowerCase()
    category = category.toLowerCase()

    const updatedProduct = {
      name,
      price,
      city,
      category,
      description,
      unit,
      image_url,
    }

    try {
      const [product] = await ProductModel.update(id, updatedProduct)
      res.status(200).json(product)
    } catch (error) {
      console.log(error)
    }
  }

  async delete(req, res) {
    const {id} = req.params
    const [product] = await ProductModel.getById(id)

    if (product.user_id !== req.token.id) {
      return res.status(200).json({
        messse: 'You do not have sufficient privileges to delete this product',
      })
    }
    try {
      await ProductModel.remove(product.id)
      res
        .status(200)
        .json({message: `Your product with ID# ${id} has been deleted.`})
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new Products()
