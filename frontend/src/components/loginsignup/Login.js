import React,{Fragment,useState} from 'react';
import {useDispatch} from "react-redux"
import {loginuseraction} from "../actions/useraction"

const Login = () => {
    const dispatch=useDispatch()

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")


    const loginsubmithandler=(e)=>{
        e.preventDefault();
        dispatch(loginuseraction(email,password))
    }
  return (
    <Fragment>
        <div className="loginpage">
            <div className="loginsection">
                <h2>login </h2>
                <form 
                onSubmit={loginsubmithandler}
                >
                    <p>
                        <input type="email"
                        required
                        placeholder='email'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}

                        />
                    </p>

                    <p>
                        <input type="password"
                        required
                        placeholder='password'
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        />
                    </p>
                    <p>
                        <input type="submit"
                        value="login"
                        />
                    </p>
                </form>
            </div>
        </div>

    </Fragment>
  )
}

export default Login