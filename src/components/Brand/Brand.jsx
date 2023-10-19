import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";

const Brand = ({ brand }) => {
    const { id, brandName, img, logo } = brand;
    return (
        <div>
            <div>
                <Card
                    shadow={false}
                    className="relative grid hover:brightness-75 max-w-[28rem] h-[400px] items-end justify-center overflow-hidden duration-500 text-center"
                >
                    <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
                    >
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                    </CardHeader>
                    <CardBody className="absolute bottom-8 left-28 md:bottom-12 md:left-20 py-14 flex px-6 md:px-12">
                       
                            <div className=' flex -top-5'>
                            <img className='w-[150px]' src={logo} alt="" />
                            </div>
                            {/* <h3 className='hover:opacity-80 duration-500'>{brandName}</h3> */}
                        
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

export default Brand;