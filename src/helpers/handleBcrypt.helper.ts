import bcrypt from 'bcrypt';

/**
 * 
 * @param textPlain 
 * @returns 
 */
const encrypt = async (textPlain) => { 
    const hash = await bcrypt.hash(textPlain, 10)
    return hash
}

/**
 * 
 * @param passwordPlain 
 * @param hashPassword 
 * @returns 
 */
const compare = async (passwordPlain, hashPassword) => {
    return await bcrypt.compare(passwordPlain, hashPassword)
}

export { encrypt, compare }