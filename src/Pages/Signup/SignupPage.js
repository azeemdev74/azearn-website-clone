import React from 'react'
import './SignupPage.css'
import { useNavigate } from 'react-router-dom'
import InputField from '../../components/InputField/InputField'


function SignupPage() {
    let navigate=useNavigate()
    
  return (
    <div className='d-flex justify-content-center align-items-center bg-info'style={{height:'100vh'}}>
        <div className='main-container-signup'>
        <div className='heading'><span>Sign Up</span></div>
        <div className='slogan-text'><p>Create your account to get full access</p></div>
        {/* Inputs text field */}
        <div className='inputs'>
             <InputField placeholder='Enter your Name' title='Full Name' type='text'/>
             <InputField placeholder='Enter your email' title='Email Address' type='email'/>
             <InputField placeholder='Enter password' title='Password' type='password'/>
             <InputField placeholder='Confirm password' title='Confirm Password' type='password'/>
        </div>
        {/* selector */}
        <div className='selector'>
            <label > I Am A:</label>
            <select className='select'>
                <option>Seller</option>
                <option>Buyer</option>
            </select>  
        </div>
        {/* signup button */}
        <div className='footerform d-flex align-items-center'> 
            <p>Already have an account? <a href='/'>Login</a> here</p>
            <button onClick={()=>navigate('/home')}>Sign Up</button>
        </div>
    </div>
    </div>
  )
}

export default SignupPage
