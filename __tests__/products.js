const request = require('supertest')
const db = require('../config/dbConfig')
const server = require('../api/server')

afterAll(async () => {
  return await db.destroy()
})

let token = ''
let lastProduct = ''
let lastProductId = ''
beforeAll((done) => {
  request(server)
    .post('/api/login')
    .send({
      email: 'brunopaula@dryserv.com',
      password: 'test123',
    })

    .end((err, response) => {
      token = response.body.token // save the token!

      done()
    })
})

describe('Test Products EndPoints', () => {
  test('should not show product list without a Authentication Token', async () => {
    const res = await request(server).get('/api/products')
    expect(res.statusCode).toBe(401)
  })

  test('should return a product list', async () => {
    const res = await request(server)
      .get('/api/products')
      .set('authorization', token)

    expect(res.statusCode).toBe(200)
    expect(res.type).toBe('application/json')
  })

  test('should return only one product by id', async () => {
    const res = await request(server)
      .get(`/api/products/5`)
      .set('authorization', token)

    expect(res.statusCode).toBe(200)
    expect(res.body.name).toBe('Rice')
  })

  test('should add a new product', async () => {
    const newProduct = {
      name: 'Test Price',
      price: 9.99,
      city: 'Orlando',
      category: 'Grains',
      description: 'Long Grains Jasmine Rice',
      unit: 'Pounds',
      image_url: '',
      user_id: 1,
    }

    const res = await request(server)
      .post('/api/products')
      .set('authorization', token)
      .set('Content-Type', 'application/json')
      .send(newProduct)
    expect(res.statusCode).toBe(201)
  })
})
