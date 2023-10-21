import React, { useEffect } from "react"
import Glide from "@glidejs/glide"

const FeaturedSlider = () => {

    // const [brands, setBrands] = useState([])

    // useEffect(()=>{
    //     fetch('/brands.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data);
    //         setBrands(data)
    //     })
    // },[])

    useEffect(() => {
        const slider = new Glide(".glide-05", {
          type: "carousel",
          focusAt: "center",
          perView: 3,
          autoplay: true,
          autoplay: 700,
          animationDuration: 3000,
          gap: 24,
          classNames: {
            nav: {
              active: "[&>*]:bg-wuiSlate-700",
            },
          },
          breakpoints: {
            1024: {
              perView: 2,
            },
            640: {
              perView: 1,
            },
          },
        }).mount()
    
        return () => {
          slider.destroy()
        }
      }, [])
    return (
        <div>
            <div className="mt-40">
                <h3 className="text-center text-5xl font-medium text-gray-600 ">Featured</h3>
            {/*<!-- Component: Carousel with indicators outside --> */}
      <div className="glide-05 relative w-full -mt-10">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            
            <li>
              <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 hover:px-4 pt-40 max-w-sm mx-auto mt-24 group cursor-pointer  bg-white shadow-xl ring-1 ring-gray-900/5 transition-all hover:-translate-y-2 duration-1000 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                        <img src="https://i.ibb.co/JrcFwZq/newsroom-vision-hx-1-1.jpg" alt="product" className="absolute inset-0 h-full w-full object-cover" />
                            <div>
                                <a className="inline-flex sticky bottom-0 px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
                                    <span className="relative"></span>
                                </a>
                            </div>
                        </div>
                    
            </li>
            <li>
              <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 hover:px-4 pt-40 max-w-sm mx-auto mt-24 group cursor-pointer  bg-white shadow-xl ring-1 ring-gray-900/5 transition-all hover:-translate-y-2 duration-1000 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                        <img src="https://i.ibb.co/JrcFwZq/newsroom-vision-hx-1-1.jpg" alt="product" className="absolute inset-0 h-full w-full object-cover" />
                            <div>
                                <a className="inline-flex sticky bottom-0 px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
                                    <span className="relative"></span>
                                </a>
                            </div>
                        </div>
                    
            </li>
            <li>
              <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 hover:px-4 pt-40 max-w-sm mx-auto mt-24 group cursor-pointer  bg-white shadow-xl ring-1 ring-gray-900/5 transition-all hover:-translate-y-2 duration-1000 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                        <img src="https://i.ibb.co/JrcFwZq/newsroom-vision-hx-1-1.jpg" alt="product" className="absolute inset-0 h-full w-full object-cover" />
                            <div>
                                <a className="inline-flex sticky bottom-0 px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
                                    <span className="relative"></span>
                                </a>
                            </div>
                        </div>
                    
            </li>
           

          </ul>
        </div>
        {/*    <!-- Indicators --> */}
        <div
          className="flex w-full items-center justify-center gap-2"
          data-glide-el="controls[nav]"
        >
          <button
            className="group p-4"
            data-glide-dir="=0"
            aria-label="goto slide 1"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=1"
            aria-label="goto slide 2"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=2"
            aria-label="goto slide 3"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=3"
            aria-label="goto slide 4"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
        </div>
      </div>
      {/*<!-- End Carousel with indicators outside --> */}
        </div>
        </div>
    );
};

export default FeaturedSlider;