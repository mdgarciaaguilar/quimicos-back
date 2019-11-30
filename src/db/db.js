const mongoose = require('mongoose')

// revisa tu connectionURL aqui :-)
const connectionURL = process.env.URL || require('../config.js').connectionURL

mongoose.connect( connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})
