import Errorhandler from "../utils/errorhandler.js";
import catchasyncerror from "../middleware/catchasyncerror.js";
import userdata from "../models/userschema.js";
import cloudinary from "cloudinary"
import sendtoken from "../utils/sendtoken.js"


export const getallusercontroller=catchasyncerror(async(req,res,next)=>{
    const alluser=await userdata.find({});

    res.status(200).json({
        success:true,
        alluser
    })
});



export const registerusercontroller=catchasyncerror(async(req,res,next)=>{
    const {name,email,password,avatar}=req.body;


    if(!name ||!email ||!password ||!avatar){
        return next(new Errorhandler("plz enter all fields",400))
    };

    let user=await userdata.findOne({email});
    if(user){
        return next(new Errorhandler("user already exist",409))
    };
    const mycloud=await cloudinary.v2.uploader.upload(req.body.avatar,{
        folder:"avatar",
        width:150,
        crop:"scale",
    });

    user=await userdata.create({
        name,email,password,
        avatar:{
            public_id:mycloud.public_id,
            url:mycloud.secure_url,
        }
    })
    sendtoken(res,user,201,"register successfully")
});


export const logincontroller=catchasyncerror(async(req,res,next)=>{
    const {email,password}=req.body;

    if(!email ||!password){
        return next(
            new Errorhandler("Plz enter all fields",400)
        )
    };
    const user=await userdata.findOne({email}).select("+password");
    if(!user){
        return next(new Errorhandler("incorrect email or password",401))
    };
    const matchpassword=await user.comparepassword(password);
    if(!matchpassword){
        return next(new Errorhandler("incorrect email or password",401))
    };
    sendtoken(res,user,200,"welcome back")
});

export const logoutusercontroller=catchasyncerror(async(req,res,next)=>{
    res.status(200).cookie("token",null,{
        expires:new Date(Date.now()),
        httpOnly:true,
        secure:true,
        sameSite:"none"
        
    }).json({
        success:true,
        message:"logout successfully"
    })
});


export const getmyprofilecontroller=catchasyncerror(async(req,res,next)=>{
    const user=await userdata.findById(req.user.id).populate("doctor");
    if(!user){
        return next(new Errorhandler("plz login to access the resource",400))
    };
    res.status(200).json({
        success:true,
        user,
    })
});


export const getsingleusercontroller=catchasyncerror(async(req,res,next)=>{
    const user=await userdata.findById(req.params.id);
    if(!user){
        return next(new Errorhandler("user not found",404))
    };
    res.status(200).json({
        succcess:true,
        user,
    })
});


export const markallnotificationcontroller=catchasyncerror(async(req,res,next)=>{
    const user=await userdata.findById(req.user.id);
    const seennotification=user.seennotification;
    const notification=user.notification;
    seennotification.push(...notification);
    user.notification=[];
    user.seennotification=notification;
    await user.save({validateBeforeSave:false});

    res.status(200).json({
        success:true,
        user,
        notification
    })
});


export const deleteallnotificationcontroller=catchasyncerror(async(req,res,next)=>{
    const user=await userdata.findById(req.user.id);
    user.notification=[];
    user.seennotification=[];
    await user.save({validateBeforeSave:false});

    res.status(200).json({
        success:true,
        message:"all notification deleted successfully",
        user,
    })
})