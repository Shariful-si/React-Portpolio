import React from 'react'
import Mypic from '../../../assets/image/A_minimalist-removebg.png'

const AboutMe = () => {
  return (
    <div>
    {/* <!-- about section start --> */}
    <section>
        <div className="container max-w-7xl mx-auto mt-20 text-white ">
            <div className="thembg1 flex justify-center items-center relative">
                <img src={Mypic} alt="" className="lg:h-full "/>
                <div className="text-white flex justify-between absolute bottom-40 w-full lg:px-32 px-8">
                    <div className="lg:text-7xl text-4xl font-semibold font-courier italic">SHARIFUL</div>
                    <div className="lg:text-7xl text-4xl font-semibold font-courier italic">ISLAM</div>
                </div>
            </div>
            <div className="flex justify-items-center items-center">
                <div className="w-1/2 p-6 text-center tracking-wider italic">
                    <span className="text-3xl">A website that leaves </span>
                    <span className="text-3xl">a lasting impression!</span>
                </div>
                <div className="w-1/2 p-8">
                    <span className="text-xl  text-center">Hi, I'm Arik Andersson - a freelancer specializing in premium web
                        design,
                        development, and SEO services. I'm passionate about creating unique and effective solutions for
                        my clients, and I bring a personal touch to every project. Let's work together to bring your
                        vision to life!</span>
                    <div className="flex gap-6 mt-6">
                        <a href="#" target="_blank" className="text-white text-lg hover:text-gray-700">
                            <i className="fab fa-facebook text-4xl"></i>
                        </a>
                        <a href="#" target="_blank" className="text-white text-lg hover:text-gray-700">
                            <i className="fab fa-instagram text-4xl"></i>
                        </a>
                        <a href="#" target="_blank" className="text-white text-lg hover:text-gray-700">
                            <i className="fab fa-linkedin text-4xl"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- about section end --> */}
    </div>
  )
}

export default AboutMe