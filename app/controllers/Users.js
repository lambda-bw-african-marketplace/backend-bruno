const userModel = require('../models/UserModel')
const priviliges = require('../middlewares/restric')

class Users {
  async index(req, res) {
    const [user] = await userModel.index(req.token.email)
    res.status(200).json(user)
  }

  async update(req, res) {
    const {id} = req.params

    const {email, isAdmin, first_name, last_name} = req.body

    const updatedUser = {
      email,
      isAdmin,
      first_name,
      last_name,
      updated_at: new Date(),
    }

    try {
      if (req.token.id != id) {
        return res.status(401).json({
          messse: 'You do not have sufficient privileges.',
        })
      }

      const [user] = await userModel.update(id, updatedUser)
      res.status(200).json(user)
    } catch (error) {
      console.log(error)
    }
  }

  async getUserProducts(req, res) {
    const id = req.params.id
    try {
      const getProdructs = await userModel.getProducts(id)
      if (getProdructs === undefined)
        return res.status(404).json({error: 'user_id is not valid'})
      res.status(200).json(getProdructs)
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new Users()
