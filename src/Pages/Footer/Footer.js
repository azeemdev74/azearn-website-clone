import React from 'react';

const Footer = () => {
  return (
    <div className="bg-[#1D2547]">
      <div
        className="flex flex-wrap justify-between px-[10%] py-[5%] md:px-[5%] sm:px-[2%] sm:py-[3%]"
        style={{ marginTop: '10%', paddingTop:'10%'}}
      >
        {/* Left Section */}
        <div className="w-full md:w-1/3 text-center md:text-left mb-8">
          <img
            src="azlogo.png"
            alt="Affiliate Zone Logo"
            className="mx-auto md:mx-0 mb-5"
            style={{ height: '100px', width: '100px' }}
          />
          <p className="text-white text-sm leading-relaxed">
            Welcome to Affiliate Zone. We are providing a platform to our users
            to sell Amazon and many more affiliate products of different
            e-commerce sites.
          </p>
          <div className="flex justify-center md:justify-start gap-3 mt-4">
            <i className="fa fa-facebook text-white text-lg"></i>
            <i className="fa fa-twitter text-white text-lg"></i>
            <i className="fa fa-pinterest text-white text-lg"></i>
          </div>
        </div>

        {/* Our Services Section */}
        <div className="w-full md:w-1/3 mb-8">
          <h5 className="text-white mb-4 text-left px-4 md:text-left">Our Services</h5>
          <ul className="text-white list-none space-y-2 text-left md:text-left">
            <li>Our Products</li>
            <li>Products</li>
            <li>Private Policy</li>
          </ul>
        </div>

        {/* Important Section */}
        <div className="w-full md:w-1/3">
          <h5 className="text-white mb-4 text-center md:text-left">Important</h5>
          <ul className="text-white list-none space-y-2 text-center md:text-left">
            <li>Login</li>
            <li>Sign Up</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-gray-500 text-sm text-center py-4">
        Copyright ©2024 All rights reserved by Affiliate Zone
      </div>
    </div>
  );
};

export default Footer;
