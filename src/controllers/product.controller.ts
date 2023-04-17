import { Request, Response } from 'express'
import { createProductValidation } from '../validations/product.validation'
import { logger } from '../utils/logger'

export const createProduct = (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { error, value } = createProductValidation(req.body)
  if (error) {
    logger.error('ERR = product - create = ', error.details[0].message)
    return res.status(422).send({ status: false, statusCode: 422, message: error.details[0].message, data: {} })
  }
  logger.info('Success add new product')
  return res.status(200).send({ status: true, statusCode: 200, message: 'Add product success', data: req.body })
}
