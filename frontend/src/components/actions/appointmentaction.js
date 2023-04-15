import axios from "axios";

export const newappointmentaction=(appointmentdata)=>async(dispatch)=>{
    try {
        dispatch({type:"newappointmentrequest"});

        const config={
            headers:{
                "content-type":"application/json"
            }
        };

        const {data}=await axios.post("/api/appointment/book/new",appointmentdata,config)
        dispatch({
            type:"newappointmentsuccess",
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type:"newappointmentfail",
            payload:error.response.data.message,
        })
        
    }
}



export const appointmentavailabilityaction=(id,date,time)=>async(dispatch)=>{
    try {
        dispatch({type:"appointmentavailabilityrequest"});

        const config={
            headers:{
                "content-type":"application/json"
            }
        };
        
        const {data}=await axios.post("/api/appointment/booking/available/check",{id,date,time},config);

        dispatch({
            type:"appointmentavailabilitysuccess",
            payload:data,
        })
        
    } catch (error) {
        dispatch({
            type:"appointmentavailabilityfail",
            payload:error.response.data.message,
        })
        
    }
}