import React,{Fragment,useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux"
import {getalldoctoraction,doctorstatusaction} from "../actions/doctoraction"

const Alldoctor = () => {
    const dispatch=useDispatch()

    const {alldoctor}=useSelector((state)=>state.alldoctorred)

    useEffect(()=>{

        dispatch(getalldoctoraction())


    },[dispatch])

    const doctorstatushandler=(doctorId,status)=>{
        dispatch(doctorstatusaction(doctorId,status))
    }
  return (
    <Fragment>
        <div className="alldoctor">
            <h3>All doctor List</h3>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        alldoctor.map((doctor)=>(
                            <tr key={doctor._id}>
                                <td>{doctor.firstname}</td>
                                <td>{doctor.status}</td>
                                <td>{doctor.phoneno}</td>
                                <td>
                                    <button
                                    onClick={(e)=>doctorstatushandler(doctor._id,"Approve")}
                                    >{doctor.status==="pending"?"Approve":"Cancel"}</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </Fragment>
  )
}

export default Alldoctor