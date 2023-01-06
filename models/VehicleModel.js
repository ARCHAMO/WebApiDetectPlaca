'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let mongoosePaginate = require('mongoose-paginate-v2');

let VehicleSchema = Schema({
    placa: {
        type: String,
        required: true,
        unique: true
    },
},
    {
        timestamps: {
            createdAt: 'creationDate',
            updatedAt: 'modificationDate'
        }
    }
);

VehicleSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Vehicle', VehicleSchema);