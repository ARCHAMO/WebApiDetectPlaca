import { customerCreateService, customerFindByAllService, customerFindByIdService } from '../services/customer.service'
import { Response, Request } from 'express'

/**
 * 
 * @param req 
 * @param res 
 */
const customerCreateController = async (req: Request, res: Response) => {
    const { body } = req;
    const response = await customerCreateService(body);
    res.send({ data: response })
}

/**
 * 
 * @param req 
 * @param res 
 */
 const customerFindByIdController = async (req: Request, res: Response) => {
    const { params } = req;
    const id = params.id;
    const response = await customerFindByIdService(id);
    res.send({ data: response })
}

/**
 * 
 * @param req 
 * @param res 
 */
const customerFindByAllController = async (req: Request, res: Response) => {
    const { body } = req;
    const response = await customerFindByAllService(body);
    res.send({ data: response })
}

export { customerCreateController, customerFindByIdController, customerFindByAllController }