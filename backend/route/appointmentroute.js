import express from "express"
import { bookappointmentcontroller, bookingavailabilitycontroller } from "../controller/appointmentcontroller.js";
import {authuser} from "../middleware/auth.js"
const router=express.Router();

router.route("/appointment/book/new").post(authuser,bookappointmentcontroller);
router.route("/appointment/booking/available/check").post(bookingavailabilitycontroller)



export default router;