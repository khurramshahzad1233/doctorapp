import express from "express";
import fileUpload from "express-fileupload";
import cookieParser from "cookie-parser";

import Errormiddleware from "./middleware/error.js";

import user from "./route/userroute.js";
import doctor from "./route/doctorroute.js"
import appointment from "./route/appointmentroute.js"
const app=express();


app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())


app.use("/api",user);
app.use("/api",doctor);
app.use("/api",appointment);


app.use(Errormiddleware)
export default app;