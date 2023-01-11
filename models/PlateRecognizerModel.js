'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let mongoosePaginate = require('mongoose-paginate-v2');

let PlateRecognizerSchema = Schema({
    processing_time: {
        type: Number
    },
    results: {
        type: [
            "Mixed"
        ]
    },
    filename: {
        type: String
    },
    version: {
        type: Number
    },
    camera_id: {
        type: "Mixed"
    },
    timestamp: {
        type: Date
    }
},
    {
        timestamps: {
            createdAt: 'creationDate',
            updatedAt: 'modificationDate'
        }
    }
);

PlateRecognizerSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('PlateRecognizers', PlateRecognizerSchema);