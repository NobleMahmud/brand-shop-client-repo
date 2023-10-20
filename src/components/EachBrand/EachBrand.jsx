import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BrandProducts from "../BrandProducts/BrandProducts";
import Header2 from "../Header2/Header2";

const EachBrand = () => {
    const [products, setProducts] = useState([])
    const {brandName} = useParams();
    // console.log(brandName);
   useEffect(()=>{
    fetch(`http://localhost:5000/addproduct/${brandName}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        setProducts(data);
    })
   },[brandName])

//    const allProduct = products.filter(pro=>pro.brand !=='Samsung')
console.log(products);
    
    return (
        <div>
            <Header2></Header2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 pb-24">
                {
                    products.map((product, idx)=><BrandProducts key={idx} product={product} products={products}></BrandProducts>)
                }
            </div>
        </div>
    );
};

export default EachBrand;