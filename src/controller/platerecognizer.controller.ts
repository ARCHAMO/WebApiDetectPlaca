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
    if(response !== null) {
        res.send({ data: response, status: true, message: 'Lectura guadada correctamente' })
    } else {
        res.send({ data: response, status: false, message: 'No se encontraron datos' })
    }
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
    if(response !== null) {
        res.send({ data: response, status: true, message: '' })
    } else {
        res.send({ data: response, status: false, message: 'No se encontraron datos' })
    }
}

/**
 * 
 * @param req 
 * @param res 
 */
const plateFindByAllController = async (req: Request, res: Response) => {
    const { body } = req;
    const response = await plateFindByAllService(body);
    if(response !== null) {
        res.send({ data: response, status: true, message: '' })
    } else {
        res.send({ data: response, status: false, message: 'No se encontraron datos' })
    }
}

export { plateCreateController, plateFindByIdController, plateFindByAllController }