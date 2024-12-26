import React from 'react'
import A_minimalist from '../../../assets/image/A_minimalist-removebg.png'

const Introduction = () => {
  return (
    <div>
    {/* <!-- instudection  section start --> */}
    <section>
        <div className="container mx-auto"> 
                <div className="thembg1 flex justify-center items-center relative">
                    <img src={A_minimalist} alt="" className="relative lg:h-full "/>
                    <div
                        className="text-white text-center justify-items-center absolute bottom-0 flex flex-col justify-center">
                        <span className="lg:text-6xl text-2xl font-semibold font-courier" style={{ fontStyle: 'italic' }} >Web
                            Designer</span>
                        <span className="lg:text-6xl text-2xl font-semibold font-courier"
                            style={{ fontStyle: 'italic' }}>and</span>
                        <span className="lg:text-6xl text-2xl font-semibold font-courier"
                            style={{ fontStyle: 'italic' }}>Developer</span>
                    </div>
                </div>
                <div className="flex flex-col  text-center">
                    <span className="lg:text-xl  text-2xlfont-courier pt-4" style={{ fontStyle: 'italic' }}>Primium web
                        design,
                        development and SEO</span>
                    <span className="text-xl font-courier" style={{ fontStyle: 'italic' }}> services to help your business
                        stand out.</span>
                </div>   
        </div>
    </section>
    {/* <!-- instudection  section end --> */} 
    </div>
  )
}

export default Introduction