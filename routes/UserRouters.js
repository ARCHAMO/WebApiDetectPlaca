'use strict'

let express = require('express');
let UserController = require('../controllers/UserController');
let api = express.Router();
let md_auth = require('../middlewares/authenticated');
let multipart = require('connect-multiparty');
let md_upload = multipart({uploadDir: './uploads/users'});

// Rutas para el controlador de usuarios
api.post('/user/login', UserController.login);
api.post('/user', md_auth.ensureAuth, UserController.create);
api.put('/user/update/:id', md_auth.ensureAuth, UserController.update);
api.post('/user/upload-image/:id', [md_auth.ensureAuth, md_upload], UserController.uploadImagen);
api.get('/user/get-image/:imageFile', UserController.getImagen);
api.get('/users/:page?', md_auth.ensureAuth, UserController.findByAll);
api.get('/user/:id', md_auth.ensureAuth, UserController.findById);
api.delete('/user/:id', md_auth.ensureAuth, UserController.destroy);

module.exports = api;