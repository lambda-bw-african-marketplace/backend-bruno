const express = require('express')
const Router = express.Router()

const UserController = require('../app/controllers/Users')
const WelcomeController = require('../app/controllers/Welcome')
const AuthController = require('../app/controllers/Auth')
const ProductController = require('../app/controllers/Products')
const auth = require('../config/authenticate')

Router.route('/').get(WelcomeController.index)
Router.route('/user').get(auth(), UserController.index)
Router.route('/user/:id/products').get(auth(), UserController.getUserProducts)
Router.route('/register').post(AuthController.register)
Router.route('/login').post(AuthController.login)
Router.route('/products').get(ProductController.index)

module.exports = Router
