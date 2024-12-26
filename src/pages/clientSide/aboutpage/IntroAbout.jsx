import React from 'react'
import Mypic from '../../../assets/image/A minimalist.png'
import Mypic2 from '../../../assets/image/A minimalist-1.png'

const IntroAbout = () => {
  return (
    <div>
            {/* <!-- about section start --> */}
    <section>
        <div className="container max-w-7xl mx-auto text-white">
            <div className="flex">
                {/* <!-- left side start --> */}
                <div className="w-2/5 sticky top-20 h-fit">
                    <img src={Mypic} alt=""/>
                </div>
                {/* <!-- left side end --> */}
                {/* <!-- right side start --> */}
                <div className="w-3/5 overflow-y-auto ">
                    <div className="flex flex-col  justify-center font-light p-8">
                        <span className="text-8xl mt-24">Shariful</span>
                        <span className="text-8xl">Islam</span>
                        <span className="text-xl">Delivering Premium Web Design and Development </span>
                        <span className="text-xl">Services to Boost Your Online Presence.</span>
                        <button id="scrollDownButton" className="flex items-center group">
                            <i className="fa-solid fa-arrow-down py-2.5 px-3 rounded-full border "></i>
                            <span className="p-2 text-lg group-hover:underline">About Me</span>
                        </button>
                    </div>
                    {/* <!-- about my content --> */}
                    <div className="border border-[rgb(33,32,29)] p-8 space-y-4 mt-40">
                        <p className="text-lg">SHARIFUL</p>
                        <p className="text-4xl font-light">Your Partner in Bringing Your Web Design Vision to Life.</p>
                        <p className="text-sm font-light">As a freelance web designer and developer, I bring a unique combination of creativity and technical expertise to every project. With a keen eye for design and a passion for delivering user-friendly web experiences, I work closely with clients to understand their needs and bring their vision to life.</p>
                        <p className="text-sm font-light">My approach is rooted in collaboration and communication, and I take pride in my ability to explain technical concepts in simple terms. Whether I'm developing a new website from scratch or optimizing an existing site for search engines, I always strive for excellence in both form and function. With a dedication to quality and a commitment to staying on top of the latest trends and technologies, I am confident in my ability to deliver exceptional results that exceed my clients' expectations.</p>
                        <img src={Mypic2} alt=""/>
                    </div>
                    {/* <!-- my social link --> */}
                     <div className="grid grid-cols-3 gap-4 mt-4">
                        <div className="text-2xl bg-[rgb(33,32,29)] p-2">
                         <a href="#"><i className="fab fa-facebook p-2"></i>Facebook</a>
                        </div>
                        <div className="text-2xl bg-[rgb(33,32,29)] p-2">
                         <a href="#"><i className="fab fa-twitter p-2"></i>Twitter</a>
                        </div>
                        <div className="text-2xl bg-[rgb(33,32,29)] p-2">
                         <a href="#"><i className="fab fa-instagram p-2"></i>Instagram</a>
                        </div>
                        <div className="text-2xl bg-[rgb(33,32,29)] p-2">
                            <a href="#"><i className="fab fa-linkedin p-2"></i>LinkedIn</a>
                        </div>
                        <div className="text-2xl bg-[rgb(33,32,29)] p-2">
                            <a href="#"><i className="fab fa-github p-2"></i>GitHub</a>
                        </div>
                        <div className="text-2xl bg-[rgb(33,32,29)] p-2">
                            <a href="#"><i className="fab fa-youtube p-2"></i>Youtube</a>
                        </div>
                     </div>
                     {/* <!-- awards --> */}
                      <div className="border border-[rgb(33,32,29)] p-4 mt-4 mb-20">
                        <p className="text-sm">AWARDS</p>
                        <div className="grid grid-cols-1">
                            {/* <!-- awards list --> */}
                            <div className="flex justify-between p-2 border-b">
                                <span>Awwwards SOTD</span>
                                <span>2020</span>
                            </div>
                            <div className="flex justify-between p-2 border-b">
                                <span>CSSDA SOTD</span>
                                <span>2020</span>
                            </div>
                            <div className="flex justify-between p-2 border-b">
                                <span>Awwwards Website of the Month</span>
                                <span>2020</span>
                            </div>
                            <div className="flex justify-between p-2 border-b">
                                <span>Awwwards SOTD</span>
                                <span>2020</span>
                            </div>
                            <div className="flex justify-between p-2 border-b">
                                <span>CSSDA SOTD</span>
                                <span>2020</span>
                            </div>
                            <div className="flex justify-between p-2 border-b">
                                <span>Awwwards Website of the Month</span>
                                <span>2020</span>
                            </div>
                            
                        </div>
                      </div>
                </div>
                {/* <!-- right side end --> */}
            </div>
        </div>
    </section>
    {/* <!-- about section end --> */}
    </div>
  )
}

export default IntroAbout