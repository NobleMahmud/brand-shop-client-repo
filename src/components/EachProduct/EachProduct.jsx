import React, { useEffect, useState } from 'react';
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

const EachProduct = () => {
    const loadedProduct = useLoaderData();
    // const {_id} = loadedProduct;
    const [product, setProduct] = useState(loadedProduct);

    console.log(product);
    // useEffect(()=>{

    //     setProduct(loadedProduct);
    // },[])

    console.log(loadedProduct);


    const { brand, name, photo, description, price, rating } = loadedProduct;
    // setProduct(loadedProduct);
    // console.log((product))

    return (
        <div className='h-screen'>
            <Header2></Header2>
            {/* <Card classNameName="w-96 mx-auto">
                <CardHeader shadow={false} floated={false} classNameName="h-80">
                    <img
                        src={photo}
                        alt="card-image"
                        classNameName="h-full object-cover"
                    />
                </CardHeader>
                <CardBody>
                    <div classNameName="mb-2 flex items-center bg-transparent backdrop-blur-md   justify-between">
                        <Typography color="blue-gray" classNameName="font-medium">
                            {brand} {name}
                        </Typography>
                        <Typography color="blue-gray" classNameName="font-medium">
                            ${price}
                        </Typography>
                    </div>
                    <Typography
                        variant="small"
                        color="gray"
                        classNameName="font-normal opacity-75"
                    >
                        {description}
                    </Typography>
                </CardBody>
                <CardFooter classNameName="pt-0">
                    <Button
                        ripple={false}
                        fullWidth={true}
                        classNameName="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                    >
                        Add to Cart
                    </Button>
                </CardFooter>
            </Card> */}

            {/* <Card
      shadow={false}
      classNameName="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        classNameName="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
      >
        <div classNameName="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody classNameName="relative py-14 px-6 md:px-12">
        <Typography
          variant="h2"
          color="white"
          classNameName="mb-6 font-medium leading-[1.5]"
        >
          How we design and code open-source projects?
        </Typography>
        <Typography variant="h5" classNameName="mb-4 text-gray-400">
          Tania Andrew
        </Typography>
        
      </CardBody>
    </Card> */}

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
                        ripple={false}
                        fullWidth={true}
                        
                    >
                        Add to Cart
                    </Button>
                </CardFooter>
        
      </CardBody>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EachProduct;