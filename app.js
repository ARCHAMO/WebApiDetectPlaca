'use strict'

let express = require('express');
let bodyParser = require('body-parser');

let app = express();

// Cargamos las rutas
let userRouters = require('./routes/UserRouters');
let customerRouters = require('./routes/CustomerRouters');
let vehicleRouters = require('./routes/VehicleRouters');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuramos las cabeceras http
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-auth-token'); // HERE
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });

// Rutas base
app.use('/api', userRouters);
app.use('/api', customerRouters);
app.use('/api', vehicleRouters);

module.exports = app;


