'use strict';

let fs = require('fs');
let VehicleModel = require('../models/VehicleModel');
let Global = require('../shared/global');

const fetch = require("node-fetch");
const FormData = require("form-data");

function create(req, res) {
    let vehicle = new VehicleModel();
    let params = req.body;

    vehicle.placa = params.placa;

    // Se realizan todas las validaciones necesarias
    vehicle.save((err, result) => {
        if (err) {
            res.status(500).send({
                message: 'Error al guardar el vehiculo. ',
                errors: err.errors
            });
        } else {
            if (!result) {
                res.status(200).send({
                    status: false,
                    message: 'No se ha registrado el vehiculo'
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

function update(req, res) {
    let id = req.params.id;
    let updateParams = req.body;

    VehicleModel.findByIdAndUpdate(id, updateParams, (err, result) => {
        if (err) {
            res.status(500).send({
                message: 'Error al actualizar el vehiculo'
            });
        } else {
            if (!result) {
                res.status(200).send({
                    status: false,
                    message: 'No se ha podido actualizar el vehiculo'
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

    VehicleModel.paginate({}, options, (error, result) => {
        if (error) {
            res.status(500).send({ message: 'Error en la peticion' + error });
        } else {
            if (!result) {
                res.status(404).send({ message: 'No hay clientes registrados' });
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

    VehicleModel.findById(id, (error, result) => {
        if (error) {
            res.status(500).send({ message: 'Error en la peticion.' });
        } else {
            if (!result) {
                res.status(404).send({ message: 'el vehiculo no existe.' });
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

    VehicleModel.findByIdAndRemove(id, function (error, result) {
        if (error) {
            res.status(500).send({
                status: false,
                message: 'Error eliminando el vehiculo.'
            });
        } else {
            if (!result) {
                res.status(200).send({
                    status: false,
                    message: 'el vehiculo no existe.'
                });
            } else {
                res.status(200).send({
                    status: true
                });
            }
        }
    });
}

function uploadImagen(req, res) {
    let userId = req.params.id;
    let fileName = 'No subido';

    if (req.files) {
        let filePath = req.files.image.path;
        let fileSplit = filePath.split('\\');
        let fileName = fileSplit[2];

        let extSplit = fileName.split('\.');
        let fileExt = extSplit[1];
        console.log(fileExt.lowercase);

        if (fileExt.toLowerCase() == 'png' || fileExt.toLowerCase() == 'jpg' || fileExt.toLowerCase() == 'gif') {
            UserModel.findByIdAndUpdate(userId, { image: fileName }, (err, result) => {
                if (!result) {
                    res.status(404).send({
                        message: 'No se ha podido actualizar el usuario'
                    });
                } else {
                    res.status(200).send({
                        user: result,
                        image: fileName
                    });
                }
            });
        } else {
            res.status(200).send({ message: 'Extension de archivo no valida.' })
        }
    } else {
        res.status(200).send({
            message: 'No has subido ninguna imagen.'
        });
    }
}

function getImagen(req, res) {
    let imageFile = req.params.imageFile;
    let pathFile = './uploads/users/' + imageFile;
    fs.exists(pathFile, function (exists) {
        if (exists) {
            res.sendFile(path.resolve(pathFile));
        } else {
            res.status(200).send({ message: 'No existe imagen con ese nombre...' })
        }
    })
}

function processImagePlaca(req, res) {
    let image_path = "shared/img/pendientes/placa1.jpg";
    let body = new FormData();
    body.append("upload", fs.createReadStream(image_path));
    // body.append('upload', base64Image);
    body.append("regions", "us-ca"); // Change to your country
    fetch("https://api.platerecognizer.com/v1/plate-reader/", {
        method: "POST",
        headers: {
            Authorization: "Token 7bcc2f42a102a0d528f2774125517cfe1fa3487f",
        },
        body: body,
    })
        .then((res1) => {
            res.status(200).send(res1.json());
        })
        .then((json) => {
            res.status(200).send(json);
        })
        .catch((err) => {
            res.status(200).send(err);
            console.log(err);
        });
}


module.exports = {
    create,
    update,
    findByAll,
    findById,
    destroy,
    uploadImagen,
    getImagen,
    processImagePlaca
};