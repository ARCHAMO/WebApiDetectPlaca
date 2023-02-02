'use strict';

import { Router } from "express";
import { dashboardDataController } from "../controller/dashboard.controller";

const route = Router()

route.get('/dashboardGeneralData', dashboardDataController)

export default route