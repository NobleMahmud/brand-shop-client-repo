import React from 'react';

const CartProducts = ({product}) => {
    const {brand, name, photo, type, price, email, rating, description} = product;
    return (
        <div>
            <div>
                    <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8  pt-40 max-w-sm mx-auto mt-24 group cursor-pointer  bg-white shadow-xl ring-1 ring-gray-900/5  hover:opacity-80 duration-1000 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                        <img src={photo} alt="product" className="absolute inset-0 h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                        <h3 className="z-10 mt-3 hover:text-teal-300 duration-1000 text-3xl font-bold text-white">{name} <br /></h3>
                        <div className="z-10 gap-y-1 text-sm overflow-hidden leading-6 text-gray-300">${price} <br />
                            
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default CartProducts;