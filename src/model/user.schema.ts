import { Schema, model } from 'mongoose'

const UserSchema = new Schema(
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
        email: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        image: String,
        rol: String,
        identification: {
            type: String,
            unique: true,
            required: true
        },
        // TODO: Agregar la relacion a que cliente pertenece
        // customerId: {
        //     type: Schema.Types.ObjectId,
        //     ref: 'Customer',
        //     required: true
        // },
    },
    {
        timestamps: true
    }
);

const UserModel = model('User', UserSchema);

export default UserModel;