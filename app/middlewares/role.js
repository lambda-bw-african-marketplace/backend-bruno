function checkRole() {
  return (req, res, next) => {
    if (req.token && req.token.isAdmin) {
      next()
    } else {
      res.status(401).json({
        error:
          "Owner's access only. You do not have permission to remove this product.",
      })
    }
  }
}

module.exports = checkRole
