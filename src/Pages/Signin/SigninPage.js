import React from 'react'
import './SigninPage.css'
import { useNavigate } from 'react-router-dom'
import InputField from '../../components/InputField/InputField'

function SigninPage() {
  let navigate=useNavigate()
  return (
      <div className='main-container-login px-5'>
    <div className='heading'><span>Login</span></div>
    <div className='slogan-text'><p>Enter Login details to get access</p></div>
    {/* Inputs text field */}
    <div className='d-flex flex-column '>
       <InputField placeholder='Enter Email Address' title='Email Address' type='email' />  
       <InputField placeholder='Enter Password' title='Password' type='password' />  
        
    </div>
    {/* forgot password */}
    <div className='selector2 row'>
      <div className='col-sm-6'>
      <input type='checkbox'/>
      <label>Keep me logged in</label>
      </div>
       <div className='forgot-pass col-sm-6 d-flex justify-content-start justify-content-sm-end '><a href='ab.com'>Forgot Password?</a></div>
    </div>
    {/* signup button */}
    <div className='footerform'> 
        <p>Don’t have an account? <a href='/signup' >Sign Up</a> here</p>
        <button onClick={()=>navigate('/home')}>Login</button>
    </div>
</div>
  
  )
}

export default SigninPage
