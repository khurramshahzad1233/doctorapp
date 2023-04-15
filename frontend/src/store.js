import {configureStore} from "@reduxjs/toolkit"
import { appointavailabilityreducer, newappointmentreducer } from "./components/reducer/appointmentreducer";
import { alldoctorreducer, approvedoctorreducer, changedoctorstatusreducer, newdoctorreducer, singledoctorreducer } from "./components/reducer/doctorreducer";
import { alluserreducer, deleteallnotificationreducer, markallnotificationreducer, myprofilereducer, userreducer } from "./components/reducer/userreducer";
const store=configureStore({
    reducer:{
        userred:userreducer,
        newdoctorred:newdoctorreducer,
        markallnotificationred:markallnotificationreducer,
        deletenotificationred:deleteallnotificationreducer,
        alluserred:alluserreducer,
        alldoctorred:alldoctorreducer,
        changedoctorstatusred:changedoctorstatusreducer,
        myprofilered:myprofilereducer,
        approvedoctorred:approvedoctorreducer,
        singledoctorred:singledoctorreducer,
        newappointmentred:newappointmentreducer,
        appointavailabilityred:appointavailabilityreducer,
    }
});

export default store;