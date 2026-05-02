import React from 'react';

const Data = ({data,handleCart}) => {
    return (
        <div>
            <div className='border rounded-xl p-4'>
              <button className=' w-full text-right text-xl font-bold text-gray-400'>{data.tag}</button><br />
              <button className='text-3xl'>{data.icon}</button>
              <div className='text-2xl font-bold pb-2'>{data.name}</div>
              <div className='text-[#627382] pb-2'>{data.description}</div>
              <div className='pb-2'><span className='font-bold text-2xl'>${data.price}</span>/{data.period}</div>
              <div className='pb-2'>{data.features}</div>
              <button onClick={()=>handleCart(data)} className='btn w-full bg-blue-600 text-white rounded-full p-2'>Buy Now</button>
            </div>
            
        </div>
    );
};

export default Data;