import express from 'express';
import { myBookings, placeBooking , stripePayment } from '../Controller/bookingController.js';

const bookingRouter = express.Router();

bookingRouter.post('/place',placeBooking)
bookingRouter.get('/mybooking/:userId',myBookings)
bookingRouter.post('/payment/:bookingId',stripePayment)

export default bookingRouter