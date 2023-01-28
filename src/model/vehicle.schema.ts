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
        fullName: {
            type: String
        },
        identification: {
            type: String
        },
        infraction: {
            type: String
        },
        addressInfraction: {
            type: String
        },
        addressCustomer: {
            type: String
        },
        typeInfraction: {
            type: String
        },
        evidenceDate: {
            type: Date
        },
        soatExpirationDate: {
            type: Date
        },
        city: {
            type: String
        },
        appearanceNumber: {
            type: String
        },
        valueOfTheFine: {
            type: Number
        }
    },
    {
        timestamps: true
    }
);

const VehicleModel = model('Vehicles', VehicleSchema);

export default VehicleModel;