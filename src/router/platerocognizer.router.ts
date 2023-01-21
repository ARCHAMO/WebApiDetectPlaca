import { Router } from "express";
import { plateCreateController, plateFindByAllController, plateFindByIdController } from "../controller/platerecognizer.controller";

const route = Router()

route.post('/plateRecognizer', plateCreateController)
route.get('/plateRecognizers', plateFindByAllController)
route.get('/plateRecognizer/:id', plateFindByIdController)

export default route