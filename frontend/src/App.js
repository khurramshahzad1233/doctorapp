import React,{useEffect} from 'react'
import {Routes,Route,BrowserRouter as Router} from "react-router-dom"
import WebFont from "webfontloader"
import Home from './components/home/Home'
import Login from './components/loginsignup/Login'
import Register from './components/loginsignup/Register'
import {useDispatch} from "react-redux"
import {loaduseraction} from "./components/actions/useraction"
import Newdoctor from './components/newdoctor/Newdoctor'
import Notification from './components/notification/Notification'
import Alluser from './components/admin/Alluser'
import Alldoctor from './components/admin/Alldoctor'
import Profile from './components/profile/Profile'
import Bookappointment from './components/bookappointment/Bookappointment'

const App = () => {
  const dispatch=useDispatch();
  


  useEffect(()=>{

    WebFont.load({google:{
      families:["Roboto","Montserrat","Droid Sans","Chilanka","Satisfy"]
    }});

    dispatch(loaduseraction())
  },[dispatch])
  return (
    <Router>


      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/doctor/new' element={<Newdoctor/>}/>
        <Route path='/notification' element={<Notification/>}/>
        <Route path='/user/all' element={<Alluser/>}/>
        <Route path='/doctor/all' element={<Alldoctor/>}/>
        <Route path='/profile/me' element={<Profile/>}/>
        <Route path='/doctor/bookappointment/:id' element={<Bookappointment/>}/>
      </Routes>
    </Router>
  )
}

export default App