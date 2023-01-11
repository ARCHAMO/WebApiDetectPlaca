'use strict';

let PlateRecognizerModel = require('../models/PlateRecognizerModel');
let Global = require('../shared/global');
let VehicleRepo = require('../repository/VehicleRepository');
let VehicleModel = require('../models/VehicleModel');

function create(req, res) {
    let plate = new PlateRecognizerModel();
    let body = req.body;
    let params = JSON.parse(body.dataStr);

    plate.processing_time = params.processing_time;
    plate.results = params.results;
    plate.filename = params.filename;
    plate.version = params.version;
    plate.camera_id = params.camera_id;
    plate.timestamp = params.timestamp;

    // Se realizan todas las validaciones necesarias
    plate.save((err, result) => {
        if (err) {
            res.status(500).send({
                message: 'Error al guardar la lectura de placa. ' + err.message,
                errors: err.errors
            });
        } else {
            if (!result) {
                res.status(200).send({
                    status: false,
                    message: 'No se ha registrado la lectura de placa'
                });
            } else {
                // Llamamos para gurdar la informacion de las placas de los vehiculos detectados independienemente
                saveVehicles(params.results);

                // Rertornamos la respuesta al cliente
                res.status(200).send({
                    status: true,
                    data: result
                });
            }
        }
    });
}

function saveVehicles(results) {
    for (let index = 0; index < results.length; index++) {
        const element = results[index];
        let vehicle = new VehicleModel();
        vehicle.plate = element.plate;
        vehicle.codeRegion = element.region.code;
        vehicle.score = element.score;
        vehicle.type = element.vehicle.type;
        const response = VehicleRepo.create(vehicle);
    }
}

function update(req, res) {
    let id = req.params.id;
    let updateParams = req.body;

    PlateRecognizerModel.findByIdAndUpdate(id, updateParams, (err, result) => {
        if (err) {
            res.status(500).send({
                message: 'Error al actualizar la captura de la placa'
            });
        } else {
            if (!result) {
                res.status(200).send({
                    status: false,
                    message: 'No se ha podido actualizar la captura de la placa'
                });
            } else {
                res.status(200).send({
                    status: true,
                    data: result
                });
            }
        }
    });
}

function findByAll(req, res) {
    const options = {
        page: req.params.page ? req.params.page : 1,
        limit: req.params.limit ? req.params.page : Global.getLimit(),
        customLabels: Global.getCustomLabels(),
    };

    PlateRecognizerModel.paginate({}, options, (error, result) => {
        if (error) {
            res.status(500).send({ message: 'Error en la peticion' + error });
        } else {
            if (!result) {
                res.status(404).send({ message: 'No hay lecturas de placa registradas' });
            } else {
                return res.status(200).send({
                    status: true,
                    data: result.data,
                    paginator: result.paginator
                });
            }
        }
    });
}

function findById(req, res) {
    let id = req.params.id;

    PlateRecognizerModel.findById(id, (error, result) => {
        if (error) {
            res.status(500).send({ message: 'Error en la peticion.' });
        } else {
            if (!result) {
                res.status(404).send({ message: 'La captura de placa no existe.' });
            } else {
                res.status(500).send({
                    status: true,
                    data: result
                });
            }
        }
    });
}

function destroy(req, res) {
    let id = req.params.id;

    PlateRecognizerModel.findByIdAndRemove(id, function (error, result) {
        if (error) {
            res.status(500).send({
                status: false,
                message: 'Error eliminando la captura de la placa.'
            });
        } else {
            if (!result) {
                res.status(200).send({
                    status: false,
                    message: 'La captura de la placa no existe.'
                });
            } else {
                res.status(200).send({
                    status: true
                });
            }
        }
    });
}

module.exports = {
    create,
    update,
    findByAll,
    findById,
    destroy
};