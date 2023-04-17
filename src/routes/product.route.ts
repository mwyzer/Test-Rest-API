import { Router, Request, Response, NextFunction } from 'express'
import { logger } from '../utils/logger'
import { createProduct } from '../controllers/product.controller'

export const ProductRouter: Router = Router()

ProductRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  logger.info('Success get product data')
  return res.status(200).send({
    Status: true,
    statusCode: 200,
    data: [{ name: 'Sepatu', price: 5000 }]
  })
})

ProductRouter.post('/', createProduct)
