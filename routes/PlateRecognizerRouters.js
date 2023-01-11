'use strict'

let express = require('express');
let PlateController = require('../controllers/PlateRecognizerController')
let api = express.Router();
let multipart = require('connect-multiparty');

// Rutas para el controlador de usuarios
api.post('/plate-recognizer', PlateController.create);

module.exports = api;