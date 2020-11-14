const LocationModel = require('../models/LocationModel')

class Location {
  async index(req, res) {
    try {
      const location = await LocationModel.all()
      res.status(200).json(location)
    } catch (error) {}
  }
  async city(req, res) {
    const {city} = req.params

    try {
      const location = await LocationModel.city(city.toLowerCase())
      res.status(200).json(location)
    } catch (error) {}
  }
}

module.exports = new Location()
