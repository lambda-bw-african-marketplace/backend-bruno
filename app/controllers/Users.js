class Users {
  async index(req, res) {
    res.send('working')
  }
}

module.exports = new Users()
