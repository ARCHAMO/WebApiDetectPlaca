import { Schema, model } from 'mongoose'

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
        timestamp: {
            type: Date
        }
    },
    {
        timestamps: true
    }
);

const PlateRecognizerModel = model('PlateRecognizers', PlateRecognizerSchema);

export default PlateRecognizerModel;