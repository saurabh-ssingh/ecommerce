import React from "react";
import { NavLink, NavBtn,NavBtnLink } from 'react-router-dom';


const SignUp = () =>{
    return(
        <>
            
            <div className = 'singup-form'>
                <h1>SingUp Page</h1>
                <input 
                    type = 'text' 
                    placeholder='Enter Your User Name'
                />
                <input 
                    type = 'password' 
                    placeholder=' Enter Your Password'
                />
                <input
                     type = 'password'
                     placeholder='Re-enter Your Password'
                /> 
                <input
                     type = 'email'
                     placeholder='Enter Your Email'
                /> 
                {/*<button  type='submit'>SignUp</button>*/}

                <NavLink to = '/'>Sing Up</NavLink>

                {/*<NavBtn>
                    <NavBtnLink to='/login'>Sign Up</NavBtnLink>
                </NavBtn>*/}

                
                
            </div>
        </>

    );
}

export default SignUp;