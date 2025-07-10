import express from 'express';
import { myBookings, placeBooking } from '../Controller/bookingController.js';

const bookingRouter = express.Router();

bookingRouter.post('/place',placeBooking)
bookingRouter.get('/mybooking/:userId',myBookings)

export default bookingRouter