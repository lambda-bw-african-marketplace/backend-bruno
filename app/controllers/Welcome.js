class Welcome {
  async index(req, res) {
    res.json({message: 'working'})
  }
}

module.exports = new Welcome()
