import React from 'react'
import { FaArrowRight } from "react-icons/fa6";


const Service = () => {
    return (
        <div>
            {/* <!-- service section start  --> */}
            <section>
                <div className="container max-w-7xl mx-auto text-white">
                    <div className="relative overflow-hidden">
                        <div className=" mt-8">
                            <div className="flex justify-center items-center">
                                <FaArrowRight />
                                <span className="p-2 text-white">MY SERVICES</span>
                            </div>
                        </div>
                        <marquee behavior="scroll" direction="left" scrollamount="5"
                            className="flex justify-between lg:px-12 px-8 py-4 text-white text-4xl space-x-20 mt-6">
                            <i className="fa-solid fa-subscript"></i>
                            <i className="fa-solid fa-strikethrough"></i>
                            <i className="fa-solid fa-icons"></i>
                            <i className="fa-solid fa-object-ungroup"></i>
                            <i className="fa-solid fa-cubes"></i>
                            <i className="fa-solid fa-compass-drafting"></i>
                            <i className="fa-solid fa-subscript"></i>
                            <i className="fa-solid fa-strikethrough"></i>
                            <i className="fa-solid fa-icons"></i>
                            <i className="fa-solid fa-object-ungroup"></i>
                            <i className="fa-solid fa-cubes"></i>
                            <i className="fa-solid fa-compass-drafting"></i>
                        </marquee>
                    </div>
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mx-4 mt-6">
                        <div className="card px-4 py-3 text-start rounded-md bg-[rgb(35,33,30)]">
                            <p className="">
                                WEB DESIGN
                            </p>
                            <span className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis tempora
                                consequuntur eius voluptatibus officiis mollitia facilis, ipsam odio vel aliquid?</span>
                            <div className="">
                                <a href="#" className="">
                                    <i
                                        className="fa-solid fa-angle-up thembg1 px-4 py-4 m-2 rounded-full origin-center hover:rotate-90 transition-transform duration-300"></i>
                                    <span>ABOUT WEBDESIGN</span>
                                </a>
                            </div>
                        </div>
                        <div className="card px-4 py-3 text-start rounded-md bg-[rgb(35,33,30)]">
                            <p className="">
                                DEVELOPMENT
                            </p>
                            <span className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis tempora
                                consequuntur eius voluptatibus officiis mollitia facilis, ipsam odio vel aliquid?</span>
                            <div className="">
                                <i
                                    className="fa-solid fa-angle-up thembg1 px-4 py-4 m-2 rounded-full origin-center hover:rotate-90 transition-transform duration-300"></i>
                                <span>ABOUT DEVELOPMENT</span>
                            </div>
                        </div>
                        <div className="card px-4 py-3 text-start rounded-md bg-[rgb(35,33,30)]">
                            <p className="">
                                SEO SERVICE
                            </p>
                            <span className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis tempora
                                consequuntur eius voluptatibus officiis mollitia facilis, ipsam odio vel aliquid?</span>
                            <div className="">
                                <i
                                    className="fa-solid fa-angle-up thembg1 px-4 py-4 m-2 rounded-full origin-center hover:rotate-90 transition-transform duration-300"></i>
                                <span>ABOUT SEO</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- service section end  --> */}
        </div>
    )
}

export default Service