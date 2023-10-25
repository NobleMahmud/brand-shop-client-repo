import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Slider,
} from "@material-tailwind/react";
import Header2 from '../Header2/Header2';
import { AuthContext } from '../../AuthProvider/AuthProvider';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';

const EachProduct = () => {
    const loadedProduct = useLoaderData();
   
    const [product, setProduct] = useState(loadedProduct);

    console.log(product);

    console.log(loadedProduct);


    const { brand, name, photo, description, type, price, rating } = loadedProduct;

    const {user} = useContext(AuthContext)
    console.log(user.email);
    const email = user.email;
    console.log(email);

    const cartProduct = { brand, name, photo, type, price, email, rating, description }
       
    const handleCart =() =>{

        fetch('https://brand-shop-server-kappa-hazel.vercel.app/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cartProduct)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                   icon: 'success',
                   title: 'Success',
                   text: 'Product added to cart!',
                 })
                console.log(data);
                 toast("Product Added");
                
            })
        }

    

    return (
        <div className='h-screen'>
            <Header2></Header2>

            <div style={{backgroundImage:`url(${photo})`}} className="da relative flex min-h-screen backdrop-blur-lg flex-col object-fit bg-cover
            justify-center overflow-hidden bg-gray-50">
                <div className="absolute inset-0 bg-center dark:bg-black"></div>
                <div className="group relative m-0 flex h-96 w-full rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
                    <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-100 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                        <img src={photo} className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 " alt="" />
                    </div>
                    <div className="absolute bottom-0 rounded-xl z-20 h-full flex flex-col justify-end bg-black opacity-0 hover:opacity-70 m-0  ps-4 transition duration-300 ease-in-out  ">
                        <h1 className="font-serif text-2xl font-bold scale-90 text-white shadow-xl">{name}</h1>
                        <h1 className="text-sm font-light text-gray-200 scale-90">{description}</h1>
                        <p className='scale-90 text-xl  text-gray-200'>${price}</p>
                        <CardBody>
                        <CardFooter className="pt-0">
                    <Button
                    onClick={handleCart}
                        ripple={false}
                        fullWidth={true}
                        className='hover:brightness-200'
                        
                    >
                        Add to Cart
                    </Button>
            <ToastContainer />
                </CardFooter>
        
      </CardBody>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EachProduct;