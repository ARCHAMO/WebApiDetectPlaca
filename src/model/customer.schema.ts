import { Schema, model } from 'mongoose'

const CustomerSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        secondName: String,
        firstLastName: {
            type: String,
            required: true
        },
        secondLastName: String,
        fullName: {
            type: String,
            required: true,
            unique: true
        },
        identification: {
            type: String,
            unique: true,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        location: String,
        state: String,
        lastPaymentDate: Date
    },
    {
        timestamps: true
    }
);

const CustomerModel = model('Customer', CustomerSchema);

export default CustomerModel;