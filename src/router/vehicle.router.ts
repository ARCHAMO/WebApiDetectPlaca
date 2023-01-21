import { Router } from "express";
import { vehicleCreateController, vehicleFindByAllController, vehicleFindByIdController } from "../controller/vehicle.controller";

const route = Router()

route.post('/vehicle', vehicleCreateController)
route.get('/vehicles', vehicleFindByAllController)
route.get('/vehicle/:id', vehicleFindByIdController)

export default route