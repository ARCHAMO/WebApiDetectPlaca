'use strict';

/**
 * 
 * @param dateString 
 * @returns 
 */
const stringToDateHelper = async (dateString: string) => {
    let anio = Number.parseInt(dateString.substring(0, 4));
    let mes = Number.parseInt(dateString.substring(4, 6));
    let dia = Number.parseInt(dateString.substring(6, 8));
    let hh = Number.parseInt(dateString.substring(9, 11));
    let mm = Number.parseInt(dateString.substring(11, 13));
    let ss = Number.parseInt(dateString.substring(13, 15));
    return new Date(anio, mes, dia, hh, mm, ss);
}

export { stringToDateHelper }