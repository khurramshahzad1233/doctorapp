import {createAction,createReducer} from "@reduxjs/toolkit"

const newappointmentrequest=createAction("newappointmentrequest")
const newappointmentsuccess=createAction("newappointmentsuccess")
const newappointmentfail=createAction("newappointmentfail")

const appointmentavailabilityrequest=createAction("appointmentavailabilityrequest")
const appointmentavailabilitysuccess=createAction("appointmentavailabilitysuccess")
const appointmentavailabilityfail=createAction("appointmentavailabilityfail")

const clearerror=createAction("clearerror")



const newappointmentinitialstate={
    newappointment:{}
};
export const newappointmentreducer=createReducer(newappointmentinitialstate,(builder)=>{
    builder.addCase(newappointmentrequest,(state,action)=>{
        state.loading=true;
        state.newappointment={}
    })
    builder.addCase(newappointmentsuccess,(state,action)=>{
        state.loading=false;
        state.newappointment=action.payload.success;
    })
    builder.addCase(newappointmentfail,(state,action)=>{
        state.loading=false;
        state.newappointment={}
        state.error=action.payload;
    })
    builder.addCase(clearerror,(state,action)=>{
        state.loading=false;
        state.error=null;
    })
})


const availabilityinitialstate={
    availability:{}
};
export const appointavailabilityreducer=createReducer(availabilityinitialstate,(builder)=>{
    builder.addCase(appointmentavailabilityrequest,(state,action)=>{
        state.loading=true;
        state.availability={}
    })
    builder.addCase(appointmentavailabilitysuccess,(state,action)=>{
        state.loading=false;
        state.availability=action.payload.success
    })
    builder.addCase(appointmentavailabilityfail,(state,action)=>{
        state.loading=false;
        state.availability={}
        state.error=action.payload;
    })
    builder.addCase(clearerror,(state,action)=>{
        state.loading=false;
        state.error=null;
    })
})