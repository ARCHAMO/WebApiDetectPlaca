'use strict';

import bcrypt from 'bcrypt';

/**
 * 
 * @param textPlain 
 * @returns 
 */
const encrypt = async (textPlain: string) => { 
    const hash = await bcrypt.hash(textPlain, 10)
    return hash
}

/**
 * 
 * @param passwordPlain 
 * @param hashPassword 
 * @returns 
 */
const compare = async (passwordPlain: string, hashPassword: string) => {
    return await bcrypt.compare(passwordPlain, hashPassword)
}

export { encrypt, compare }