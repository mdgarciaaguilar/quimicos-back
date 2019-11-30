//const validator = require('validator')
const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  hazards: {
    type: String
  },
  eyeContact: {
    type: String
  },
  skinContact: {
    type: String
  },
  seriousSkinContact: {
    type: String
  },
  inhalation: {
    type: String
  },
  seriousInhalation: {
    type: String
  },
  ingestion: {
    type: String
  },
  seriousIngestion: {
    type: String
  }
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product
