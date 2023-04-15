import Errorhandler from "../utils/errorhandler.js";
import catchasyncerror from "../middleware/catchasyncerror.js";
import doctordata from "../models/doctorschema.js";
import userdata from "../models/userschema.js";
import cloudinary from "cloudinary"
import sendtoken from "../utils/sendtoken.js";
import appointmentdata from "../models/appointmentschema.js";


export const newdoctorcontroller=catchasyncerror(async(req,res,next)=>{
    
    let user=await userdata.findById(req.user.id);
    if(!user){
        return next(new Errorhandler("plz login to acces the resource",403));
    }
    req.body.user=req.user.id
    const newdoctor=await doctordata({
        ...req.body,
       
    });
    await newdoctor.save();
    user.isDoctor=true;
    user.doctor=newdoctor._id;
    await user.save({validateBeforeSave:false})

    const adminuser=await userdata.findOne({role:"admin"});
    const notification=adminuser.notification;
    notification.push({
        type:"apply-doctor-request",
        message:`${newdoctor.firstname} ${newdoctor.lastname} Has Applied For A Doctor Account`,
        
            doctorid:newdoctor._id,
            name:newdoctor.firstname+" "+ newdoctor.lastname,
            onClickPath:"/admin/doctor"
        
    });
    await userdata.findByIdAndUpdate(adminuser._id,{notification},{
        new:true,
        runValidators:true,
    });
    res.status(201).json({
        success:true,
        message:"doctor applied successfully",
        newdoctor,
    })


});



export const getalldoctorcontroller=catchasyncerror(async(req,res,next)=>{
    const alldoctor=await doctordata.find({}).populate("user");

    res.status(200).json({
        success:true,
        alldoctor,
    })
});


export const getdoctorprofilecontroller=catchasyncerror(async(req,res,next)=>{
    const doctor=await doctordata.findOne({userId:req.body.userId});

    res.status(200).json({
        success:true,
        doctor,
    })
});


export const updatedoctorprofilecontroller=catchasyncerror(async(req,res,next)=>{
    const doctor=await doctordata.findByIdAndUpdate({userId:req.body.userId},req,body,{
        new:true,
        runValidators:true,
    });
    res.status(200).json({
        success:true,
        doctor,
    })
});


export const getsingledoctorcontroller=catchasyncerror(async(req,res,next)=>{
    const doctor=await doctordata.findById(req.params.id).populate("user");

    res.status(200).json({
        success:true,
        doctor,
    })
});


export const getallappointmentofadoctorcontroller=catchasyncerror(async(req,res,next)=>{
    const doctor=await doctordata.findOne({userId:req.body.userId});
    const allapointment=await appointmentdata.find({
        doctorId:doctor._id
    });
    res.status(200).json({
        success:true,
        allapointment,
    })
});


export const updateappointmentstatuscontroller=catchasyncerror(async(req,res,next)=>{
    const {appointmentid,status}=req.body;
    const appointment=await appointmentdata.findByIdAndUpdate(appointmentid,{status});

    const user=await userdata.findOne({_id:appointment.userId});

    const notification=user.notification;

    notification.push({
        type:"status-updated",
        message:`your appointment has been updated ${status}`,
        onClickPath:'/doctor-appointment',
    });
    await user.save();
    res.status(200).json({
        success:true,
        message:"appointment status updated"
    })
})



export const changedoctorstatuscontroller=catchasyncerror(async(req,res,next)=>{
    const {doctorId,status}=req.body;
    const doctor=await doctordata.findByIdAndUpdate(doctorId,{status},{
        new:true,
        runValidators:true,
    });
    const user=await userdata.findOne({_id:doctor.user});
    const notification=user.notification;

    notification.push({
        type: "doctor-account-request-updated",
        message: `Your Doctor Account Request Has ${status} `,
        onClickPath: "/notification",
    });
    // user.isDoctor===(status==="Approve")?true:false;
    if(status==="Approve"){
        user.isDoctor=true
    }else{
        user.isDoctor=false
    }
    await user.save();
    res.status(200).json({
        success:true,
        message:"account status updated successfully",
        user
    })

})



export const getallapprovedoctorcontroller=catchasyncerror(async(req,res,next)=>{
    const approvedoctor=await doctordata.find({status:"Approve"});

    res.status(200).json({
        success:true,
        approvedoctor,
    })
})