'use strict';

export interface IVehicle {
    plate: String,
    codeRegion: String,
    score: Number,
    type: String,
    fullName: String,
    identification: String,
    infraction: String,
    addressInfraction: String,
    addressCustomer: String,
    typeInfraction: String,
    evidenceDate: Date,
    soatExpirationDate: Date,
    city: String,
    appearanceNumber: String,
    valueOfTheFine: Number,
    plateRecognizerId: String,
    datePlateImage: Date

}