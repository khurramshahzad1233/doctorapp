import {createAction,createReducer} from "@reduxjs/toolkit";

const newdocinitialstate={
    newdoctor:{}
};

const newdoctorrequest=createAction("newdoctorrequest");
const newdoctorsuccess=createAction("newdoctorsuccess");
const newdoctorfail=createAction("newdoctorfail");

const clearerror=createAction("clearerror");


const alldoctorrequest=createAction("alldoctorrequest")
const alldoctorsuccess=createAction("alldoctorsuccess")
const alldoctorfail=createAction("alldoctorfail")


const changedoctorstatusrequest=createAction("changedoctorstatusrequest")
const changedoctorstatussuccess=createAction("changedoctorstatussuccess")
const changedoctorstatusfail=createAction("changedoctorstatusfail")

const approvedoctorrequest=createAction("approvedoctorrequest")
const approvedoctorsuccess=createAction("approvedoctorsuccess")
const approvedoctorfail=createAction("approvedoctorfail")

const singledoctorrequest=createAction("singledoctorrequest")
const singledoctorsuccess=createAction("singledoctorsuccess")
const singledoctorfail=createAction("singledoctorfail")


export const newdoctorreducer=createReducer(newdocinitialstate,(builder)=>{
    builder.addCase(newdoctorrequest,(state,action)=>{
        state.loading=true
        state.newdoctor={}
    })
    builder.addCase(newdoctorsuccess,(state,action)=>{
        state.loading=false
        state.newdoctor=action.payload.newdoctor
    })
    builder.addCase(newdoctorfail,(state,action)=>{
        state.loading=false
        state.newdoctor={}
        state.error=action.payload
    })
    builder.addCase(clearerror,(state,action)=>{
        state.loading=false
        state.error=null
    })
})


const alldoctorinitialstate={
    alldoctor:[]
}


export const alldoctorreducer=createReducer(alldoctorinitialstate,(builder)=>{
    builder.addCase(alldoctorrequest,(state,action)=>{
        state.loading=true
        state.alldoctor=[]
    })

    builder.addCase(alldoctorsuccess,(state,action)=>{
        state.loading=false
        state.alldoctor=action.payload.alldoctor
    })

    builder.addCase(alldoctorfail,(state,action)=>{
        state.loading=false
        state.alldoctor=[]
        state.error=action.payload
    })

    builder.addCase(clearerror,(state,action)=>{
        state.loading=false
        state.error=null
    })
})


const doctorstatusinitialstate={
    status:{}
};

export const changedoctorstatusreducer=createReducer(doctorstatusinitialstate,(builder)=>{
    builder.addCase(changedoctorstatusrequest,(state,action)=>{
        state.loading=true
        state.status={}
    })

    builder.addCase(changedoctorstatussuccess,(state,action)=>{
        state.loading=false
        state.status=action.payload.success
    })
    builder.addCase(changedoctorstatusfail,(state,action)=>{
        state.loading=false
        state.state={}
        state.error=action.payload;
    })
    builder.addCase(clearerror,(state,action)=>{
        state.loading=false;
        state.error=null
    })
})



const approvedoctorinitialstate={
    allapprovedoctor:[]
}

export const approvedoctorreducer=createReducer(approvedoctorinitialstate,(builder)=>{
    builder.addCase(approvedoctorrequest,(state,action)=>{
        state.loading=true;
        state.allapprovedoctor=[]
    })
    builder.addCase(approvedoctorsuccess,(state,action)=>{
        state.loading=false;
        state.allapprovedoctor=action.payload.approvedoctor;
    })
    builder.addCase(approvedoctorfail,(state,action)=>{
        state.loading=false;
        state.allapprovedoctor=[];
        state.error=action.payload;

    })
    builder.addCase(clearerror,(state,action)=>{
        state.loading=false;
        state.error=null
    })
});



const singledoctorinitialstate={
    singledoctor:{}
}

export const singledoctorreducer=createReducer(singledoctorinitialstate,(builder)=>{
    builder.addCase(singledoctorrequest,(state,action)=>{
        state.loading=true;
        state.singledoctor={}

    })
    builder.addCase(singledoctorsuccess,(state,action)=>{
        state.loading=false;
        state.singledoctor=action.payload.doctor;
        state.user=action.payload.doctor.user
    })
    builder.addCase(singledoctorfail,(state,action)=>{
        state.loading=false;
        state.singledoctor={}
        state.error=action.payload;
    })
    builder.addCase(clearerror,(state,action)=>{
        state.loading=false;
        state.error=null;
    })
})

