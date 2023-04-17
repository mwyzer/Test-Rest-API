import { Router, Request, Response, NextFunction } from 'express'
import { logger } from '../utils/logger'

export const StatusRouter: Router = Router()

StatusRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  logger.info('Status check success')
  res.status(200).send({ status: '200' })
})
