const supertest = require('supertest')
const app = require('../api/server')

test('It should response the GET method', async () => {
  const res = await supertest(app).get('/api')
  expect(res.statusCode).toBe(200)
})
