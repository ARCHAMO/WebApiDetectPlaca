import { Schema, model } from 'mongoose'

const VehicleSchema = new Schema(
    {
        plate: {
            type: String
        },
        codeRegion: {
            type: String
        },
        score: {
            type: Number
        },
        type: {
            type: String
        },
    },
    {
        timestamps: true
    }
);

const VehicleModel = model('Vehicles', VehicleSchema);

export default VehicleModel;