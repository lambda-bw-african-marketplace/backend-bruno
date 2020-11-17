const knex = require('knex')

const knexConfig = require('../knexfile.js')

const environment = process.env.NODE_ENV || 'development'
console.log('running on', process.env.NODE_ENV)

module.exports = knex(knexConfig)
