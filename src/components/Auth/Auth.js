import React from 'react'
import './Auth.css'
import SigninPage from '../../Pages/Signin/SigninPage'

const Auth = () => {
  return (
  <div className='auth-container'>
<img className='auth-Img' src='bg.jpg'/>

<div className='auth-subContainer'>
<SigninPage/>
</div>
  </div>
  )
}

export default Auth
