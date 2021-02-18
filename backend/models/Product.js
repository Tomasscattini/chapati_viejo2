const {Schema,model}= require('mongoose')

const productSchema = new Schema({
  image: String,
  name: String,
  description: String,
  price: String,
})

module.exports= model( 'Product', productSchema)
