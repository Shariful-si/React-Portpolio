import React from 'react'
import AImage from '../../../assets/image/a.jpg'
import BImage from '../../../assets/image/b.jpg'

const Work = () => {
  return (
    <div>
    {/* <!-- work section start --> */}
    <section>
        <div className="container max-w-7xl mx-auto mt-20">
            <div className="flex justify-between items-center">
                <p className="text-white p-6 lg:text-4xl text-2xl">Selected Work</p>
                <a href="" className="text-white">
                    <i
                        className="fa-solid fa-angle-up thembg1 lg:px-4 px-3 lg:py-4 py-3 m-2 rounded-full origin-center hover:rotate-90 transition-transform duration-300"></i>
                    <span>SEE ALL</span>
                </a>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                <div className="relative group">
                    {/* <!-- Image --> */}
                    <img src={AImage} alt="" className="aspect-video"/>
                    {/* <!-- Icon --> */}
                    <i
                        className="fa-solid fa-angle-up w-12 h-12 thembg1 m-2 rounded-full origin-center hover:rotate-45 transition-transform duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center opacity-0 group-hover:opacity-100"></i>
                    {/* <!-- Text Div --> */}
                    <div
                        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-between items-center border border-gray-500 text-white rounded-lg bg-white/10 backdrop-blur-lg w-10/12">
                        <p className="m-2 text-2xl">Sonic</p>
                        <p className="m-2 text-lg">Web Design</p>
                    </div>
                </div>
                <div className="relative group">
                    <img src={BImage} alt="" className="aspect-video"/>
                    <i
                        className="fa-solid fa-angle-up w-12 h-12 thembg1 m-2 rounded-full origin-center hover:rotate-45 transition-transform duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center opacity-0 group-hover:opacity-100"></i>
                    <div
                        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-between items-center border border-gray-500 text-white rounded-lg bg-white/10 backdrop-blur-lg w-10/12">
                        <p className="m-2 text-2xl">Sonic</p>
                        <p className="m-2 text-lg">Web Design</p>
                    </div>
                </div>
                <div className="relative group">
                    {/* <!-- Image --> */}
                    <img src={BImage} alt="" className="aspect-video"/>
                    {/* <!-- Icon --> */}
                    <a href="" className=""><i
                            className="fa-solid fa-angle-up w-12 h-12 thembg1 m-2 rounded-full origin-center hover:rotate-45 transition-transform duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center opacity-0 group-hover:opacity-100"></i></a>
                    {/* <!-- Text Div --> */}
                    <div
                        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-between items-center border border-gray-500 text-white rounded-lg bg-white/10 backdrop-blur-lg w-10/12">
                        <p className="m-2 text-2xl">Sonic</p>
                        <p className="m-2 text-lg">Web Design</p>
                    </div>
                </div>
                <div className="relative group">
                    <img src={AImage} alt="" className="aspect-video"/>
                    <i
                        className="fa-solid fa-angle-up w-12 h-12 thembg1 m-2 rounded-full origin-center hover:rotate-45 transition-transform duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center opacity-0 group-hover:opacity-100"></i>
                    <div
                        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-between items-center border border-gray-500 text-white rounded-lg bg-white/10 backdrop-blur-lg w-10/12">
                        <p className="m-2 text-2xl">Sonic</p>
                        <p className="m-2 text-lg">Web Design</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- work section end --> */}
    </div>
  )
}

export default Work