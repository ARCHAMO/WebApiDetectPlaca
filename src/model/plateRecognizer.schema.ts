'use strict';

import mongoose, { Schema, model } from 'mongoose'

const PlateRecognizerSchema = new Schema(
    {
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
        fileNameClient: {
            type: String
        },
        datePlateImage: {
            type: Date
        },
        timestamp: {
            type: Date
        },
    },
    {
        timestamps: true
    }
);

const PlateRecognizerModel = model('PlateRecognizers', PlateRecognizerSchema);

export default PlateRecognizerModel;