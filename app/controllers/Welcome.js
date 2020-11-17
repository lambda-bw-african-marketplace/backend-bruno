class Welcome {
  async index(req, res) {
    res.json({message: 'working', enviroment: process.env.NODE_ENV})
  }
}

module.exports = new Welcome()
