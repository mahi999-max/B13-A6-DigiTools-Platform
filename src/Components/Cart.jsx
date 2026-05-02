import React from 'react';
import CartItem from './CartItem';

const Cart = ({item,handleremove}) => {
    
    console.log(item)
    return (
        <div className='border p-3  w-full flex items-center justify-between'>
            <div className=' gap-3 items-center flex'>
            <div className='text-4xl'>{item.icon}</div>
            <div>
            <div className='text-xl font-bold'>{item.name}</div>
            <div>${item.price}</div>
            </div>
             </div>
            <div onClick={()=>handleremove(item.id)} className='btn'>Remove</div>
       
        </div>
    );
};

export default Cart;