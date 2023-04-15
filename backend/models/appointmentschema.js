import mongoose from "mongoose";

const kittySchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.ObjectId,
      ref:"user"
    },
    doctor: {
      type: mongoose.Schema.ObjectId,
      ref:"doctor"
    },
    
    date: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "pending",
    },
    time: {
      type: String,
      required: true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
  }
);

const appointmentdata = mongoose.model("appointment", kittySchema);

export default appointmentdata
