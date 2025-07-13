import express from 'express';
import { myBookings, placeBooking , reservedSeats, stripePayment, verifyPayment } from '../Controller/bookingController.js';

const bookingRouter = express.Router();

bookingRouter.post('/place',placeBooking)
bookingRouter.get('/mybooking/:userId',myBookings)
bookingRouter.post('/payment/:bookingId',stripePayment)
bookingRouter.get('/reserved',reservedSeats)
bookingRouter.post('/verify-payment',verifyPayment)

export default bookingRouter