import express from 'express'
import productRoute from './productRoutes.js'

let router = express.Router()

router.get('/', (req, res) => {
  res.json({
    message: 'API Testing Routes'
  })
})

router.use('/products', productRoute)

export default router
