import React from 'react'
import Detail from '../../../assets/image/workdeatils.png'

const Workdetail = () => {
  return (
    <div>
            {/* <!-- workspace details start --> */}
    <section>
        <div class="container max-w-7xl mx-auto mb-12 text-white">
            <div class="flex flex-col justify-between items-center mb-8">
                <span class="text-7xl font-light p-4  mt-32">Space</span>
                <span class="">Modern and visually appealing website that  </span>
                <span class="">reflected the client's brand.</span>
            </div>
            <div class="">
                <div class="grid grid-cols-4 justify-items-between items-center gap-20 p-4 mx-12">
                    <div class="flex flex-col text-center bg-[rgb(34,32,30)] px-8 py-2 ">
                        <span class="text-sm">CLIENT</span>
                        <span class="">PAWEL GOLA</span>
                    </div>
                    <div class="flex flex-col text-center bg-[rgb(34,32,30)] px-8 py-2">
                        <span class="text-sm">TIME LINE</span>
                        <span class="">2 WEEKS</span>
                    </div>
                    <div class="flex flex-col text-center bg-[rgb(34,32,30)] px-8 py-2">
                        <span class="text-sm">SERVICES</span>
                        <span class="">WEB DESIGN</span>
                    </div>
                    <div class="flex flex-col text-center bg-[rgb(34,32,30)] px-8 py-2">
                        <span class="text-sm">WEBSITE</span>
                        <span class=""> GOLA.IO</span>
                    </div>
                </div> 
            </div>
            <div class="flex justify-center">
                <a class="rounded-lg px-4 py-2 mt-6 ">
                    <i class="fa-solid fa-arrow-down-long py-2.5 px-3 border rounded-full"></i>
                    <span class="text-sm mx-2">MORE DEATILS</span>
                </a>
            </div>
            <div class="flex justify-center mt-12">
                <img src={Detail} alt=""/>
            </div>

            <div class="flex justify-center mt-12">
                <div class="w-2/4 flex flex-col px-12 py-8">
                    <span class="text-xs mb-4">CLIENT</span>
                    <span class="text-2xl">Concept, Design, and</span>
                    <span class="text-2xl">Development. All-in-one.</span>
                </div>
                <div class="w-2/4 px-12 py-8">
                    <div class="grid grid-row gap-8">
                        <div class="flex flex-col border border-[rgb(33.32,29)] p-8 bg-[rgb(34,32,30)]">
                            <span class="text-2xl mb-4">Challenge</span>
                            <p class="text-sm">Our client was struggling to attract and retain customers due to an outdated and non-responsive website that didn't align with their brand identity.</p>
                        </div>

                        <div class="flex flex-col border border-[rgb(33.32,29)] p-8 bg-[rgb(34,32,30)]">
                            <span class="text-2xl mb-4">Goal</span>
                            <p class="text-sm">Our goal was to create a modern and visually appealing website that reflected the client's brand and delivered a seamless user experience. The website needed to be responsive, easy to navigate, and optimized for search engines to improve their online visibility.</p>
                        </div>

                        <div class="flex flex-col border border-[rgb(33.32,29)] p-8 bg-[rgb(34,32,30)]">
                            <span class="text-2xl mb-4">Result</span>
                            <p class="text-sm">Our team developed a custom website design that was not only visually stunning but also user-friendly and optimized for search engines. The client's website now showcases their products and services in a professional and engaging manner, and has seen a significant increase in organic traffic and customer engagement. The client is thrilled with the final result and has received positive feedback from their customers.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- workspace details end --> */}

    </div>
  )
}

export default Workdetail