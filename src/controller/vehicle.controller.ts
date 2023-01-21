import { vehicleCreateService, vehicleFindByAllService, vehicleFindByIdService } from '../services/vehicle.service'
import { Response, Request } from 'express'

/**
 * 
 * @param req 
 * @param res 
 */
const vehicleCreateController = async (req: Request, res: Response) => {
    const { body } = req;
    const response = await vehicleCreateService(body);
    res.send({ data: response })
}

/**
 * 
 * @param req 
 * @param res 
 */
 const vehicleFindByIdController = async (req: Request, res: Response) => {
    const { params } = req;
    const id = params.id;
    const response = await vehicleFindByIdService(id);
    res.send({ data: response })
}

/**
 * 
 * @param req 
 * @param res 
 */
const vehicleFindByAllController = async (req: Request, res: Response) => {
    const { body } = req;
    const response = await vehicleFindByAllService(body);
    res.send({ data: response })
}

export { vehicleCreateController, vehicleFindByIdController, vehicleFindByAllController }