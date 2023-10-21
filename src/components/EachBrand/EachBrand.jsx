import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BrandProducts from "../BrandProducts/BrandProducts";
import Header2 from "../Header2/Header2";
import ProductSlide from "../ProductSlide/ProductSlide";

const EachBrand = () => {
    const [products, setProducts] = useState([])
    const { brandName } = useParams();
    // console.log(brandName);
    useEffect(() => {
        fetch(`https://brand-shop-server-2p91sud42-nobles-projects-263f6853.vercel.app/addproduct/${brandName}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setProducts(data);
            })
    }, [brandName])

    const [brands, setBrands] = useState([])
    useEffect(() => {
        fetch('/brands.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBrands(data)
            })
    }, [])

    const singleBrand = brands.find(brand=>brand.brandName == brandName);   

    console.log(brands);

    console.log(products);

    return (
        <div>
            <Header2></Header2>
            {
                products.length > 0 && <ProductSlide singleBrand={singleBrand}></ProductSlide>
            }
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 pb-24">

                {
                    products.length > 0 ?
                        products.map((product, idx) =>
                            <BrandProducts key={idx} product={product} products={products}></BrandProducts>)
                        :
                        <h3 className="text-5xl text-center">Not available</h3>
                }
            </div>
        </div>
    );
};

export default EachBrand;