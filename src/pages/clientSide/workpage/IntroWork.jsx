import React from 'react'
import Service1 from '../../../assets/image/service1-1.png'
import Service2 from '../../../assets/image/service1-2.png'
import Service3 from '../../../assets/image/service1-3.png'
import { Link } from 'react-router-dom'


const IntroWork = () => {
  return (
    <div>
            {/* <!-- intro work section start --> */}
    <section>
        <div className="container max-w-7xl mx-auto  mb-12 text-white">
            <div className="flex flex-col justify-between items-center mb-8">
                <span className="text-7xl font-light p-4 mt-32">Work</span>
                <span className="">My latest web design projects and see how we can </span>
                <span className="">help bring your ideas to life.</span>
                
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                <div className="relative group">
                    {/* <!-- Image --> */}
                    <Link to="/work-detail" className=""><img src={Service1} alt="" className="aspect-[10:16]"/></Link>
                    
                    {/* <!-- Icon --> */}
                    <Link to="/work-detail" className=""><i
                        className="fa-solid fa-angle-up w-12 h-12 thembg1 m-2 rounded-full origin-center hover:rotate-45 transition-transform duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center opacity-0 group-hover:opacity-100"></i></Link>
                    {/* <!-- Text Div -->/ */}
                    <div
                        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-between items-center border border-gray-500 text-white rounded-lg bg-white/10 backdrop-blur-lg w-10/12">
                        <p className="m-2 text-2xl">Sonic</p>
                        <p className="m-2 text-lg">Web Design</p>
                    </div>
                </div>
                <div className="relative group">
                    <Link to="/work-detail" className=""><img src={Service2} alt="" className="aspect-[10:16]"/></Link>
                    <Link to="/work-detail" className=""><i
                        className="fa-solid fa-angle-up w-12 h-12 thembg1 m-2 rounded-full origin-center hover:rotate-45 transition-transform duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center opacity-0 group-hover:opacity-100"></i></Link>
                    <div
                        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-between items-center border border-gray-500 text-white rounded-lg bg-white/10 backdrop-blur-lg w-10/12">
                        <p className="m-2 text-2xl">Sonic</p>
                        <p className="m-2 text-lg">Web Design</p>
                    </div>
                </div>
                <div className="relative group ">
                    {/* <!-- Image --> */}
                    <Link to="/work-detail" className=""><img src={Service3} alt="" className="aspect-[10:16]"/></Link>
                    {/* <!-- Icon --> */}
                    <Link to="/work-detail" className=""><i
                            className="fa-solid fa-angle-up w-12 h-12 thembg1 m-2 rounded-full origin-center hover:rotate-45 transition-transform duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center opacity-0 group-hover:opacity-100"></i></Link>
                    {/* <!-- Text Div --> */}
                    <div
                        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-between items-center border border-gray-500 text-white rounded-lg bg-white/10 backdrop-blur-lg w-10/12">
                        <p className="m-2 text-2xl">Sonic</p>
                        <p className="m-2 text-lg">Web Design</p>
                    </div>
                </div>
                <div className="relative group">
                    <Link to="/work-detail" className=""><img src={Service1} alt="" className="aspect-[10:16]"/></Link>
                    <Link to="/work-detail" className=""><i
                        className="fa-solid fa-angle-up w-12 h-12 thembg1 m-2 rounded-full origin-center hover:rotate-45 transition-transform duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center opacity-0 group-hover:opacity-100"></i></Link>
                    <div
                        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-between items-center border border-gray-500 text-white rounded-lg bg-white/10 backdrop-blur-lg w-10/12">
                        <p className="m-2 text-2xl">Sonic</p>
                        <p className="m-2 text-lg">Web Design</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- intro work section end --> */}
    </div>
  )
}

export default IntroWork