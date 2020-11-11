const express = require('express')
const Router = express.Router()

const UserController = require('../app/controllers/Users')
const WelcomeController = require('../app/controllers/Welcome')
const AuthController = require('../app/controllers/Auth')

Router.route('/').get(WelcomeController.index)
Router.route('/users').get(UserController.index)
Router.route('/register').post(AuthController.register)
Router.route('/login').post(AuthController.login)

module.exports = Router
