import mongoose from 'mongoose'
import productSchema from '../models/product.js'

const Product = mongoose.model('Product', productSchema)
// create new products
export function addNewProduct(req, res) {
  let newProduct = new Product(req.body)
  newProduct.save((error, product) => {
    if (error) { res.json(error) }
    res.json(product)
  })
}

// get all product
export function getProducts(req, res) {
  Product.find({}, (error, products) => {
    if (error) { res.json(error) }
    res.json(products)
  })
}

// show one product
export function getProduct(req, res) {
  Product.findById(req.params.id, (error, product) => {
    if (error) { res.json(error) }
    res.json(product)
  })
}

// update product
export function updateProduct(req, res) {
  Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true },
    (error, product) => {
      if (error) { res.json(error) }
      res.json(product)
    })
}

// delete download
export function deleteProduct(req, res) {
  Product.deleteOne({ _id: req.params.id }, (error, product) => {
    if (error) { res.json(error) }
    res.json(product)
  })
}
