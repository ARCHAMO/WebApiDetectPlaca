'use strict';

import VehicleModel from '../model/vehicle.schema';
import PlateRecognizerModel from '../model/plateRecognizer.schema';
import { IObjParam } from '../interface/objParam.interface';

/**
 * Realiza el conteo de las lecturas realizadas
 * @returns Retorna la cantidad de lecturas realizadas hasta la fecha actual
 */
const totalReadingsService = async (params: IObjParam) => {
    const response = await PlateRecognizerModel.find().count();
    return response;
}

const effectivePlatesService = async (params: IObjParam) => {
    const response = await VehicleModel.find().count();

    return response;
}

const totalInfractionVehicleService = async (params: IObjParam) => {
    const response = await VehicleModel.aggregate([
        {
            $group: {
                _id: null,
                total: { $sum: "$valueOfTheFine" }
            }
        }
    ]);
    return response[0].total;
}

const totalReadingsForMonthService = async (params: IObjParam) => {
    const response = await PlateRecognizerModel.aggregate([
        {
            $group: {
                _id: {
                    mes: { $month: '$datePlateImage' },
                    anio: { $year: '$datePlateImage' },
                },
                total: { $sum: 1 }
            }
        }
    ]);
    return response;
}

const effectivePlatesForMonthService = async (params: IObjParam) => {
    const response = await VehicleModel.aggregate([
        {
            $group: {
                _id: {
                    mes: { $month: '$datePlateImage' },
                    anio: { $year: '$datePlateImage' },
                    typeInfraction: '$typeInfraction'
                },
                total: { $sum: 1 }
            }
        },
        { $sort: { '_id.typeInfraction': 1, '_id.anio': 1, '_id.mes': 1 } }
    ]);
    return response;
}

const totalInfractionForMonthService = async (params: IObjParam) => {
    const response = await VehicleModel.aggregate([
        {
            $group: {
                _id: {
                    mes: { $month: '$datePlateImage' },
                    anio: { $year: '$datePlateImage' },
                    typeInfraction: '$typeInfraction'
                },
                total: { $sum: "$valueOfTheFine" }
            }
        },
        { $sort: { '_id.typeInfraction': 1, '_id.anio': 1, '_id.mes': 1 } }
    ]);
    return response;
}

export {
    totalReadingsService,
    effectivePlatesService,
    totalInfractionVehicleService,
    totalReadingsForMonthService,
    effectivePlatesForMonthService,
    totalInfractionForMonthService
}