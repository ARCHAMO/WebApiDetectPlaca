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
    if(response !== null) {
        res.send({ data: response, status: true, message: 'Vehiculo creado correctamente' })
    } else {
        res.send({ data: response, status: false, message: 'No se encontraron datos' })
    }
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
const vehicleFindByAllController = async (req: Request, res: Response) => {
    const { body } = req;
    const response = await vehicleFindByAllService(body);
    if(response !== null) {
        res.send({ data: response, status: true, message: '' })
    } else {
        res.send({ data: response, status: false, message: 'No se encontraron datos' })
    }
}

export { vehicleCreateController, vehicleFindByIdController, vehicleFindByAllController }