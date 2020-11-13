const AuthModel = require('../models/AuthModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const jwtKey = process.env.JWT_SECRET

class Auth {
  async register(req, res) {
    try {
      const {email, password, isAdmin, first_name, last_name} = req.body
      const hash = bcrypt.hashSync(password, 13)

      const user = {
        email,
        password: hash,
        isAdmin,
        first_name,
        last_name,
      }

      const [newUser] = await AuthModel.create(user)
      res.status(201).json({
        id: newUser,
        email,
        first_name,
        last_name,
        isAdmin: !isAdmin ? false : isAdmin,
      })
    } catch (error) {
      console.log(error)
      res.status(500).json('Something Went Wrong...')
    }
  }

  async login(req, res) {
    const {email, password} = req.body
    try {
      const [user] = await AuthModel.findBy('email', email)

      if (!user)
        return res.status(401).json({message: 'Invalid Username or Password'})

      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user)
        res.status(200).json({
          message: `Welcome ${
            user.first_name ? user.first_name : ''
          } to Afican Marketplace!`,
          token,
        })
      } else {
        return res.status(401).json({message: 'Invalid Username or Password'})
      }
    } catch (error) {
      console.log(error)
      res.status(500).json({error: 'Opps, Something Went Wrong!!!'})
    }
  }
}

function generateToken(user) {
  const payload = {
    id: user.id,
    firstName: user.first_name,
    email: user.email,
    isAdmin: user.isAdmin,
  }

  return jwt.sign(payload, jwtKey)
}

module.exports = new Auth()
