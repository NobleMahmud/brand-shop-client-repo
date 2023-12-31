import React, { useContext, useEffect, useState } from 'react';
import Header2 from '../Header2/Header2';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import CartProducts from '../CartProducts/CartProducts';

const MyCart = () => {
    const [products, setProducts] = useState([])
    const {user} = useContext(AuthContext)
    const email = user.email;
    // console.log(email);
    useEffect(()=>{
        fetch(`https://brand-shop-server-kappa-hazel.vercel.app/cart/${email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setProducts(data)
        })
    },[email])
    return (
        <div>
            <Header2></Header2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3'>
                    { products.length>0?
                        products.map((product, idx)=><CartProducts products={products} setProducts={setProducts} key={idx} product={product}></CartProducts>)
                        :
                       <div className=' h-screen w-screen container flex flex-col items-center justify-center'>
                         <h3 className='text-4xl mb-4'>Nothing in cart</h3>
                        <img className='w-1/5' src="https://i.ibb.co/8Kft8tY/shopping-cart-307772-1920.png" alt="" />
                       </div>
                    }
            </div>
        </div>
    );
};

export default MyCart;