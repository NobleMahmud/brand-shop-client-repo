import React, { useState } from 'react';
import Swal from 'sweetalert2';

const CartProducts = ({ product, products, setProducts }) => {
    const {_id, brand, name, photo, type, price, email, rating, description } = product;

    

    const handleDelete = id =>{
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://brand-shop-server-2p91sud42-nobles-projects-263f6853.vercel.app/cart/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })

        const remaining = products.filter(pro=>pro._id !== _id);
        setProducts(remaining)

    }
    return (
        <div>
            <div>
                <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8  pt-40 max-w-sm mx-auto mt-24 group cursor-pointer  bg-white shadow-xl ring-1 ring-gray-900/5  hover:opacity-80 duration-1000 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                    <img src={photo} alt="product" className="absolute inset-0 h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                    <h3 className="z-10 mt-3 hover:text-teal-300 duration-1000 text-3xl font-bold text-white">{name} <br /></h3>
                    <div className="z-10 gap-y-1 text-sm overflow-hidden leading-6 text-gray-300">${price} <br />

                        <a onClick={()=>handleDelete(_id)} className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
                            <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900 px-4">Delete</span>
                            <span className="absolute inset-0 border-2 border-white rounded-full"></span>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartProducts;