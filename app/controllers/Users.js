const userModel = require('../models/UserModel')

class Users {
  async index(req, res) {
    const [user] = await userModel.index(req.token.email)
    res.status(200).json(user)
  }
  async getUserProducts(req, res) {
    try {
      const id = req.params.id

      const getProdructs = await userModel.getProducts(id)
      res.status(200).json(getProdructs)
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new Users()
