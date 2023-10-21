import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {
    const product = useLoaderData();
    const  {_id, brand, name, photo, type, price, rating, description } =product;

    console.log(product);

    const handleUpdate = event =>{
        event.preventDefault();
        const form = event.target;
        const brand = form.brand.value;
        const name = form.name.value;
        const photo = form.photo.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const updateProduct = {_id, brand, name, photo, type, price, rating, description }
        

        fetch(`https://brand-shop-server-2p91sud42-nobles-projects-263f6853.vercel.app/updateData/${_id}`,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Update Successful!',
                  })
            }
        })

    }
    return (
        <div>
            <section className="bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative flex items-end px-4 pb-10 pt-60 sm:pb-16 md:justify-center lg:pb-24 bg-gray-50 sm:px-6 lg:px-8">
                            <div className="absolute inset-0">
                                <img className="object-cover object-top w-full h-full" src="https://i.ibb.co/mc2dhpd/conor-luddy-IVa-Kks-EZm-ZA-unsplash.jpg" alt="" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

                            <div className="relative">
                                <div className="w-full max-w-xl xl:w-full xl:mx-auto xl:pr-24 xl:max-w-xl">
                                    <h3 className="text-4xl font-bold text-white"> <br className="hidden xl:block" />Become a part of the biggest tech community in the world!</h3>
                                    <ul className="grid grid-cols-1 mt-10 sm:grid-cols-2 gap-x-8 gap-y-4">
                                        <li className="flex items-center space-x-3">
                                            <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                                                <svg className="w-3.5 h-3.5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                                </svg>
                                            </div>
                                            <span className="text-lg font-medium text-white"> Commercial License </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                                                <svg className="w-3.5 h-3.5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                                </svg>
                                            </div>
                                            <span className="text-lg font-medium text-white"> 103 nations </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                                                <svg className="w-3.5 h-3.5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                                </svg>
                                            </div>
                                            <span className="text-lg font-medium text-white"> 120 miilion + shipments worldwide </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                                                <svg className="w-3.5 h-3.5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                                </svg>
                                            </div>
                                            <span className="text-lg font-medium text-white"> 20+ years of loyalty </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
                            <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Add  New Product</h2>
                                <p className="mt-2 text-base text-gray-600">Your products will be  live in just a few steps!</p>

                                <form onSubmit={handleUpdate} method="POST" className="mt-8">
                                    <div className="space-y-5">
                                     
                                        <div className="sm:col-span-3">
                                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">Brand
                                            </label>
                                            <div className="mt-2">
                                                <select id="country" name="brand" autoComplete="country-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                                    <option>Apple</option>
                                                    <option>Samsung</option>
                                                    <option>Sony</option>
                                                    <option>Google</option>
                                                    <option>Intel</option>
                                                    <option>Panasonic</option>
                                                </select>
                                            </div>
                                        </div>

                                        {/*  */}
                                        <div>
                                            <label className="text-base font-medium text-gray-900"> Product Name </label>
                                            <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">

                                                <input
                                                defaultValue={'examplename'}
                                                    type="text"
                                                    name="name"
                                                    placeholder="Enter product name"
                                                    className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="text-base font-medium text-gray-900"> Photo </label>
                                            <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">

                                                <input
                                                    type="text"
                                                    name="photo"
                                                    placeholder="Enter product photo url"
                                                    className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            
                                            {/*  */}
                                        <div className="sm:col-span-3">
                                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">Type
                                            </label>
                                            <div className="mt-2">
                                                <select name="type" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                                    <option>Phone</option>
                                                    <option>Laptop</option>
                                                    <option>Tab</option>
                                                    <option>Head Phone</option>
                                                    <option>Smart Watch</option>
                                                    <option>Smart TV</option>
                                                    <option>Stereo System</option>
                                                </select>
                                            </div>
                                        </div>

                                        {/*  */}
                                        </div>
                                        <div>
                                            <label className="text-base font-medium text-gray-900"> Price </label>
                                            <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">

                                                <input
                                                    type="text"
                                                    name="price"
                                                    placeholder="Enter Price"
                                                    className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="text-base font-medium text-gray-900"> Description </label>
                                            <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                                <input
                                                    type="text"
                                                    name="description"
                                                    placeholder="Enter short description"
                                                    className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="text-base font-medium text-gray-900"> Rating </label>
                                            <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">

                                                <input
                                                    type="text"
                                                    name="rating"
                                                    placeholder="Enter product rating"
                                                    className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                                />
                                            </div>
                                        </div>
                                

                                        <div>
                                            <button
                                                type="submit"
                                                className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                                            >
                                                Update
                                            </button>
                                        </div>
                                    </div>
                                </form>
                              
                            </div>
                        </div>
                    </div>
                </section>
        </div>
    );
};

export default Update;