import React, { Fragment } from 'react'
import "./Approvedoctor.css"
import {useNavigate} from "react-router-dom"

const Approvedoctor = ({doctor}) => {

    const navigate=useNavigate()
  return (
    <Fragment>
        <div className="doctordiv"
        onClick={(e)=>navigate(`/doctor/bookappointment/${doctor._id}`)}
        >
            <div className="docname">
                <span>{doctor.firstname}</span>
                <span>{doctor.lastname}</span>
            </div>
            <div className="docspecialization">{doctor.specialization}</div>
            <div className="experience">{doctor.experience}</div>
            <div className="perconsultation">{doctor.feePerConsultation}</div>
            <div>
                <strong>Timings</strong>
                <span>{doctor.timing.split(",")[0]}</span>
                <b> - </b>
                <span>{doctor.timing.split(",")[1]}</span>
            </div>
        </div>
    </Fragment>
  )
}

export default Approvedoctor