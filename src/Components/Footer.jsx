import React from 'react';
import { CiCircleCheck } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io5";


const Footer = () => {
    return (
        <div >
            <div className='px-[200px] py-[120px] bg-[rgb(249,250,252)] '>
                <div className='mt-[50px] text-center'>
                    <h1 className='text-5xl font-bold pb-[20px]'>Get Started in 3 Steps</h1>
                    <p className='text-[#627382] pb-[40px]'>Start using premium digital tools in minutes, not hours.</p>
                </div>
                <div className='card grid grid-cols-3 gap-5'>
                    <div className='border bg-white rounded-xl p-[40px] text-center border-none space-y-[20px]'>
                        <img className="mx-auto block mb-[10px]" src="/assets/user.png" alt="" />
                        <h1 className='font-bold text-2xl'>Create Account</h1>
                        <p className='text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                    <div className='border bg-white rounded-xl p-[40px] text-center border-none space-y-[20px]'>
                        <img src="/assets/package.png" alt="" />
                        <h1 className='font-bold text-2xl'>Choose Products</h1>
                        <p className='text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
                    </div>
                    <div className='border bg-white rounded-xl p-[40px] text-center border-none space-y-[20px]'>
                        <img src="/assets/rocket.png" alt="" />
                        <h1 className='font-bold text-2xl'>Start Creating</h1>
                        <p className='text-[#627382]'>Download and start using your premium tools immediately.</p>
                    </div>

                </div>
            </div>

            <div className='px-[120px] py-[200px]'>
                <div>
                    <div className='text-center'>
                        <h1 className='text-center text-5xl font-bold'>Simple, Transparent Pricing</h1>
                        <div className='text-[#627382] pt-4 pb-10'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</div>
                    </div>
                    <div className='grid grid-cols-3 gap-[10px]'>
                        <div className='border border-none bg-[#F9FAFC] p-[30px] text-[#627382] max-w-[400px]  rounded-xl'>
                            <div className='pr-[100px] pb-[20px]'>
                            <h1 className='text-2xl font-bold text-black'>Starter</h1>
                            <p className=' pb-[24px]'>Perfect for getting started</p>
                            <h1 className='pb-[24px]'><span className='text-4xl font-bold text-black'>$0</span>/Month</h1>
                            <p className='flex items-center'><CiCircleCheck /> <span>Access to 10 free tools</span></p>
                            <p className='flex text-start'><CiCircleCheck/> <span>Basic templates</span></p>
                            <p className='flex items-center'><CiCircleCheck /> <span>Community support</span></p>
                            <p className='flex items-center'><CiCircleCheck /> <span>1 project per month</span></p></div>
                            
                            <button className='text-white bg-gradient-to-r from-blue-800 to-purple-900 w-full p-[10px] rounded-full'>Get Started Free</button>
                    
                        </div>
                        <div className='border border-none bg-[#F9FAFC] p-[24px] text-[#627382] max-w-[400px]  rounded-xl text-white bg-gradient-to-r from-blue-500 to-purple-500'>
                            <div className='pr-[100px] '>
                            <h1 className='text-2xl font-bold'>Pro</h1>
                            <p className=' pb-[24px]'>Best for professionals</p>
                            <h1 className='pb-[24px]'><span className='text-4xl font-bold'>$29</span>/Month</h1>
                            <p className='flex items-center'><CiCircleCheck />Access to 10 premium tools</p>
                            <div className='flex items-start'><CiCircleCheck /><p>Unlimited templates</p></div>
                            <div className='flex items-start'><CiCircleCheck /><p>Priority support</p></div>
                            <div className='flex items-start'><CiCircleCheck /><p>Unlimited project</p></div>
                            <div className='flex items-start'><CiCircleCheck /><p>Cloud sync</p></div>
                            <div className='flex items-start'><CiCircleCheck /><p>Advanced analytics</p></div>
                            </div>
                            <button className='btn btn-ghost btn-primary bg-white w-full p-[10px] rounded-full'>Start pro trial</button>
                        </div>
                        <div className='border border-none bg-[#F9FAFC] p-[24px] text-[#627382] max-w-[400px]  rounded-xl'>
                            <div className='pr-[100px]'>
                            <h1 className='text-2xl font-bold text-black'>Enterprise</h1>
                            <p className=' pb-[24px]'>For teams and businesses</p>
                            <h1 className='pb-[24px]'><span className='text-4xl font-bold text-black'>$99</span>/Month</h1>
                            <p className='flex items-center'><CiCircleCheck /> <span>Everything in Pro</span></p>
                            <p className='flex items-center'><CiCircleCheck /> <span>Team collaboration</span></p>
                            <p className='flex items-center'><CiCircleCheck /> <span>Custom integrations</span></p>
                            <p className='flex items-center'><CiCircleCheck /> <span>Dedicated support</span></p>
                            <p className='flex items-center'><CiCircleCheck /> <span>SLA guarantee</span></p>
                            <p className='flex items-center'><CiCircleCheck /> <span>Custom branding</span></p></div>
                        <button className='text-white bg-gradient-to-r from-blue-800 to-purple-900 w-full p-[10px] rounded-full'>Get Started Free</button>
                        </div>
                    </div>
                </div>
            </div>
                  
        
        <div className='bg-[#101727] pt-[120px] px-[200px] pb-[30px] text-white'>
           <div className='grid grid-cols-4 gap-[20px]'>
             <div>
                <p className='text-3xl font-bold'>Digitools</p>
                <p>Premium digital tools for creators, <br />professionals, and businesses. Work smarter <br />with our suite of powerful tools.</p>
             </div>
             <div>
                <p className='text-xl'>Product</p>
                <p>Features</p>
                <p>Pricing</p> 
                <p>Templates</p> 
                <p>Integrations</p> 
             </div>
             <div>
                <p className='text-xl'>Company</p>
                <p>About</p>
                <p>Blog</p>
                <p>careers</p>
                <p>Press</p>
             </div>
             <div>
                <p className='text-xl'>Resources</p>
                <p>Documentation</p>
                <p>Help Center</p>
                <p>Community</p>
                <p>Contact</p>
             </div>
           </div>
      
        </div>


        </div>
    );
};

export default Footer;