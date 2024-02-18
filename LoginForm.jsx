import React from 'react'
import './LoginForm.css'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
const LoginForm = () => {
  return (
    <div className='container'>
      <form action=''>
        <h1>lOGIN</h1>
        <div className='input-box'>
          <input type="text" placeholder='Username' required/>
          <FaUser className='icon '/>
        </div>
        <div className='input-box'>
          <input type="password" placeholder='Password' required/>
          <FaLock className='icon'/>
        </div>
        <div className='remember-forgot'>
        <label><input type="checkbox"/>Remember me</label>
        <a href="#">Forgot password?</a>
        </div>
       <button type="submit">Login</button>

       <div className='register'>
        <p>Dont have an account?<a href="#">Register Now</a></p>

       </div>
      </form>
    </div>
  )
}

export default LoginForm