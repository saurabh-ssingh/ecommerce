import React from 'react';
import { NavLink } from "react-router-dom";

const Login = () =>{
    return(
        <>
            <div className = 'login-form'>
                <h1>Login Form</h1>
                <input 
                    type = 'text' 
                    placeholder='Enter Your User Name'
                />
                <br/>
               <input 
                    type = 'password' 
                    placeholder=' Enter Your Password'
                />
                <br/>
                <NavLink to = '/'>Login</NavLink>
            </div>
        </>
    );
}

export default Login;