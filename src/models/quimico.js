//const validator = require('validator')
const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  hazards: {
    type: [String],
    default: undefined
  },
  firstAid:{
    type: [{
      style: {
        type: String
      },
      description: {
        type: String
      }
    }]
  }
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product
