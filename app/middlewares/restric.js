const restrict = (id) => {
  return (req, res, next) => {
    if (req.token.id === id) {
      next()
    } else {
      res.status(401).json({
        messse: 'You do not have sufficient privileges.',
      })
    }
  }
}

module.exports = restrict
