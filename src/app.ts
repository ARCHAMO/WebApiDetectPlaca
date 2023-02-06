import "dotenv/config";
import express from "express";
import cors from "express";
import dbInit from "./db/mongo";

// Definimos las rutas del WebApi
import plateRecognizerRoute from './router/platerocognizer.router';
import vehicleRoute from './router/vehicle.router';
import userRoute from './router/user.router';
import customerRoute from './router/customer.router';
import dashboardRoute from './router/dashboard.router';

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 9999;

app.use('/api', plateRecognizerRoute);
app.use('/api', vehicleRoute);
app.use('/api', userRoute);
app.use('/api', customerRoute);
app.use('/api', dashboardRoute);

dbInit().then();
app.listen(port, () => console.log(`Listo por el puerto ${port}`));