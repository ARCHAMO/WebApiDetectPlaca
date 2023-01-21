import { IUser } from '../interface/user.interface';
import jwt from 'jsonwebtoken';


const tokenSign = async (user: IUser) => {
    const secretToken = process.env.TOKEN_SECRETKEY || 'testSecret';
    return jwt.sign(
        {
            fullName: user.fullName,
            image: user.image,
            rol: user.rol,
            identification: user.identification    
        },
        secretToken,
        {
            expiresIn: '2h'
        }
    )
}

const verifyToken = async (token: string) => {
    const secretToken = process.env.TOKEN_SECRETKEY || 'testSecret';
    try {
        return jwt.verify(token, secretToken)
    } catch (e) {
        return null
    }
}

const decodeSign = (token) => { //TODO: Verificar que el token sea valido y correcto
    return jwt.decode(token, {})
}

export { tokenSign, verifyToken, decodeSign }