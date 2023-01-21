import "dotenv/config";
import express from "express";
import cors from "express";
import dbInit from "./db/mongo";

// Definimos las rutas del WebApi
import plateRecognizerRoute from './router/platerocognizer.router';
import vehicleRoute from './router/vehicle.router';
import userRoute from './router/user.router';
import customerRoute from './router/customer.router';

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3001;

app.use(plateRecognizerRoute);
app.use(vehicleRoute);
app.use(userRoute);
app.use(customerRoute);

dbInit().then();
app.listen(port, () => console.log(`Listo por el puerto ${port}`));