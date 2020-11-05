const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')

require('dotenv').config()

const middlewares = require('./middlewares')
const api = require('./api')

const app = express()

app.use(helmet())
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())

app.get('/', (req, res, next) => {
  res.json({
    message: 'hello world'
  })
})

app.use('/api', api)

app.use(middlewares.notFound)
app.use(middlewares.errHandler)

module.exports = app
