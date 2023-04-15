import React,{Fragment,useState} from 'react'
import "./Register.css";
import {IoIosContact} from "react-icons/io"
import {registeruseraction} from "../actions/useraction"
import {useDispatch,useSelector} from "react-redux"


const Register = () => {
    const dispatch=useDispatch()


    const [name,setName]=useState('');
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("");
    const [avatar,setAvatar]=useState("")
    const [avatarpreview,setAvatarpreview]=useState("")


    const registerimagehandler=(e)=>{
        const file=e.target.files[0]
        const reader=new FileReader();

        
        reader.onload=()=>{
            if(reader.readyState===2){
                setAvatar(reader.result);
                setAvatarpreview(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])


    };
    const registersubmithandler=(e)=>{
        e.preventDefault();

        const myform=new FormData()

        myform.append("name",name)
        myform.append("email",email)
        myform.append("password",password)
        myform.append("avatar",avatar)

        dispatch(registeruseraction(myform))
    }
  return (
    <Fragment>
        <div className="registerpage">
            <div className="registersection">
                <h2>Register</h2>
                <form 
                className='registerform'
                encType='multipart/form-data'
                onSubmit={registersubmithandler}
                >
                    <p>
                        <input type="text"
                        required
                        placeholder='plz enter your name'
                        value={name}
                        name="name"
                        onChange={(e)=>setName(e.target.value)}
                        />
                    </p>
                    <p>
                        <input type="email"
                        required
                        placeholder='email'
                        name='email'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                    </p>
                    <p>
                        <input type="password"
                        required
                        placeholder='Password'
                        name='password'
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        />
                    </p>
                    <p>
                        <img src={avatarpreview} alt="avatarpreview" width="30px" />
                    </p>
                    <p>
                        <input type="file"
                        required
                        name='avatar'
                        accept='image/*'
                        onChange={registerimagehandler}
                        />
                    </p>
                    <input type="submit"
                    value="Sign Up"
                    />
                </form>

                <p>Already SignUp {""}</p>
                <span>Goto {""}</span>
                <span><a href="/login">Login</a></span>
            </div>
        </div>


    </Fragment>
  )
}

export default Register