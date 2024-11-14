import React from 'react'
import './Auth.css'
import { Outlet } from 'react-router-dom'

const Auth = () => {
  return (
  <div className='auth-container '>
<img className='auth-Img' src='bg.jpg'/>
<div className='auth-subContainer '>
 <Outlet/>
</div>
  </div>
  )
}

export default Auth
