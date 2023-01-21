import PlateRecognizerModel from '../model/plateRecognizer.schema';
import { IPlateRecognizer } from '../interface/platerecognizer.interface';
import VehicleModel from '../model/vehicle.schema';

/**
 * Crear el objeto de placa reconocida
 * @param plate 
 * @returns 
 */
const plateCreateService = async (plate: IPlateRecognizer) => {
    const response = await PlateRecognizerModel.create(plate);
    await sendVehicles(response.results);
    return response;
}

/**
 * 
 * @param params 
 * @returns 
 */
const plateFindByAllService = async (params: any) => {
    const response = await PlateRecognizerModel.find(params);
    return response;
}

/**
 * 
 * @param id 
 * @returns 
 */
const plateFindByIdService = async (id: string) => {
    const response = await PlateRecognizerModel.findById(id);
    return response;
}

/**
 * 
 * @param results Guarda los resultados de las placas detectadas en la lextura de la imagen.
 */
async function sendVehicles(results) {
    for (let index = 0; index < results.length; index++) {
        const element = results[index];
        let vehicle = new VehicleModel();
        vehicle.plate = element.plate;
        vehicle.codeRegion = element.region.code;
        vehicle.score = element.score;
        vehicle.type = element.vehicle.type;
        const response = await VehicleModel.create(vehicle);
    }
}

export { plateCreateService, plateFindByAllService, plateFindByIdService }