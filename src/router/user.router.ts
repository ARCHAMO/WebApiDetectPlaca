import { Router } from "express";
import { userCreateController, userFindByAllController, userFindByIdController, userLoginController } from "../controller/user.controller";

const route = Router()

route.post('/user', userCreateController)
route.get('/users', userFindByAllController)
route.get('/user/:id', userFindByIdController)

route.post('/user/login', userLoginController)

export default route