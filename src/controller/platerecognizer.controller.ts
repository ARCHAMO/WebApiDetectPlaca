'use strict';

import { Response, Request } from 'express'
import { plateCreateService, plateExecScriptPythonService, plateFindByAllService, plateFindByIdService } from '../services/platerecognizer.service'
import { stringToDateHelper } from "../helpers/date.helper";

/**
 * 
 * @param req 
 * @param res 
 */
const plateCreateController = async (req: Request, res: Response) => {
    const { body } = req;
    const bodyFull = JSON.parse(body.dataStr);
    bodyFull.fileNameClient = body.fileNameClient;
    bodyFull.datePlateImage = await stringToDateHelper(bodyFull.fileNameClient);
    const response = await plateCreateService(bodyFull);
    if (response !== null) {
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
    if (response !== null) {
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
    if (response !== null) {
        res.send({ data: response, status: true, message: '' })
    } else {
        res.send({ data: response, status: false, message: 'No se encontraron datos' })
    }
}

const plateExecScriptPythonController = async (req: Request, res: Response) => {
    const response = await plateExecScriptPythonService();
    res.send({ data: response, status: true, message: '' })
}

export { plateCreateController, plateFindByIdController, plateFindByAllController, plateExecScriptPythonController }
