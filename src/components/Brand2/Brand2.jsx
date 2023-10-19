import React from 'react';

const Brand2 = ({brand}) => {
    const {brandName ,img, logo} = brand;
    // style={{backgroundImage:`url(${photo})`}}
    return (
        
            <div  className="da relative flex rounded-t-xl flex-col object-fit bg-cover
            justify-center overflow-hidden bg-gray-50">
                <div className="absolute inset-0 bg-center dark:bg-black"></div>
                <div className="group relative m-0 flex h-96 w-full rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
                    <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-100 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                        <img src={img} className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" />
                    </div>
                    <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                        <img className='w-full absolute left-36 -top-32' src={logo} alt="" />
                        <h1 className="font-serif text-2xl font-bold text-white shadow-xl">{brandName}</h1>
                        {/* <h1 className="text-sm font-light text-gray-200 shadow-xl">A Little Paradise in Portugal</h1> */}
                    </div>
                </div>
            </div>
    );
};

export default Brand2;