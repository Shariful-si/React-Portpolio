import React from 'react'
import minilist from '../../../assets/image/A minimalist.png'

const ClientsReview = () => {
  return (
    <div>
            {/* <!-- client Review start --> */}
    <section>
        <div className="container max-w-7xl mx-auto mt-20 text-white">
            <div className="flex flex-col justify-items-center text-white text-center">
                <div className="flex flex-col">
                    <span className="text-6xl italic">What my </span>
                    <span className="text-6xl italic">clients say</span>
                </div>
                <div className="flex flex-col mt-8">
                    <span className="text-xl">See what my clients have to say about working with me</span>
                    <span className="text-xl">and the results I helped them achieve.</span>
                </div>
            </div>
            {/* <!-- card div  --> */}
            <div className="grid grid-cols-2 justify-items-center mt-20 gap-10 ">
                {/* <!-- card --> */}
                <div className="w-full aspect-video thembg1 rounded-lg shadow-md p-10">
                    <div className="flex">
                        <i className="fa-brands fa-codepen text-3xl"></i>
                        <span className="font-bold p-1 mx-2">SHARIFUL</span>
                    </div>
                    <h2 className="text-2xl font-bold  mb-4">Amazing Results with Arik's Premium Web Design Services</h2>
                    <p className=" mb-4">
                        Arik is a top-notch web designer who created a stunning website for my business. He was
                        attentive to my needs and provided excellent customer service throughout the entire process. I
                        highly recommend his services.
                    </p>
                    <div className="border-t pt-4 flex">
                        <div className="">
                            <img src={minilist} alt="" className="h-[50px] w-[50px] rounded-full"/>
                        </div>
                        <div className="mx-6">
                            <h3 className="text-lg font-semibold ">Matthew Smith</h3>
                            <p className="">Sonic</p>
                        </div>
                    </div>
                </div>
                <div className="w-full aspect-video thembg1 rounded-lg shadow-md p-10">
                    <div className="flex">
                        <i className="fa-brands fa-codepen text-3xl"></i>
                        <span className="font-bold p-1 mx-2">SHARIFUL</span>
                    </div>
                    <h2 className="text-2xl font-bold  mb-4">Amazing Results with Arik's Premium Web Design Services</h2>
                    <p className=" mb-4">
                        Arik is a top-notch web designer who created a stunning website for my business. He was
                        attentive to my needs and provided excellent customer service throughout the entire process. I
                        highly recommend his services.
                    </p>
                    <div className="border-t pt-4 flex">
                        <div className="">
                            <img src={minilist} alt="" className="h-[50px] w-[50px] rounded-full"/>
                        </div>
                        <div className="mx-6">
                            <h3 className="text-lg font-semibold ">Matthew Smith</h3>
                            <p className="">Sonic</p>
                        </div>
                    </div>
                </div>
                <div className="w-full aspect-video thembg1 rounded-lg shadow-md p-10">
                    <div className="flex">
                        <i className="fa-brands fa-codepen text-3xl"></i>
                        <span className="font-bold p-1 mx-2">SHARIFUL</span>
                    </div>
                    <h2 className="text-2xl font-bold  mb-4">Amazing Results with Arik's Premium Web Design Services</h2>
                    <p className=" mb-4">
                        Arik is a top-notch web designer who created a stunning website for my business. He was
                        attentive to my needs and provided excellent customer service throughout the entire process. I
                        highly recommend his services.
                    </p>
                    <div className="border-t pt-4 flex">
                        <div className="">
                            <img src={minilist} alt="" className="h-[50px] w-[50px] rounded-full"/>
                        </div>
                        <div className="mx-6">
                            <h3 className="text-lg font-semibold ">Matthew Smith</h3>
                            <p className="">Sonic</p>
                        </div>
                    </div>
                </div>
                <div className="w-full aspect-video thembg1 rounded-lg shadow-md p-10">
                    <div className="flex">
                        <i className="fa-brands fa-codepen text-3xl"></i>
                        <span className="font-bold p-1 mx-2">SHARIFUL</span>
                    </div>
                    <h2 className="text-2xl font-bold  mb-4">Amazing Results with Arik's Premium Web Design Services</h2>
                    <p className=" mb-4">
                        Arik is a top-notch web designer who created a stunning website for my business. He was
                        attentive to my needs and provided excellent customer service throughout the entire process. I
                        highly recommend his services.
                    </p>
                    <div className="border-t pt-4 flex">
                        <div className="">
                            <img src={minilist} alt="" className="h-[50px] w-[50px] rounded-full"/>
                        </div>
                        <div className="mx-6">
                            <h3 className="text-lg font-semibold ">Matthew Smith</h3>
                            <p className="">Sonic</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- client Review end --> */}
    </div>
  )
}

export default ClientsReview