const {Schema,model}= require('mongoose')

const productSchema = new Schema({
  image: String,
  name: String,
  description: String,
  price: String,
  qty: {
    type: Number,
    default: 1
  }
})

module.exports= model( 'Product', productSchema)
