import express from "express"
import { changedoctorstatuscontroller, getallapprovedoctorcontroller, getalldoctorcontroller, getsingledoctorcontroller, newdoctorcontroller } from "../controller/doctorcontroller.js";
import {authuser} from "../middleware/auth.js"
const router=express.Router();

router.route("/doctor/new").put(authuser,newdoctorcontroller)
router.route("/doctor/all").get(getalldoctorcontroller)
router.route("/doctor/status/change").put(changedoctorstatuscontroller)
router.route("/doctor/approve/all").get(getallapprovedoctorcontroller);
router.route("/doctor/:id").get(getsingledoctorcontroller)




export default router;