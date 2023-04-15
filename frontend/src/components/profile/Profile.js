import React,{Fragment,useEffect,useState} from 'react'
import {getmyprofileaction} from "../actions/useraction"
import {useDispatch,useSelector} from "react-redux"
import TimeRangePicker from '@wojtekmaj/react-timerange-picker';


const Profile = () => {
    const dispatch=useDispatch()
    const {doctor,profile}=useSelector((state)=>state.myprofilered)


    const [name,setName]=useState("")
    const [email,setEmail]=useState("");
    const [phoneno,setPhoneno]=useState("")
    const [website,setWebsite]=useState("")
    const [address,setAddress]=useState("")
    const [specialization,setSpecialization]=useState("")
    const [experience,setExperience]=useState("")
    const [feePerConsultation,setFeePerConsultation]=useState("")
    const [value, onChange] = useState([

    ]);
 
   

   
    useEffect(()=>{

        dispatch(getmyprofileaction());

        
    },[dispatch])

    useEffect(()=>{
      if(profile){
        setName(profile.name);
        setEmail(profile.email)
      }
      if(doctor){
        setPhoneno(doctor.phoneno);
        setWebsite(doctor.website)
        setAddress(doctor.address)
        setSpecialization(doctor.specialization)
        setExperience(doctor.experience)
        onChange(doctor.timing.split(","))
        setFeePerConsultation(doctor.feePerConsultation)
      }
    },[profile,doctor])
   
  return (
    <Fragment>
    
      <div className="profilepage">
        <h3>my profile</h3>

        <h4>Personal information</h4>
        <form>
          <p>
            <input type="text"
            required
            placeholder='plz enter your name'
            value={name}
            onChange={(e)=>setName(e.target.value)} 
             />
          </p>
          <p>
            <input type="email"
            required
            placeholder='plz enter your name'
            value={email}
            onChange={(e)=>setEmail(e.target.value)} 
             />
          </p>
          <p>
            <input type="text"
            required
            placeholder='plz enter your name'
            value={phoneno}
            onChange={(e)=>setPhoneno(e.target.value)} 
             />
          </p>
          <p>
            <input type="text"
            required
            placeholder='plz enter your name'
            value={website}
            onChange={(e)=>setWebsite(e.target.value)} 
             />
          </p>
          <p>
            <input type="text"
            required
            placeholder='plz enter your name'
            value={experience}
            onChange={(e)=>setExperience(e.target.value)} 
             />
          </p>
          <p>
            <input type="text"
            required
            placeholder='plz enter your name'
            value={specialization}
            onChange={(e)=>setSpecialization(e.target.value)} 
             />
          </p>
          <p>
            <input type="text"
            required
            placeholder='plz enter your name'
            value={address}
            onChange={(e)=>setAddress(e.target.value)} 
             />
          </p>
          <p>
            <input type="text"
            required
            placeholder='plz enter your name'
            value={feePerConsultation}
            onChange={(e)=>setFeePerConsultation(e.target.value)} 
             />
          </p>
          <p>
          <TimeRangePicker onChange={onChange} value={value} />
          </p>
          
        </form>
      </div>
    </Fragment>
  )
}

export default Profile