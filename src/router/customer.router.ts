import { Router } from "express";
import { customerCreateController, customerFindByAllController, customerFindByIdController } from "../controller/customer.controller";

const route = Router()

route.post('/customer', customerCreateController)
route.get('/customers', customerFindByAllController)
route.get('/customer/:id', customerFindByIdController)

export default route