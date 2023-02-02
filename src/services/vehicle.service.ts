import VehicleModel from '../model/vehicle.schema';
import { IVehicle } from '../interface/vehicle.interface';

/**
 * Crear el objeto vehiculo
 * @param plate 
 * @returns 
 */
const vehicleCreateService = async (vehicle: IVehicle) => {
    const response = await VehicleModel.create(vehicle);
    return response;
}

/**
 * 
 * @param params 
 * @returns 
 */
 const vehicleFindByAllService = async (params: any) => {
    const response = await VehicleModel.find(params);
    return response;
}

/**
 * 
 * @param id 
 * @returns 
 */
const vehicleFindByIdService = async (id: string) => {
    const response = await VehicleModel.findById(id);
    return response;
}


export { vehicleCreateService, vehicleFindByAllService, vehicleFindByIdService }