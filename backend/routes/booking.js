import express from 'express'

import { verifyAdmin, verifyUser } from "../utils/verifyToken.js"
import { createBooking, getBooking, getAllBooking } from '../controllers/bookingController.js';
const router = express.Router()

router.post('/', verifyUser, createBooking);

router.get('/', verifyAdmin, getBooking);

router.post('/', verifyAdmin, getAllBooking);
export default router 