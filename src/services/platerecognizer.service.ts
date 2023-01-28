import PlateRecognizerModel from '../model/plateRecognizer.schema';
import { IPlateRecognizer } from '../interface/platerecognizer.interface';
import { faker } from '@faker-js/faker/locale/es_MX';
import { vehicleCreateService } from './vehicle.service';
import { IVehicle } from '../interface/vehicle.interface';
import { exec } from 'child_process';

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
        const typeInfraction = faker.helpers.arrayElement(['SOAT', 'TECNICOMECANICA']);
        const vehicle: IVehicle = {
            plate: element.plate,
            codeRegion: element.region.code,
            score: element.score,
            type: element.vehicle.type,
            // TODO: Informacion faker esto debe definirse de donde se va a sacar
            fullName: faker.name.fullName(),
            identification: faker.datatype.uuid(),
            infraction: faker.helpers.arrayElement(['C35', 'D02']),
            addressInfraction: faker.address.streetAddress(true),
            addressCustomer: faker.address.streetAddress(true),
            typeInfraction,
            evidenceDate: faker.date.past(),
            soatExpirationDate: typeInfraction === 'SOAT' ? faker.date.past() : faker.date.future(),
            city: faker.address.country(),
            appearanceNumber: faker.random.numeric(25),
            valueOfTheFine: Number(faker.random.numeric(8))
        }
        const response = await vehicleCreateService(vehicle);
    }
}

/**
 * 
 */
async function plateExecScriptPythonService() {
    const execCommand = process.env.COMMAND_PYTHON_PLATE_SLOPE;
    console.log(execCommand);
    
    exec(execCommand, (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(stdout);
    });
}

export { plateCreateService, plateFindByAllService, plateFindByIdService, plateExecScriptPythonService }