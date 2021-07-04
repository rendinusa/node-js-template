import mongoose from 'mongoose'

const Schema = mongoose.Schema

const productSchema = new Schema({
  productName: {
    type: String,
    required: 'Name is required.'
  },
  productCode: {
    type: String,
    required: 'Code is required.'
  }
})

export default productSchema;
