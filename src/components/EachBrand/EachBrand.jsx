import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BrandProducts from "../BrandProducts/BrandProducts";
import Header2 from "../Header2/Header2";
import ProductSlide from "../ProductSlide/ProductSlide";

const EachBrand = () => {
    const [products, setProducts] = useState(null)
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
            products &&    products.length > 0 && <ProductSlide singleBrand={singleBrand}></ProductSlide>
            }
            {
                products ? <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 pb-24">

                {
                    products.length > 0 ?
                        products.map((product, idx) =>
                            <BrandProducts key={idx} product={product} products={products}></BrandProducts>)
                        :
                        <div className="w-screen h-screen container flex justify-center items-center">
                            <img className="w-1/2" src="https://i.ibb.co/cw16znF/error-404.jpg" alt="" />
                        </div>
                }
            </div> : <>
            <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto animate-pulse">
        <h1 className="w-48 h-2 mx-auto bg-gray-200 rounded-lg dark:bg-gray-700"></h1>

        <p className="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
        <p className="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg sm:w-80 dark:bg-gray-700"></p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 lg:grid-cols-3">
            <div className="w-full ">
                <div className="w-full h-64 bg-gray-300 rounded-lg md:h-72 dark:bg-gray-600"></div>
                
                <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>

            <div className="w-full ">
                <div className="w-full h-64 bg-gray-300 rounded-lg md:h-72 dark:bg-gray-600"></div>
                
                <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>

            <div className="w-full ">
                <div className="w-full h-64 bg-gray-300 rounded-lg md:h-72 dark:bg-gray-600"></div>
                
                <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>
        </div>
    </div>
</section>
            </>
            }
        </div>
    );
};

export default EachBrand;