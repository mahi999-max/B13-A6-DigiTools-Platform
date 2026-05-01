import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm px-[200px]">
  <div className="navbar-start">
    
     <h1 className='text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>Digitools</h1>
    </div>
  <div className="navbar-center">
    <a className="btn btn-ghost">Products</a>
    <a className="btn btn-ghost">Features</a>
    <a className="btn btn-ghost">Pricing</a>
    <a className="btn btn-ghost ">Testimonials</a>
    <a className="btn btn-ghost">FAQ</a>
  </div>
  <div className="navbar-end">
    <button className="btn btn-ghost btn-circle">
      <img src="/assets/products/shopping-cart.png" alt="" />
    </button>
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        Login 
      </div>
    </button>
    <button className='btn btn-ghost  bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full mx-[5px]'>Get Started</button>
  </div>
</div>
        </div>
    );
};

export default Navbar;