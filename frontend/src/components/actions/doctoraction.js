import axios from "axios"

export const newdoctoraction=(doctordata)=>async(dispatch)=>{
    try {
        dispatch({
            type:"newdoctorrequest"
        });
        const config={
            headers:{
                "content-type":"application/json"
            },
            withCredentials:true,
        };
        const {data}=await axios.put("/api/doctor/new",doctordata,config);

        dispatch({
            type:"newdoctorsuccess",
            payload:data,
        })
        
    } catch (error) {
        dispatch({
            type:"newdoctorfail",
            payload:error.response.data.message,
        })
        
    }
}


export const getalldoctoraction=()=>async(dispatch)=>{
    try {
        dispatch({type:"alldoctorrequest"})

        const {data}=await axios.get("/api/doctor/all")

        dispatch({
            type:"alldoctorsuccess",
            payload:data,
        })
        
    } catch (error) {
        dispatch({
            type:"alldoctorfail",
            payload:error.response.data.message
        })
        
    }
}


export const doctorstatusaction=(doctorId,status)=>async(dispatch)=>{
    try {
        dispatch({type:"changedoctorstatusrequest"});

        const config={
            headers:{
                "content-type":"application/json"
            }
        };
        const {data}=await axios.put("/api/doctor/status/change",{doctorId,status},config);
        dispatch({
            type:"changedoctorstatussuccess",
            payload:data,
        })
        
    } catch (error) {
        dispatch({
            type:"changedoctorstatusfail",
            payload:error.response.data.message,
        })
        
    }
};

export const getallapprovedoctoraction=()=>async(dispatch)=>{
    try {
        dispatch({type:"approvedoctorrequest"});

        const {data}=await axios.get("/api/doctor/approve/all");

        dispatch({
            type:"approvedoctorsuccess",
            payload:data,
        })
        
    } catch (error) {
        dispatch({
            type:"approvedoctorfail",
            payload:error.response.data.message,
        })
        
    }
};


export const getsingledoctoraction=(id)=>async(dispatch)=>{
    try {
        dispatch({type:"singledoctorrequest"})

        const {data}=await axios.get(`/api/doctor/${id}`);

        dispatch({
            type:"singledoctorsuccess",
            payload:data,
        })
        
    } catch (error) {
        dispatch({
            type:"singledoctorfail",
            payload:error.response.data.message,
        })
        
    }

}