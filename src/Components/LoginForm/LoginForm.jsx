import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import React from 'react'
import "./LoginForm.css";

const LoginForm = () => {
  return (
    <div className='wrapper'>
     <form action="">
        <h1>Login</h1>
        <div className="input-box">
            <input type="text" placeholder='Username' required />
            <FaUser className="icons"/>
        </div>
        <div className="input-box">
            <input type="password" placeholder='Password' required />
            <FaLock className="icons"/>
        </div>
        <div className="remember-forget">
            <label><input type="checkbox" name="" id="" />Remember me</label>
            <a href="#">Forget Password?</a>
        </div>

        <button type='submit'>Login</button>

        <div className="register-link">
            <p>Don't have an account? <a href="#">Register</a></p>
        </div>
     </form>
    </div>
  )
}

export default LoginForm
