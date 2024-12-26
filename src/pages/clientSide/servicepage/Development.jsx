import React from 'react'
import Service3 from '../../../assets/image/service1-3.png'

const Development = () => {
  return (
    <div>
            {/* <!-- development section start --> */}
    <section>
        <div className="container max-w-7xl mx-auto text-white">
            <div className="border border-[rgb(33,32,29)] mt-8 mx-12 bg-[rgb(24, 23, 22)]">
                <p className="text-sm  mt-12 ml-12">DEVELOPMENT</p>
                <p className="text-6xl font-light  ml-12">Developing High-Performance</p>
                <p className="text-6xl font-light  ml-12">Websites and Web Applications</p>
                <div className="flex justify-center mt-8 ">
                    <img src={Service3} alt="Service Image" className=""/>
                </div>
                {/* <!-- data table --> */}
                <div className="flex justify-between item-center mx-12 px-4 py-10 border-b">
                    {/* <!-- Heading Section --> */}
                    <div className="flex flex-col justify-center shrink-0">
                        <p className="text-lg font-semibold">Framer</p>
                    </div>
                    {/* <!-- Description Section --> */}
                    <div className="flex flex-col justify-start shrink-0">
                        <p className="text-base">
                            I specialize in developing web applications using Framer. From custom animations to complex sharif
                        </p>
                        <p className="text-base">
                            interactions, I bring your web app to life.
                        </p>
                    </div>
                </div>
                <div className="flex justify-between item-center mx-12 px-4 py-10 border-b">
                    {/* <!-- Heading Section --> */}
                    <div className="flex flex-col justify-center shrink-0">
                        <p className="text-lg font-semibold">CMS Integration</p>
                    </div>
                    {/* <!-- Description Section --> */}
                    <div className="flex flex-col justify-start shrink-0 ">
                        <p className="text-base">
                            I can help you streamline your content management process by integrating a CMS into your website. 
                        </p>
                        <p className="text-base">
                            I can help you streamline your content management process by integrating a CMS into your website. 
                        </p>
                    </div>
                </div>
                <div className="flex justify-between item-center mx-12 px-4 py-10 ">
                    {/* <!-- Heading Section --> */}
                    <div className="flex flex-col justify-center shrink-0">
                        <p className="text-lg font-semibold">WEb Design System</p>
                    </div>
                    {/* <!-- Description Section --> */}
                    <div className="flex flex-col justify-start shrink-0">
                        <p className="text-base">
                            I use a modular design approach to create a web design system that ensures consistency throughout 
                        </p>
                        <p className="text-base">
                            your website. This results in a professional and cohesive online presence.
                        </p>
                        <p className="text-base">
                            needs and preferences.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- development section end --> */}
    </div>
  )
}

export default Development