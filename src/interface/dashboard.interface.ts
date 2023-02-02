'use strict';

/**
 * 
 */
export interface IDashboard {
    totalReadings: Number,
    effectivePlates: Number,
    totalInfraction: Number,
    totalReadingsForMonth: IObjectSeriesNumber[],
    effectivePlatesForMonth: IObjectSeriesNumber[],
    totalInfractionForMonth: IObjectSeriesNumber[],
}

/**
 * 
 */
export interface IObjectSeriesNumber {
    key: Number,
    value: Number
}

/**
 * 
 */
export interface IObjectSeriesString {
    key: String,
    value: String
}

/**
 * 
 */
export interface IObjectSeriesAny {
    key: any,
    value: any
}
