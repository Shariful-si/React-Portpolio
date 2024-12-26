import React from 'react'
import Service1 from '../../../assets/image/service1-1.png'
import Service2 from '../../../assets/image/service1-2.png'
import Service3 from '../../../assets/image/service1-3.png'
import { Link } from 'react-router-dom'

const IntroBlog = () => {
  return (
    <div>
            {/* <!-- blog section start --> */}
    <section>
        <div className="container max-w-7xl mx-auto mb-12">
            <div className="flex flex-col justify-between items-center mb-8">
                <span className="text-7xl font-light p-4  mt-32">Blog</span>
                <span className="">Get the latest insights and tips on web design, </span>
                <span className="">development, and SEO in our blog.</span>
                
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-4">
                {/* <!-- card --> */}
                <div className="max-w-sm mx-auto my-6 bg-[rgb(35,33,30)] text-white rounded-lg shadow-md">
                    {/* <!-- Image --> */}
                        <Link to="/blog-detail">
                            <img 
                            src={Service1} 
                            alt="Card Image" 
                            className="w-full h-48 rounded-t-lg object-cover p-4"
                            />                       
                        </Link>
                    {/* <!-- Date --> */}
                    <div className="px-4 pt-4">
                        <p className="text-sm ">December 22, 2024</p>
                    </div>                        
                    {/* <!-- Title --> */}
                    <div className="px-4 py-2">
                        <Link to="/blog-detail"><h1 className="text-lg font-semibold ">Your Card Title</h1></Link>          
                    </div>                       
                    {/* <!-- Subtitle --> */}
                    <div className="px-4 pb-4">
                        <Link to="/blog-detail"><p className="text-sm ">This is the card subtitle. It gives additional information about the content.</p></Link>
                        
                    </div>                       
                    {/* <!-- Button --> */}
                    <div className="px-4 pb-4">
                        <Link to="/blog-detail" className="px-4 py-2 text-white bgb rounded-lg ">
                        See More..
                        </Link>
                    </div>
                </div>
                <div className="max-w-sm mx-auto my-6 bg-[rgb(35,33,30)] text-white rounded-lg shadow-md">
                    {/* <!-- Image --> */}
                        <Link to="/blog-detail">
                            <img 
                            src={Service2} 
                            alt="Card Image" 
                            className="w-full h-48 rounded-t-lg object-cover p-4"
                            />                       
                        </Link>
                    {/* <!-- Date --> */}
                    <div className="px-4 pt-4">
                        <p className="text-sm ">December 22, 2024</p>
                    </div>                        
                    {/* <!-- Title --> */}
                    <div className="px-4 py-2">
                        <Link to="/blog-detail"><h1 className="text-lg font-semibold ">Your Card Title</h1></Link>          
                    </div>                       
                    {/* <!-- Subtitle --> */}
                    <div className="px-4 pb-4">
                        <Link to="/blog-detail"><p className="text-sm ">This is the card subtitle. It gives additional information about the content.</p></Link>
                        
                    </div>                       
                    {/* <!-- Button --> */}
                    <div className="px-4 pb-4">
                        <Link to="/blog-detail" className="px-4 py-2 text-white bgb rounded-lg ">
                        See More..
                        </Link>
                    </div>
                </div>
                <div className="max-w-sm mx-auto my-6 bg-[rgb(35,33,30)] text-white rounded-lg shadow-md">
                    {/* <!-- Image --> */}
                        <Link to="/blog-detail">
                            <img 
                            src={Service3} 
                            alt="Card Image" 
                            className="w-full h-48 rounded-t-lg object-cover p-4"
                            />                       
                        </Link>
                    {/* <!-- Date --> */}
                    <div className="px-4 pt-4">
                        <p className="text-sm ">December 22, 2024</p>
                    </div>                        
                    {/* <!-- Title --> */}
                    <div className="px-4 py-2">
                        <Link to="/blog-detail"><h1 className="text-lg font-semibold ">Your Card Title</h1></Link>          
                    </div>                       
                    {/* <!-- Subtitle --> */}
                    <div className="px-4 pb-4">
                        <Link to="/blog-detail"><p className="text-sm ">This is the card subtitle. It gives additional information about the content.</p></Link>
                        
                    </div>                       
                    {/* <!-- Button --> */}
                    <div className="px-4 pb-4">
                        <Link to="/blog-detail" className="px-4 py-2 text-white bgb rounded-lg ">
                        See More..
                        </Link>
                    </div>
                </div>
                <div className="max-w-sm mx-auto my-6 bg-[rgb(35,33,30)] text-white rounded-lg shadow-md">
                    {/* <!-- Image --> */}
                        <Link to="/blog-detail">
                            <img 
                            src={Service1} 
                            alt="Card Image" 
                            className="w-full h-48 rounded-t-lg object-cover p-4"
                            />                       
                        </Link>
                    {/* <!-- Date --> */}
                    <div className="px-4 pt-4">
                        <p className="text-sm ">December 22, 2024</p>
                    </div>                        
                    {/* <!-- Title --> */}
                    <div className="px-4 py-2">
                        <Link to="/blog-detail"><h1 className="text-lg font-semibold ">Your Card Title</h1></Link>          
                    </div>                       
                    {/* <!-- Subtitle --> */}
                    <div className="px-4 pb-4">
                        <Link to="/blog-detail"><p className="text-sm ">This is the card subtitle. It gives additional information about the content.</p></Link>
                        
                    </div>                       
                    {/* <!-- Button --> */}
                    <div className="px-4 pb-4">
                        <Link to="/blog-detail" className="px-4 py-2 text-white bgb rounded-lg ">
                        See More..
                        </Link>
                    </div>
                </div>
                <div className="max-w-sm mx-auto my-6 bg-[rgb(35,33,30)] text-white rounded-lg shadow-md">
                    {/* <!-- Image --> */}
                        <Link to="/blog-detail">
                            <img 
                            src={Service2} 
                            alt="Card Image" 
                            className="w-full h-48 rounded-t-lg object-cover p-4"
                            />                       
                        </Link>
                    {/* <!-- Date --> */}
                    <div className="px-4 pt-4">
                        <p className="text-sm ">December 22, 2024</p>
                    </div>                        
                    {/* <!-- Title --> */}
                    <div className="px-4 py-2">
                        <Link to="/blog-detail"><h1 className="text-lg font-semibold ">Your Card Title</h1></Link>          
                    </div>                       
                    {/* <!-- Subtitle --> */}
                    <div className="px-4 pb-4">
                        <Link to="/blog-detail"><p className="text-sm ">This is the card subtitle. It gives additional information about the content.</p></Link>
                        
                    </div>                       
                    {/* <!-- Button --> */}
                    <div className="px-4 pb-4">
                        <Link to="/blog-detail" className="px-4 py-2 text-white bgb rounded-lg ">
                        See More..
                        </Link>
                    </div>
                </div>
                <div className="max-w-sm mx-auto my-6 bg-[rgb(35,33,30)] text-white rounded-lg shadow-md">
                    {/* <!-- Image --> */}
                        <Link to="/blog-detail">
                            <img 
                            src={Service3} 
                            alt="Card Image" 
                            className="w-full h-48 rounded-t-lg object-cover p-4"
                            />                       
                        </Link>
                    {/* <!-- Date --> */}
                    <div className="px-4 pt-4">
                        <p className="text-sm ">December 22, 2024</p>
                    </div>                        
                    {/* <!-- Title --> */}
                    <div className="px-4 py-2">
                        <Link to="/blog-detail"><h1 className="text-lg font-semibold ">Your Card Title</h1></Link>          
                    </div>                       
                    {/* <!-- Subtitle --> */}
                    <div className="px-4 pb-4">
                        <Link to="/blog-detail"><p className="text-sm ">This is the card subtitle. It gives additional information about the content.</p></Link>
                        
                    </div>                       
                    {/* <!-- Button --> */}
                    <div className="px-4 pb-4">
                        <Link to="/blog-detail" className="px-4 py-2 text-white bgb rounded-lg ">
                        See More..
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- blog section end --> */}
    </div>
  )
}

export default IntroBlog