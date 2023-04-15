import catchasyncerror from "../middleware/catchasyncerror.js";
import Errorhandler from "../utils/errorhandler.js";
import appointmentdata from "../models/appointmentschema.js";
import moment from "moment";
import userdata from "../models/userschema.js";


export const bookappointmentcontroller=catchasyncerror(async(req,res,next)=>{
    req.body.date=moment(req.body.date,"DD,MM,YYYY").toISOString();
    req.body.time=moment(req.body.time,"HH:mm").toISOString();
    req.body.user=req.user.id;


    const newappointment=new appointmentdata(req.body);
    await newappointment.save({validateBeforeSave:false});

    const user=await userdata.findById(req.user.id);
    user.notification.push({
        type:"new-appointment-request",
        message: `a new appointment request from ${user.name}`,
        onClickPath:"/user/appointment"
    });
    await user.save({validateBeforeSave:false});
    res.status(200).json({
        success:true,
        message:"appointment book successfully"
    })


});


export const bookingavailabilitycontroller=catchasyncerror(async(req,res,next)=>{

    // console.log(moment("2023-02-28T19:00:00.000Z").format("DD-MM-YYYY"))
    // console.log(req.body.date)
    const date=moment(req.body.date,"DD-MM-YY").toISOString();
    const fromtime=moment(req.body.time,"HH:mm").subtract(30,"minutes").toISOString();
    const totime=moment(req.body.time,"HH:mm").add(30,"minutes").toISOString();
    
    const doctor=req.body.id;
    
    // console.log(fromtime)
    // console.log(totime)

    const appointment=await appointmentdata.find({
        doctor,
        date,
        time:{
            $gte:fromtime,
            $lte:totime,
        }
    });
    // console.log(appointment.length)
    if(appointment.length>=1){
        return next(new Errorhandler("appoint is not available at this time"),400)
    }else{
        res.status(200).json({
            success:true,
            message:"appointment available",
            appointment
        })
    }
});


const getallappointbyadoctorcontroller=catchasyncerror(async(req,res,next)=>{
    const allappointment=await appointmentdata.find(req.user.id);
    

    res.status(200).json({
        success:true,
        allappointment,
    })
})