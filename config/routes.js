const express = require('express')
const Router = express.Router()

const UserController = require('../app/controllers/Users')
const WelcomeController = require('../app/controllers/Welcome')
const AuthController = require('../app/controllers/Auth')
const ProductController = require('../app/controllers/Products')
const LocationController = require('../app/controllers/Locations')
const auth = require('../config/authenticate')
const role = require('../app/middlewares/role')

Router.route('/register').post(AuthController.register)
Router.route('/login').post(AuthController.login)
Router.route('/').get(WelcomeController.index)
Router.route('/profile').get(auth(), UserController.index)

Router.route('/profile/:id').put(auth(), UserController.update)
Router.route('/user/:id/products').get(auth(), UserController.getUserProducts)

Router.route('/products')
  .get(auth(), ProductController.index)
  .post(auth(), ProductController.create)

Router.route('/products/:id')
  .get(auth(), ProductController.show)
  .put(auth(), ProductController.update)
  .delete(auth(), role(), ProductController.delete)

Router.route('/locations').get(auth(), LocationController.index)
Router.route('/locations/:city').get(auth(), LocationController.city)

module.exports = Router
