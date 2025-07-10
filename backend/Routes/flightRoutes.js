import express from 'express';
import { addFlight, deleteFlight, listFlight } from '../Controller/flightController.js';
import upload from '../Config/upload.js';

const flightRouter = express.Router();

flightRouter.post('/add',upload.single('image'),addFlight);
flightRouter.get('/list',listFlight);
flightRouter.delete('/delete',deleteFlight)

export default flightRouter