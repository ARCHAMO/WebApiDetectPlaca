import UserModel from '../model/user.schema';
import { IUser } from '../interface/user.interface';
import { ILoginUser } from '../interface/loginUser.interface';

/**
 * 
 * @param user 
 * @returns 
 */
const userCreateService = async (user: IUser) => {
    const response = await UserModel.create(user);
    return response;
}

/**
 * 
 * @param params 
 * @returns 
 */
const userFindByAllService = async (params: any) => {
    const response = await UserModel.find(params);
    return response;
}

/**
 * 
 * @param id 
 * @returns 
 */
const userFindByIdService = async (id: string) => {
    const response = await UserModel.findById(id);
    return response;
}

const userLoginService = async (params: ILoginUser) => {
    const response = await UserModel.findOne({ email: params.email.toLowerCase() });
    return response;
}


export { userCreateService, userFindByAllService, userFindByIdService, userLoginService }