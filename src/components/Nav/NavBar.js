import React from 'react';
import './Navbar.css'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function MyNavBar() {
 let navigate=useNavigate()
  const [menuBtn, setMenuBtn] = useState(false)
  return (
<>
<div
      className="d-flex justify-content-between align-items-center px-5"
      style={{ backgroundColor: "#F2E1D9" }}>
      
      <div className="d-flex align-items-center">
        <img src="azlogo.png" alt="logo" style={{height:'20%', width:'60px'}}/>
     <div id='list' className=" d-none d-lg-flex  mx-2 ">
     <strong className="mx-3">Home</strong>
     <strong className="mx-3">Product</strong>
     <strong className="mx-3">Listings</strong>
     <strong className="mx-3">Create Listing</strong>
     <strong className="mx-3">About</strong>
     <strong className="mx-3">Contact</strong>
    
     </div>
      </div>
      <strong id='account-btn'
      onClick={()=>navigate('/')}
      className='d-sm-block d-none'>My Account</strong>
    </div >
    <div  className="d-flex flex-column d-lg-none  p-2" style={{backgroundColor:'#4c4c4c'}}>
     <div className="d-flex justify-content-end"> <button onClick={()=>setMenuBtn(!menuBtn)} className="btn btn-dark">Menu <i className="fa fa-bars"></i></button></div>
      {menuBtn && <ul style={{listStyleType:'none', }} className="p-0 text-white ">
        <li className="my-2">Home</li>
        <li className="my-2">Product</li>
        <li className="my-2">Listings</li>
        <li className="my-2">Create Listing</li>
        <li className="my-2">About</li>
        <li className="my-2">Contact</li>
      </ul>}
    </div>
</>

  );
}

export default MyNavBar;
