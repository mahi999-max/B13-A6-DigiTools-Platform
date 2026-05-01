import React from 'react';
import { FaRegDotCircle } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen px-[200px] py-[85px]">
  <div className="hero-content flex-col lg:flex-row-reverse">
        <img
      src="/assets/banner.png"
      className="max-w-sm rounded-lg"
    />
    <div>
        <span className='border  bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent border-none p-[10px] rounded-full  bg-[#E1E7FF]'> <FaRegDotCircle /> New: AI-Powered Tools Available</span>
      <h1 className="text-5xl font-bold">Supercharge Your Digital Workflow</h1>
      <p className="py-6 text-[#627382]">
        Access premium AI tools, design assets, templates, and productivity
software—all in one place. Start creating faster today. <br />
Explore Products
      </p>
      <div className='flex gap-5'>
      <button className="btn btn-primary rounded-full">Explore Products</button>
<button className='btn btn-ghost rounded-full btn-primary'><FaPlay />
Watch Demo</button>
      </div>
    </div>
  </div>
</div>

<div className='bg-gradient-to-r from-blue-800 to-purple-900 text-white mx-[200px] py-[60px] flex'>
<div className='mx-[125px] space-x-[12px]'>
    <h1 className='text-5xl font-bold'>50K+</h1>
    <p>Active Users</p>
</div>
<div className='mx-[125px] space-x-[12px]'>
    <h1 className='text-5xl font-bold'>200+</h1>
    <p>Premium Tools</p>
</div>
<div className='mx-[125px] space-x-[12px]'>
   <h1 className='text-5xl font-bold'>4.9</h1>
    <p>Rating</p>
</div>
</div>
        </div>
    );
};

export default Banner;