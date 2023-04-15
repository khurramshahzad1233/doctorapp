import mongoose from "mongoose";

const kittySchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.ObjectId,
      ref:"user"
    },
    firstname: {
      type: String,
      required: [true, "first name is required"],
    },
    lastname: {
      type: String,
      required: [true, "last name is required"],
    },
    phoneno: {
      type: String,
      required: [true, "phone no is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    website: {
      type: String,
    },
    address: {
      type: String,
      required: [true, "address is required"],
    },
    specialization: {
      type: String,
      required: [true, "specialization is require"],
    },
    experience: {
      type: String,
      required: [true, "experience is required"],
    },
    feePerConsultation: {
      type: Number,
      required: [true, "fee is required"],
    },
    status: {
      type: String,
      default: "pending",
    },
    timing: {
      type: Object,
      required: [true, "wrok timing is required"],
    },
    createdAt:{
        type:Date,
        Default:Date.now,
    },
    
  }
  
);

const doctordata = mongoose.model("doctor", kittySchema);

export default doctordata;