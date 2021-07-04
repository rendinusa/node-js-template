import express from 'express'
import { getProducts, addNewProduct, getProduct,
         updateProduct, deleteProduct } from '../controllers/productsController.js'

const router = express.Router();

router.get('/', getProducts)
router.post('/', addNewProduct)
router.get('/:id', getProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)

const productRoute = router

export default productRoute
