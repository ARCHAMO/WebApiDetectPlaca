import { userCreateService, userFindByAllService, userFindByIdService, userLoginService } from '../services/user.service'
import { Response, Request } from 'express'
import { ILoginUser } from '../interface/loginUser.interface';
import jwt from 'jsonwebtoken';
import { IUser } from '../interface/user.interface';
import { encrypt } from '../helpers/handleBcrypt.helper'

/**
 * 
 * @param req 
 * @param res 
 */
const userCreateController = async (req: Request, res: Response) => {
    const { body } = req;

    const passwordHash = await encrypt(body.password)

    const user: IUser = {
        firstName: body.firstName,
        secondName: body.secondName,
        firstLastName: body.firstLastName,
        secondLastName: body.secondLastName,
        fullName: body.fullName,
        email: body.email,
        password: passwordHash,
        image: body.image,
        rol: body.rol,
        identification: body.identification,
        customerId: body.customerId,
    }
    const response = await userCreateService(user);
    res.send({ data: response })
}

/**
 * 
 * @param req 
 * @param res 
 */
const userFindByIdController = async (req: Request, res: Response) => {
    const { params } = req;
    const id = params.id;
    const response = await userFindByIdService(id);
    res.send({ data: response })
}

/**
 * 
 * @param req 
 * @param res 
 */
const userFindByAllController = async (req: Request, res: Response) => {
    const { body } = req;
    const response = await userFindByAllService(body);
    res.send({ data: response })
}

const userLoginController = async (req: Request, res: Response) => {
    const { body } = req;

    const loginUser: ILoginUser = {
        email: body.email,
        password: body.password,
        gethash: body.gethash
    }

    const response = await userLoginService(loginUser);

    // Aplicamos logica pero esta no debe estar en esta capa
    if (response === null) {
        res.status(200).send({ data: response, message: 'Usuario no existe' })
    } else {
        const token = jwt.sign({ response }, process.env.TOKEN_SECRETKEY);
        res.header('auth-token', token).status(200).send({
            status: true,
            data: response
        });

        // bcrypt.compare(loginUser.password, response.password, function (err, check) {
        //     console.log(check);

        //     if (check) {
        //         res.status(200).send({
        //             status: true,
        //             data: response,
        //             token: jwt.sign({ response }, process.env.TOKEN_SECRETKEY)
        //         });
        //     } else {
        //         res.status(200).send({
        //             status: false,
        //             message: 'Usuario y/o contraseña incorrecta..'
        //         });
        //     }
        // });
    }

}

export { userCreateController, userFindByIdController, userFindByAllController, userLoginController }