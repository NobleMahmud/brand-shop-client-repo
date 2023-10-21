import React from 'react';
import Header2 from '../Header2/Header2';
import { Link } from 'react-router-dom';

const BrandProducts = ({ product, products }) => {
    // console.log(product.brand);
    // console.log(product);
 
   
    
    const handleUpdate =id =>{
        console.log(id);
    }

    return (
        <div>

            {product ?
                <div>
                    <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 hover:px-4 pt-40 max-w-sm mx-auto mt-24 group cursor-pointer  bg-white shadow-xl ring-1 ring-gray-900/5 transition-all hover:-translate-y-2 duration-1000 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                        <img src={product.photo} alt="product" className="absolute inset-0 h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                        <h3 className="z-10 mt-3 hover:text-teal-300 duration-1000 text-3xl font-bold text-white">{product.name} <br /></h3>
                        <div className="z-10 gap-y-1 flex justify-between text-sm overflow-hidden leading-6 text-gray-300">${product.price} <br />
                            <Link to={`/product/${product._id}`}>
                                
                                <a href="#_" className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
                                    <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
                                    
                                    <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                                   
                                    <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                                  
                                    <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                                   
                                    <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                                    <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                                    <span className="relative">Details</span>
                                </a>

                            </Link>
                            <Link to={`/update/${product._id}`} onClick={()=>handleUpdate(product._id)} >
                                <a className="inline-flex sticky bottom-0 px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
                                    <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>

                                    <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>

                                    <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>

                                    <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>

                                    <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                                    <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                                    <span className="relative">Update</span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                :
                <h2 className='text-5xl text-center'>not available</h2>
            }
        </div>
    );
};

export default BrandProducts;