import React,{Fragment,useEffect} from 'react'
import "./Home.css"
import { Link,useNavigate } from 'react-router-dom'
import {FaHome,FaList} from "react-icons/fa"
import {IoIosPersonAdd,IoIosPerson,IoMdExit} from "react-icons/io"
import {MdNotificationsActive} from "react-icons/md"
import Badge from '@mui/material/Badge';
import {useSelector,useDispatch} from "react-redux";
import {getmyprofileaction} from "../actions/useraction"
import {getallapprovedoctoraction} from "../actions/doctoraction"
import Approvedoctor from './Approvedoctor'


const Home = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch()
  
  const {notification,user}=useSelector((state)=>state.userred);
  const {allapprovedoctor}=useSelector((state)=>state.approvedoctorred)
 
  const gotomyprofilehandler=(e)=>{
    dispatch(getmyprofileaction())

    navigate(`/profile/me`)

  }
 
  useEffect(()=>{
    dispatch(getallapprovedoctoraction())
  },[dispatch])
  
  return (
    <Fragment>
      <div className="homepage">
        <div className="leftcolumn">
          <h2>Doctor App</h2>
          <p><span><FaHome/></span><Link style={{ textDecoration: 'none' }}>Home</Link></p>
          <p><span><FaList/></span><Link style={{ textDecoration: 'none' }}>Appointment</Link></p>
          {user.isDoctor===true?(<></>):(
            <p><span><IoIosPersonAdd/></span><Link style={{ textDecoration: 'none' }}>Apply Doctor</Link></p>
          )}
          
          <p onClick={(e)=>gotomyprofilehandler(e)} ><span><IoIosPerson/></span><Link style={{ textDecoration: 'none' }}>Profile</Link></p>
          <p><span><IoMdExit/></span><Link style={{ textDecoration: 'none' }}>Logout</Link></p>
          
        </div>
        <div className="rightcolumn">
          <div className="navbar">
            <span
            onClick={(e)=>navigate("/notification")}
            >
            <Badge badgeContent={notification?notification.length:0} color="primary">
  <MdNotificationsActive color="action" />
</Badge>
            </span>
          </div>
          <div className="homecontent"></div>
        </div>
        
      </div>

      <div className="approvedoctorsection">
        {allapprovedoctor?.map((doctor)=>(
          <div key={doctor._id}><Approvedoctor doctor={doctor}/></div>
        ))}
      </div>
    </Fragment>
  )
}

export default Home