class Welcome {
  async index(req, res) {
    res.send('working')
  }
}

module.exports = new Welcome()
