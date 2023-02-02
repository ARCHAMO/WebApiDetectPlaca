'use strict';

import { Router } from "express";
import { plateCreateController, plateExecScriptPythonController, plateFindByAllController, plateFindByIdController } from "../controller/platerecognizer.controller";

const route = Router()

route.post('/plateRecognizer', plateCreateController)
route.get('/plateRecognizers', plateFindByAllController)
route.get('/plateRecognizer/:id', plateFindByIdController)
route.post('/plateRecognizerExecSlope', plateExecScriptPythonController)

export default route