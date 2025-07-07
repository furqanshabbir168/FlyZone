import express from 'express';
import { addFlight } from '../Controller/flightController.js';
import upload from '../Config/upload.js';

const flightRouter = express.Router();

flightRouter.post('/add',upload.single('image'),addFlight)

export default flightRouter