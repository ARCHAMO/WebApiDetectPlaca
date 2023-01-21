import { Response, Request } from 'express'
import { plateCreateService, plateFindByAllService, plateFindByIdService } from '../services/platerecognizer.service'

/**
 * 
 * @param req 
 * @param res 
 */
const plateCreateController = async (req: Request, res: Response) => {
    const { body } = req;
    const response = await plateCreateService(JSON.parse(body.dataStr));
    res.send({ data: response })
}

/**
 * 
 * @param req 
 * @param res 
 */
const plateFindByIdController = async (req: Request, res: Response) => {
    const { params } = req;
    const id = params.id;
    const response = await plateFindByIdService(id);
    res.send({ data: response })
}

/**
 * 
 * @param req 
 * @param res 
 */
const plateFindByAllController = async (req: Request, res: Response) => {
    const { body } = req;
    const response = await plateFindByAllService(body);
    res.send({ data: response })
}

export { plateCreateController, plateFindByIdController, plateFindByAllController }