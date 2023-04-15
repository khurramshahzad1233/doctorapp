import React,{Fragment} from 'react'
import { useSelector } from 'react-redux'
import "./Notification.css"
import {useNavigate} from "react-router-dom"
import {markallnotificationaction,deleteallnotificationaction} from "../actions/useraction"
import {useDispatch} from "react-redux"

const Notification = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const {notification,seennotification}=useSelector((state)=>state.userred)

    const markaasreadhandler=(e)=>{
        dispatch(markallnotificationaction())
    }
    const deleteallreadhandler=(e)=>{
        dispatch(deleteallnotificationaction())
    }
  return (
    <Fragment>
        <div className="notificationpage">
            <h3>Notification Page</h3>
            <div className="unreadandreadmsg">
                <span>UnRead</span>
                <span>Read</span>
            </div>
            <div className="allnotification">
                <div onClick={markaasreadhandler}>Mark All Read</div>

                {
                    notification?.map((note,i)=>(
                        <div className="card" key={i} onClick={(e)=>navigate(`/admin/doctor/${note.doctorid}`)}>
                            <div className="notemessage" >
                                {note.message}
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>


                <div onClick={deleteallreadhandler}>Delete All Read</div>

        <div className="seennotificationdiv">
        {
                    seennotification?.map((seennote,i)=>(
                        <div className="card" key={i} onClick={(e)=>navigate(`/admin/doctor/${seennote.doctorid}`)}>
                            <div className="notemessage" >
                                {seennote.message}
                            </div>
                        </div>
                    ))
                }

        </div>

    </Fragment>
  )
}

export default Notification