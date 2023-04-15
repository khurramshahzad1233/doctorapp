import React,{Fragment,useEffect} from 'react'
import "./Alluser.css"
import {useDispatch,useSelector} from "react-redux"
import {getalluseraction} from "../actions/useraction"

const Alluser = () => {
    const dispatch=useDispatch();

    const {alluser}=useSelector((state)=>state.alluserred)

    useEffect(()=>{

        dispatch(getalluseraction())
    },[dispatch])
   
  return (
    <Fragment>
        <div className="alluser">
            <h3>All Users</h3>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Doctor</th>
                        <th>Action</th>
                        
                    </tr>
                </thead>

                <tbody>
                    {
                        alluser.map((user)=>(
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.isDoctor===true?"yes":"no"}</td>
                                <td>
                                    <button>Block</button>
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

export default Alluser