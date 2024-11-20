import React from 'react'

// import { useNavigate } from 'react-router-dom'

const Footer = () => {
//    let navigate= useNavigate()
  return (
    <div className=' bg-[#1D2547] px-[30vh]  grid grid-cols-3 py-[15vh] ' style={{marginTop:'10%'}}>
       <div className='container'>
        <div className='footer-left-side row-auto'>
        <div className='footer-logo '>
        <img src='azlogo.png' alt='azearn Logo' style={{height:'30%', width:'30%'}}/>
        <p className='text-white mt-8'>
        Welcome to Affiliate Zone. We are providing a platform to our users to sell amazon and many more affiliate products of different ecommerce sites
        </p>
        <div className='icons flex gap-x-2   '>
       <i className='fa fa-facebook'></i>
       <i className='fa fa-twitter'></i>
       <i className='fa fa-pinterest'></i>
        </div>

        </div>

        </div>
        </div>
        
      
    </div>
  )
}

export default Footer
