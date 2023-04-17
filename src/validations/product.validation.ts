import Joi from 'joi'

interface ProductInterface {
  name: string
  price: number
}

export const createProductValidation = (payload: ProductInterface) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  const schema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().allow('', null)
  })
  return schema.validate(payload)
}
