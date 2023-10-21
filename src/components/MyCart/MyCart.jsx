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
        fetch(`https://brand-shop-server-2p91sud42-nobles-projects-263f6853.vercel.app/cart/${email}`)
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
                        <h3 className='text-3xl text center'>Nothing in Cart</h3>
                    }
            </div>
        </div>
    );
};

export default MyCart;