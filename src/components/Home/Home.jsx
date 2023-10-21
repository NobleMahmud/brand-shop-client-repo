import React, { useEffect, useState } from 'react';
import Card2 from '../Card2/Card2';
import Header2 from '../Header2/Header2';
import { Link, useLoaderData, useParams } from 'react-router-dom';
// import Brand from '../Brand/Brand';
import { data } from 'autoprefixer';
import Brand2 from '../Brand2/Brand2';
import Slider2 from '../Slider/Slider2';
import ProductSwiper from '../ProductSwiper/ProductSwiper';



const Home = () => {
    const brands = useLoaderData();

    return (
        <div>
            <Header2></Header2>
            <div style={{backgroundImage:'url("https://i.ibb.co/5js22PY/computer-3174729.jpg")'}} className='h-96 flex items-center flex-col-reverse justify-center md:h-[700px] bg-cover '>
              <h3 className='text-4xl font-bold text-gray-200'>Unlocking Tomorrow's Technology Today</h3>
               <img className='w-1/3 h-1/2 rounded-xl' src="https://i.ibb.co/68H34T4/INNOVATION-X-removebg-preview.png" alt="" />
            </div>
          <div  className='mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto'>
          {
                brands.map((brand, idx)=><Link to={`/home/${brand.brandName}`} key={idx}><Brand2  brand={brand}></Brand2></Link>)
            }
          </div>
          
        </div>
    );
};

export default Home;