'use strict'

let express = require('express');
let VehicleController = require('../controllers/VehiclesController')
let api = express.Router();
let md_auth = require('../middlewares/authenticated');
let multipart = require('connect-multiparty');
let md_upload = multipart({uploadDir: './uploads/users'});

// Rutas para el controlador de usuarios
api.post('/vehicle', md_auth.ensureAuth, VehicleController.create);
api.post('/vehicle/upload-placa/:id', [md_auth.ensureAuth, md_upload], VehicleController.uploadImagen);
api.post('/vehicle/process-image-placa', VehicleController.processImagePlaca);

api.put('/vehicle/update/:id', md_auth.ensureAuth, VehicleController.update);

api.get('/vehicles/:page?', md_auth.ensureAuth, VehicleController.findByAll);
api.get('/vehicle/:id', md_auth.ensureAuth, VehicleController.findById);

api.delete('/vehicle/:id', md_auth.ensureAuth, VehicleController.destroy);

module.exports = api;