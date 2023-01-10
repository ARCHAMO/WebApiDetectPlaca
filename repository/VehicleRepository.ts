'use strict';

function create(vehicle) {
    // Se realizan todas las validaciones necesarias
    vehicle.save((err, result) => {
        if (err) {
            return {
                status: false,
                message: 'Error al guardar el vehiculo. ' 
            };
        } else {
            if (!result) {
                return {
                    status: false,
                    message: 'No se ha registrado el vehiculo' 
                };
            } else {
                return {
                    status: false,
                    message: 'Placa registrada correctamente'
                };
            }
        }
    });
}

module.exports = {
    create,
};