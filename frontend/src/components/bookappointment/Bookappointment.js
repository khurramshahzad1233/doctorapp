import React,{Fragment,useEffect,useState} from 'react'
import "./Bookappointment.css"
import {getsingledoctoraction} from "../actions/doctoraction"
import {useDispatch,useSelector} from "react-redux"
import {useParams} from "react-router-dom"
import { TimePicker,DatePicker } from 'antd';
import { Dayjs } from 'dayjs';
import moment from "moment"
import {newappointmentaction,appointmentavailabilityaction} from "../actions/appointmentaction"


const Bookappointment = () => {
    const dispatch=useDispatch();
    const {id}=useParams()

    const [time,setTime]=useState("")
    const [date,setDate]=useState("")
    const [available,setAvailable]=useState(false)
    
    
    
    const {availability}=useSelector((state)=>state.appointavailabilityred)
    const {singledoctor,user}=useSelector((state)=>state.singledoctorred)
    let timing=singledoctor.timing;
    // timing.split(",")
    // console.log(time)
    // console.log(date)
    
    console.log(available)


    useEffect(()=>{
        
        dispatch(getsingledoctoraction(id))
    },[dispatch,id]);

    useEffect(()=>{
      if(availability===true){
        setAvailable(true)
      }
    },[availability])
    
    
    const handledatechange=(dat,dateString)=>{
      
        setDate(moment(dateString).format("DD-MM-YY"))
    };

    const timehandler=( Dayjs, timeString)=>{
        
        setTime(timeString)
    }

    const DisabledTime=(current)=>{
    const start = moment().startOf('day').add(9, 'hours');
    const end = moment().startOf('day').add(12, 'hours');
  
    return {
      disabledHours: () => {
        return [...Array(24).keys()].filter(hour => !moment().startOf('day').add(hour, 'hours').isBetween(start, end, null, '[]'))
      },
      disabledMinutes: (selectedHour) => {
        if(selectedHour === start.hour()){
          return [...Array(60).keys()].filter(minute => minute < start.minute())
        }
        if(selectedHour === end.hour()){
          return [...Array(60).keys()].filter(minute => minute >= end.minute())
        }
        return [];
      }
    }
       
        
    };

    const checkavailabilityhandler=(e)=>{
      dispatch(appointmentavailabilityaction(id,date,time))

    }
   

    const newappointmenthandler=(e)=>{
        e.preventDefault()

        const myform=new FormData();
      
        myform.set("doctor",id)
        myform.set("time",time)
        myform.set("date",date)

        dispatch(newappointmentaction(myform))
    }


    
    
    
  return (
    <Fragment>
        <div className="bookappointmentpage">
            <div className="doctorinfo">
                <h4>{singledoctor.firstname} {singledoctor.lastname}</h4>
                <h3>Fee: {singledoctor.feePerConsultation}</h3>
                <div>
                <strong>Timings:  </strong>
                
                <span>{singledoctor.timing?.split(",")[0]}</span>
                <b> - </b>
                <span>{singledoctor.timing?.split(",")[1]}</span>
                </div>

                <div>
                    <form
                    onSubmit={newappointmenthandler}
                    >
                    <DatePicker 
                    onChange={handledatechange}
                    />

                    <TimePicker 
                    minuteStep={30}
                    format="hh:mm" 
                    disabledTime={DisabledTime}
                    onChange={timehandler}
                
                
                    />

                   
                    {
                        available &&(
                            <p><button 
                            type='submit'
                            >Book Now</button></p>
                        )
                    }
                   
                    </form>
                    <button
                    onClick={checkavailabilityhandler}
                    >Check Availability</button>
                    

                </div>
                
            </div>
        </div>
    </Fragment>
  )
}

export default Bookappointment







// import { TimePicker } from 'antd';
// import moment from 'moment';

// function disabledTime(current) {
//   const start = moment().startOf('day').add(9, 'hours');
//   const end = moment().startOf('day').add(12, 'hours');

//   return {
//     disabledHours: () => {
//       return [...Array(24).keys()].filter(hour => !moment().startOf('day').add(hour, 'hours').isBetween(start, end, null, '[]'))
//     },
//     disabledMinutes: (selectedHour) => {
//       if(selectedHour === start.hour()){
//         return [...Array(60).keys()].filter(minute => minute < start.minute())
//       }
//       if(selectedHour === end.hour()){
//         return [...Array(60).keys()].filter(minute => minute >= end.minute())
//       }
//       return [];
//     }
//   }
// }

// const  Bookappointment=()=> {
//   return (
//     <TimePicker
//       disabledTime={disabledTime}
//     />
//   );
// }
// export default Bookappointment




