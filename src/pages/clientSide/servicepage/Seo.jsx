import React from 'react'
import Service1 from '../../../assets/image/service1-2.png'

const Seo = () => {
  return (
    <div>
        
    {/* <!-- SEO and Content section start --> */}
    <section>
        <div className="container max-w-7xl mx-auto text-white">
            <div className="border border-[rgb(33,32,29)] mt-8 mx-12 bg-[rgb(24, 23, 22)]">
                <p className="text-sm  mt-12 ml-12">SEO AND CONTENT</p>
                <p className="text-6xl font-light ml-12">Boosting Your Website's Organic </p>
                <p className="text-6xl font-light ml-12">Search Traffic</p>
                <div className="flex justify-center mt-8 ">
                    <img src={Service1} alt="Service Image" className=""/>
                </div>
                {/* <!-- data table --> */}
                <div className="flex justify-between item-center mx-12 px-4 py-10 border-b">
                    {/* <!-- Heading Section --> */}
                    <div className="flex flex-col justify-center shrink-0">
                        <p className="text-lg font-semibold">Research</p>
                    </div>
                    {/* <!-- Description Section --> */}
                    <div className="flex flex-col justify-start shrink-0">
                        <p className="text-base">
                            I conduct thorough research to identify the best keywords and strategies to improve your website's
                        </p>
                        <p className="text-base">
                            search engine ranking.
                        </p>
                    </div>
                </div>
                <div className="flex justify-between item-center mx-12 px-4 py-10 border-b">
                    {/* <!-- Heading Section --> */}
                    <div className="flex flex-col justify-center shrink-0">
                        <p className="text-lg font-semibold">SEO Ranking</p>
                    </div>
                    {/* <!-- Description Section --> */}
                    <div className="flex flex-col justify-start shrink-0 ">
                        <p className="text-base">
                            My SEO services are designed to improve your website's visibility on search engines, increasing your .
                        </p>
                        <p className="text-base">
                            organic traffic and driving more leads and sales
                        </p>
                    </div>
                </div>
                <div className="flex justify-between item-center mx-12 px-4 py-10 ">
                    {/* <!-- Heading Section --> */}
                    <div className="flex flex-col justify-center shrink-0">
                        <p className="text-lg font-semibold">SEO Support</p>
                    </div>
                    {/* <!-- Description Section --> */}
                    <div className="flex flex-col justify-start shrink-0">
                        <p className="text-base">
                            With ongoing SEO support, I ensure that your website stays up-to-date with the latest SEO .
                            
                        </p>
                        <p className="text-base">
                            best practices, keeping you ahead of the competition
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- SEO and Content section end --> */}
    </div>
  )
}

export default Seo