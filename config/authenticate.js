const jwt = require('jsonwebtoken')
const jwtKey = process.env.JWT_SECRET

const authenticate = () => {
  return (req, res, next) => {
    try {
      const token = req.headers.authorization
      if (!token)
        return res.status(401).json({
          error: 'Authorization Header is required',
        })
      jwt.verify(token, jwtKey, (err, decoded) => {
        if (err) return res.status(401).json(err)
        req.token = decoded
        next()
      })
    } catch (error) {
      console.log(error)
      next(error)
    }
  }
  next()
}

module.exports = authenticate
