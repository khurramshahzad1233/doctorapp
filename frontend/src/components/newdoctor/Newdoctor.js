import React,{Fragment,state, useState} from 'react'
import "./Newdoctor.css"
import { useDispatch,useSelector } from 'react-redux';
import TimeRangePicker from '@wojtekmaj/react-timerange-picker';
import {newdoctoraction} from "../actions/doctoraction"
// import moment from 'moment';




const Newdoctor = () => {
    const dispatch=useDispatch();

    
       
    const [firstname,setFirstname]=useState("")
    const [lastname,setLastname]=useState("")
    const [phoneno,setPhoneno]=useState("")
    const [address,setAddress]=useState("")
    const [email,setEmail]=useState("")
    const [website,setWebsite]=useState("")
    const [specialization,setSpecialization]=useState("")
    const [experience,setExperience]=useState("")
    const [feeperconsultation,setFeeperconsultation]=useState("")
    const [timing,setTiming]=useState([])
    const [value, onChange] = useState(['10:00', '11:00']);

    console.log(value);
   

    const doctorsubmithandler=(e)=>{
        e.preventDefault();

        const myform=new FormData();
        myform.set("firstname",firstname)
        myform.set("lastname",lastname)
        myform.set("phoneno",phoneno)
        myform.set("address",address)
        myform.set("email",email)
        myform.set("website",website)
        myform.set("experience",experience)
        myform.set("specialization",specialization)
        myform.set("feePerConsultation",feeperconsultation)
        myform.set("timing",value)
       
        dispatch(newdoctoraction(myform))
    }
    
  return (
    <Fragment>
        <div className="newdoctorpage">
            <div className="newdoctorsection">

                <form 
                onClick={doctorsubmithandler}
                >
                <div className="personaldetail">


<h3>Personal Detail</h3>
<div className="personaldetaildiv">
    <p>
        <input type="text"
        required
        placeholder='firstname'
        value={firstname}
        onChange={(e)=>setFirstname(e.target.value)}
        />
    </p>
    <p>
        <input type="text"
        required
        placeholder='lastname'
        value={lastname}
        onChange={(e)=>setLastname(e.target.value)}
        />
    </p>
    <p>
        <input type="number"
        required
        placeholder='phoneno'
        value={phoneno}
        onChange={(e)=>setPhoneno(e.target.value)}
        />
    </p>
    <p>
        <input type="text"
        required
        placeholder='address'
        value={address}
        onChange={(e)=>setAddress(e.target.value)}
        />
    </p>
    <p>
        <input type="email"
        required
        placeholder='email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
    </p>
    <p>
        <input type="text"
        required
        placeholder='website'
        value={website}
        onChange={(e)=>setWebsite(e.target.value)}
        />
    </p>
</div>
</div>
<div className="professionaldetail">
<h3>Professional Detail</h3>
<div className="professionaldetaildiv">
<p>
        <input type="text"
        required
        placeholder='experience'
        value={experience}
        onChange={(e)=>setExperience(e.target.value)}
        />
    </p>
    <p>
        <input type="text"
        required
        placeholder='Specialization'
        value={specialization}
        onChange={(e)=>setSpecialization(e.target.value)}
        />
    </p>
    <p>
        <input type="text"
        required
        placeholder='feeperconsultation'
        value={feeperconsultation}
        onChange={(e)=>setFeeperconsultation(e.target.value)}
        />
    </p>
    <div>
    <TimeRangePicker onChange={onChange} value={value} />
    
  
        
    </div>
</div>
</div>
<div>
    <input type="submit"
    value="submit"
    />
</div>
                </form>
                
            </div>
        </div>
    </Fragment>
  )
}

export default Newdoctor