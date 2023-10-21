import React, { useEffect, useState } from 'react';
import Card2 from '../Card2/Card2';
import Header2 from '../Header2/Header2';
import { Link, useLoaderData, useParams } from 'react-router-dom';
// import Brand from '../Brand/Brand';
import { data } from 'autoprefixer';
import Brand2 from '../Brand2/Brand2';
import Slider2 from '../Slider/Slider2';
import ProductSwiper from '../ProductSwiper/ProductSwiper';
import RatingsSlide from '../RatingsSlide/RatingsSlide';

// import Header from '../Header/Header';

const Home = () => {
    const brands = useLoaderData();

    return (
        <div className=''>
            <Header2></Header2>
          <div className='mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto'>
          {
                brands.map((brand, idx)=><Link to={`/home/${brand.brandName}`} key={idx}><Brand2  brand={brand}></Brand2></Link>)
            }
          </div>
          <RatingsSlide></RatingsSlide>
        </div>
    );
};

export default Home;