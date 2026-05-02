import React, { use } from 'react';
import Data from './Data';
import { useState } from 'react';
import Cart from './Cart';


const Tools = ({ dataPromise }) => {
    const [box, setbox] = useState(true)
    const [cart, setCart] = useState([])
    const handleCart = (item) => {
        setCart([...cart, item])
    }
    const handleremove=(id)=>{
        const filteredCart=cart.filter(item=>item.id!==id)
        setCart(filteredCart)
    }
    const totalCost=cart.reduce((total,item)=>total+parseFloat(item.price),0)
    const totalId=cart.reduce((total,item)=>total+parseFloat(item.id),0)
    const datas = use(dataPromise)
    return (
        <div className='md:px-[200px] md:py-[120px] px-[50px] py-[30px]'>
            <div className='text-center space-y-[20px]'>
                <p className='text-5xl font-bold'>Premium Digital Tools</p>
                <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
                <div className='pb-[40px] flex'>
                    <div className={box ? "btn btn-primary" : "btn"} onClick={() => setbox(true)}>Products</div>
                    <div className={!box ? "btn btn-primary" : "btn"}
                        onClick={() => setbox(false)}>Cart</div>
                </div>
            </div>


            <div className='grid grid-cols-1 gap-5 md:grid-cols-3'>
                {
                    box ? (
                        datas.map(data => {
                            return <Data data={data} handleCart={handleCart}></Data>
                        })) :
                        <div className='grid gap-3 w-full'>
                            <h2 className='text-2xl font-bold pb-4'>Your Cart</h2>
                            {(cart.length === 0 ? <p className='col-span-3 text-4xl  text-gray-400 font-bold text-center'>No Elements Here</p> : cart.map(item => <Cart className="grid grid-cols-1 w-full" item={item} handleremove={handleremove}><span>{cart.length}</span></Cart>

                            )

                            )}
                            <div className='font-bold text-2xl border p-6 bg-blue-200'>Total Cost:${totalCost.toFixed(2)} </div>
                        </div>
                }
            </div>

        </div>
    );
};

export default Tools;