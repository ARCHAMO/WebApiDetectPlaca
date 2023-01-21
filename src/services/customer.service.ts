import CustomerModel from '../model/customer.schema';
import { ICustomer } from '../interface/customer.interface';

/**
 * 
 * @param customer 
 * @returns 
 */
const customerCreateService = async (customer: ICustomer) => {
    const response = await CustomerModel.create(customer);
    return response;
}

/**
 * 
 * @param params 
 * @returns 
 */
const customerFindByAllService = async (params: any) => {
    const response = await CustomerModel.find(params);
    return response;
}

/**
 * 
 * @param id 
 * @returns 
 */
const customerFindByIdService = async (id: string) => {
    const response = await CustomerModel.findById(id);
    return response;
}


export { customerCreateService, customerFindByAllService, customerFindByIdService }