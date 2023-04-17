/* eslint-disable @typescript-eslint/no-unused-vars */
import { Application, Router } from 'express'
import { StatusRouter } from './status.route'
import { ProductRouter } from './product.route'

const _routes: Array<[string, Router]> = [
  ['/status', StatusRouter],
  ['/product', ProductRouter]
]

export const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [url, router] = route
    app.use(url, router)
  })
}
