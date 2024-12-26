import React from 'react'
import Service1 from '../../../assets/image/service1-2.png'


const Design = () => {
  return (
    <div>
            {/* <!-- design section start --> */}
    <section>
        <div className="container max-w-7xl mx-auto text-white">
            <div className="border border-[rgb(33,32,29)] mt-8 mx-12 bg-[rgb(24, 23, 22)]">
                <p className="text-sm  mt-12 ml-12">WEBDESIGN</p>
                <p className="text-6xl font-light  ml-12">Transforming Your Ideas into Reality</p>
                <div className="flex justify-center mt-8 ">
                    <img src={Service1} alt="Service Image" className=""/>
                </div>
                {/* <!-- data table --> */}
                <div className="flex justify-between item-center mx-12 px-4 py-10 border-b">
                    {/* <!-- Heading Section --> */}
                    <div className="flex flex-col justify-center shrink-0">
                        <p className="text-lg font-semibold">Concept</p>
                    </div>
                    {/* <!-- Description Section --> */}
                    <div className="flex flex-col justify-start shrink-0">
                        <p className="text-base">
                            I take time to understand your business needs and audience to develop a unique concept for
                            your
                        </p>
                        <p className="text-base">
                            website. I'll create wireframes that serve as the foundation for your site's design and
                            functionality.
                        </p>
                    </div>
                </div>
                <div className="flex justify-between item-center mx-12 px-4 py-10 border-b">
                    {/* <!-- Heading Section --> */}
                    <div className="flex flex-col justify-center shrink-0">
                        <p className="text-lg font-semibold">UX / Ui Design</p>
                    </div>
                    {/* <!-- Description Section --> */}
                    <div className="flex flex-col justify-start shrink-0 ">
                        <p className="text-base">
                            I'll design a user-friendly interface that is visually appealing and engages your target
                            audience.
                        </p>
                        <p className="text-base">
                            Your website will be created to meet your brand's needs and goals while ensuring a seamless
                            user.
                        </p>
                    </div>
                </div>
                <div className="flex justify-between item-center mx-12 px-4 py-10 ">
                    {/* <!-- Heading Section --> */}
                    <div className="flex flex-col justify-center shrink-0">
                        <p className="text-lg font-semibold">Prototype</p>
                    </div>
                    {/* <!-- Description Section --> */}
                    <div className="flex flex-col justify-start shrink-0">
                        <p className="text-base">
                            With an interactive prototype, you'll have the ability to test your website's functionality
                            before it.
                        </p>
                        <p className="text-base">
                            This will ensure that your website's design and user experience are optimized for your
                            audience's
                        </p>
                        <p className="text-base">
                            needs and preferences.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- design section end --> */}
    </div>
  )
}

export default Design