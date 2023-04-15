import express from "express"
import { deleteallnotificationcontroller, getallusercontroller,getmyprofilecontroller,logincontroller,markallnotificationcontroller,registerusercontroller } from "../controller/usercontroller.js";
import {authuser,authadmin} from "../middleware/auth.js"
const router=express.Router();

router.route("/user/all").get(getallusercontroller);
router.route("/user/new").post(registerusercontroller);
router.route("/user/login").post(logincontroller)
router.route("/user/me").get(authuser,getmyprofilecontroller)
router.route("/user/markallnotification/me").get(authuser,markallnotificationcontroller);
router.route("/user/allnotification/delete").get(authuser,deleteallnotificationcontroller)
router.route("/user/profile/me").get(authuser,getmyprofilecontroller)
export default router;