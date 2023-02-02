'use strict';

import { Response, Request } from 'express'
import { effectivePlatesForMonthService, effectivePlatesService, totalInfractionForMonthService, totalInfractionVehicleService, totalReadingsForMonthService, totalReadingsService } from '../services/dashboard.service';
import { IDashboard } from '../interface/dashboard.interface';

/**
 * 
 * @param req 
 * @param res 
 */
const dashboardDataController = async (req: Request, res: Response) => {
    const { body } = req;
    const totalReadings = await totalReadingsService(body);
    const effectivePlates = await effectivePlatesService(body);
    const totalInfraction = await totalInfractionVehicleService(body);

    const totalReadingsForMonth = await totalReadingsForMonthService(body);
    const effectivePlatesForMonth = await effectivePlatesForMonthService(body);
    const totalInfractionForMonth = await totalInfractionForMonthService(body);

    const dataDashBoard: IDashboard = {
        totalReadings,
        effectivePlates,
        totalInfraction,
        totalReadingsForMonth,
        totalInfractionForMonth,
        effectivePlatesForMonth
    }
    if (totalReadingsService !== null) {
        res.send({ data: dataDashBoard, status: true, message: '' })
    } else {
        res.send({ data: dataDashBoard, status: false, message: 'No se encontraron datos' })
    }
}

export {
    dashboardDataController
}