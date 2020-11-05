const notFound = (req, res, next) => {
  res.status(404)
  const err = new Error(`Not Found - ${req.originalUrl}`)
  next(err)
}

const errHandler = (err, req, res, next) => {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500
  res.status(statusCode)
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? 'pro' : err.stack
  })
}

module.exports = { notFound, errHandler }
