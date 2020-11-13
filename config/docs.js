const swaggerJsDoc = require('swagger-jsdoc')

const PORT = process.env.PORT || 5000
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: '1.0.1',
      title: 'Customer API',
      description: 'Customer API Information',
      contact: {
        name: 'Amazing Developer',
      },
      servers: ['http://localhost:5000/api'],
    },
    securityDefinitions: {
      //   basicAuth: {
      //     type: 'basic',
      //     description: 'HTTP Basic Authentication. Works over `HTTP` and `HTTPS`',
      //   },
      Bearer: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
      },
    },
  },

  apis: ['./config/routes.js'],
  authAction: {
    JWT: {
      name: 'JWT',
      schema: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
        description: '',
      },
      value: 'Bearer <JWT>',
    },
  },
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)

module.exports = swaggerDocs
