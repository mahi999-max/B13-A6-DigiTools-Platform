import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm md:px-[200px] ">
  <div className="navbar-start">
    
     <h1 className='md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>Digitools</h1>
    </div>
  <div className=" hidden md:navbar-center md:flex">
    <a className="btn btn-ghost">Products</a>
    <a className="btn btn-ghost">Features</a>
    <a className="btn btn-ghost">Pricing</a>
    <a className="btn btn-ghost ">Testimonials</a>
    <a className="btn btn-ghost">FAQ</a>
  </div>
  <div className="navbar-end md:navbar-end md:flex">
    <button className="btn btn-ghost btn-circle">
      <img src="/assets/products/shopping-cart.png" alt="" />
    </button>
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        Login 
      </div>
    </button>
    <button className='btn btn-ghost  bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full'>Get Started</button>
  </div>
</div>
        </div>
    );
};

export default Navbar;