import React from 'react'
import IntroPic from '../../../assets/image/service1.avif'

const IntroService = () => {
  return (
    <div>
            {/* <!-- into Service section start --> */}
    <section>
        <div className="container max-w-7xl mx-auto text-white bg-black">
            <div className="flex flex-col text-center text-9xl font-light  font-sans">
                <span className="mt-52">Web Design</span>
                <span className="italic">& framer</span>
            </div>
            <div className="flex flex-col text-center text-2xl mt-6">
                <span className="">Premium Web Design, Development, and SEO services to </span>
                <span className="italic">help your business stand out.</span>
            </div>
            <div className="text-center mt-8">
                <i className="fa-solid fa-arrow-down py-2.5 px-3 rounded-full border hover:-rotate-90 transition-transform duration-300"></i>
                <span className="p-2">MY SERVICES</span>
            </div>
            <div className="mt-8">
                <img src={IntroPic} alt="" className=""/>
            </div>
            <div className="flex justify-between text-center mt-12 mx-12">
                <div className="flex flex-col">
                    <span className="text-xl">Clients</span>
                    <span className="text-6xl">150+</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-xl"> Projects</span>
                    <span className="text-6xl"> 300+</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-xl"> Happy Clients</span>
                    <span className="text-6xl">100%</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-xl"> Followers</span>
                    <span className="text-6xl"> 100k</span>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- into Service section end --> */}
    </div>
  )
}

export default IntroService