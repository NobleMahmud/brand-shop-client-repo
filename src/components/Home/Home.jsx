import React from 'react';
import Slider from '../Slider/Slider';
import TabDesign from '../TabDesign/TabDesign';
import Card2 from '../Card2/Card2';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <h3>this is home</h3>
            <Header></Header>
            <TabDesign></TabDesign>
            <Card2></Card2>
            <Slider></Slider>
        </div>
    );
};

export default Home;