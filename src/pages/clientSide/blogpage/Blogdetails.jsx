import React from 'react'
import Service1 from '../../../assets/image/service1-1.png'
import Service2 from '../../../assets/image/service1-2.png'
import Service3 from '../../../assets/image/service1-3.png'



const Blogdetails = () => {
  return (
    <div>
         {/* <!-- blog-details section start --> */}
        <section>
            <div class="container max-w-5xl mx-auto mb-12 text-white">
                <div class="flex flex-col justify-between items-center  mb-8">
                    <span class="text-6xl font-light p-4 mt-32">How to Build a Stunning Website</span>
                    <span class="text-6xl font-light p-4">with Framer</span>
                    <span class="">My latest web design projects and see how we can </span>
                    <span class="">help bring your ideas to life.</span> 
                </div>
                <div class="text-center my-8">
                    <i class="fa-solid fa-arrow-up py-2.5 px-3 rounded-full border hover:-rotate-180 transition-transform duration-300"></i>
                    <span class="p-2">Read more</span>
                </div>

                <div class="grid lg:grid-cols-3 grid-cols-1 gap-4">
                    <div class="flex justify-between items-center bg-[rgb(24,23,22)] p-3">
                        <span class="">Date</span>
                        <span class="">Jul 29, 2024</span>
                    </div>
                    <div class="flex justify-between items-center bg-[rgb(24,23,22)] p-3">
                        <span class="">Categorie</span>
                        <span class="">Design</span>
                    </div>
                    <div class="flex justify-between items-center bg-[rgb(24,23,22)] p-3">
                        <span class="">Reading Time</span>
                        <span class="">2 min</span>
                    </div>
                </div>

                <div class="flex justify-center items-center w-full mt-8">
                    <div class="grid grid-cols-1  gap-4">
                      <img src={Service1} alt="Service Image"/>
                    </div>
                </div>

                <div class="flex justify-center items-center w-full mt-8">
                    <div class="grid grid-cols-1 text-start  gap-4">
                        <p class="text-4xl">Understanding Framer's Unique Capabilities</p>
                        <p class="text-md">Framer combines design and code to offer a unique platform for building interactive websites. Unlike traditional design tools, Framer allows you to create prototypes that look and function like real websites. This capability is particularly beneficial for testing user interactions and getting a feel for the final product before it's fully developed. The platform's flexibility in integrating animations, transitions, and responsive design ensures that your website will not only be visually appealing but also highly functional across different devices.</p>
                        <p class="text-md">The first step in using Framer is to familiarize yourself with its interface and features. The tool's drag-and-drop functionality makes it accessible even for those with minimal coding experience. However, for more advanced customizations, understanding basic HTML, CSS, and JavaScript can be beneficial. Framer's extensive library of components and templates can help you kickstart your project, allowing you to focus on creating a unique user experience.</p>
                        <p class="text-4xl">Designing with User Experience in Mind</p>
                        <p class="text-md">A stunning website is not just about aesthetics; it’s about creating an intuitive and engaging user experience. Framer excels in this area by allowing designers to create highly interactive prototypes. Start by mapping out your website's structure and user flow. This planning phase is crucial to ensure that your website is easy to navigate and meets the needs of your target audience. Consider using wireframes to outline the layout and hierarchy of your content.</p>
                        <p class="text-md">Incorporate elements such as intuitive navigation menus, clear calls-to-action, and engaging multimedia. Framer's ability to animate elements can add a dynamic touch to your design, making it more engaging. For instance, you can use subtle animations to guide users' attention to important sections or actions on the page. Testing these interactions in the prototype phase ensures that they enhance the user experience without being distracting.</p>
                        
                        
                        <p class="text-4xl">Implementing Responsive Design</p>
                        <p class="text-md">In today's digital age, users access websites from a variety of devices with different screen sizes. Ensuring that your website looks and functions well on all these devices is critical. Framer makes it easy to implement responsive design principles. Use Framer's layout tools to create fluid grids and flexible images that adjust seamlessly to different screen sizes. Previewing your design on various devices within Framer can help you spot and fix any issues early on.</p>
                        <p class="text-md">Additionally, Framer allows you to create breakpoints for different screen sizes. This feature enables you to customize the appearance and functionality of your website based on the device it’s viewed on. For example, you might want to simplify navigation or reduce the number of animations on smaller screens to improve performance and user experience. By testing and refining these breakpoints, you can ensure that your website provides a consistent and pleasant experience for all users.</p>


                        <p class="text-4xl">Enhancing Visual Appeal</p>
                        <p class="text-md">Visual appeal is a significant factor in retaining users on your website. Framer offers a range of tools to enhance your website’s aesthetic. Utilize high-quality images, engaging videos, and a cohesive color scheme to create a visually stunning website. Framer’s integration with design tools like Sketch and Figma allows you to import assets easily and maintain visual consistency throughout your site.</p>
                        <p class="text-md">Experiment with different typography to find a style that complements your brand identity. Framer’s ability to handle custom fonts and text animations can add a unique touch to your design. Additionally, consider the use of white space to create a clean and uncluttered look. White space can help draw attention to important elements and make your content more readable.</p>

                        <p class="text-4xl">Testing and Iteration</p>
                        <p class="text-md">One of the strengths of Framer is its ability to facilitate testing and iteration. Before finalizing your website, it’s essential to test it thoroughly. Use Framer’s interactive prototypes to gather feedback from real users. This feedback can provide valuable insights into how users interact with your site and highlight areas for improvement. Iterate on your design based on this feedback to enhance usability and performance.</p>
                        <p class="text-md">Framer’s built-in collaboration features allow you to share your prototypes with team members and stakeholders easily. This collaborative approach ensures that everyone is on the same page and can contribute to refining the design. Continuous testing and iteration help you create a polished final product that meets the needs of your users and aligns with your business goals.</p>


                        <div class="w-full border border-gray-600 bg[rgb(24,23,22)] rounded-lg shadow-md p-10">
                            <div class="flex">
                                <i class="fa-brands fa-codepen text-3xl"></i>
                                <span class=" text-2xl font-bold p-1 mx-2">Conclusion</span>
                            </div>
                            <p class=" my-4">
                                Additionally, Framer allows you to create breakpoints for different screen sizes. This feature enables you to customize the appearance and functionality of your website based on the device it’s viewed on. For example, you might want to simplify navigation or reduce the number of animations on smaller screens to improve performance and user experience. By testing and refining these breakpoints, you can ensure that your website provides a consistent and pleasant experience for all users.
                            </p>
                            <div class="border-t pt-4 flex">
                                <div class="">
                                    <img src={Service2} alt="" class="h-[50px] w-[50px] rounded-full"/>
                                </div>
                                <div class="mx-6">
                                    <h3 class="text-lg font-semibold ">Matthew Smith</h3>
                                    <p class="">Softwer Enggineer</p>
                                </div>
                            </div>
                        </div>




                    </div>
                </div>

                <div class="grid lg:grid-cols-3 grid-cols-1  gap-4 my-4">
                    <div class="border-2 border-[rgb(33,32,29)] text-2xl bg-[rgb(33,32,29)] p-1">
                    <a href="#"><i class="fab fa-facebook p-2"></i>Facebook</a>
                    </div>
                    <div class="border-2 border-[rgb(33,32,29)] text-2xl bg-[rgb(33,32,29)] p-1">
                    <a href="#"><i class="fab fa-twitter p-2"></i>Twitter</a>
                    </div>
                    <div class="border-2 border-[rgb(33,32,29)] text-2xl bg-[rgb(33,32,29)] p-1">
                    <a href="#"><i class="fab fa-instagram p-2"></i>Instagram</a>
                    </div>
                </div>

                {/* <!-- Related news section start --> */}
                <section>
                    <div class="container max-w-7xl mx-auto mt-12">
                        <div class="flex justify-between items-center">
                            <p class="text-white p-6 lg:text-4xl text-2xl">Related news</p>
                            <a href="" class="text-white">
                                <i
                                    class="fa-solid fa-angle-up thembg1 lg:px-4 px-3 lg:py-4 py-3 m-2 rounded-full origin-center hover:rotate-90 transition-transform duration-300"></i>
                                <span>SEE ALL</span>
                            </a>
                        </div>
                        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                            <div class="my-6 bg-[rgb(35,33,30)] text-white rounded-lg shadow-md">
                                {/* <!-- Image --> */}
                                 <a href="blog-details.html">
                                     <img 
                                       src={Service1} 
                                       alt="Card Image" 
                                       class="w-full h-48 rounded-t-lg object-cover p-4"
                                     />                       
                                 </a>
                                {/* <!-- Date --> */}
                                <div class="px-4 pt-4">
                                  <p class="text-sm ">December 22, 2024</p>
                                </div>                        
                                {/* <!-- Title --> */}
                                <div class="px-4 py-2">
                                    <a href="blog-details.html"><h1 class="text-lg font-semibold ">Your Card Title</h1></a>          
                                </div>                       
                                {/* <!-- Subtitle --> */}
                                <div class="px-4 pb-4">
                                    <a href="blog-details.html"><p class="text-sm ">This is the card subtitle. It gives additional information about the content.</p></a>
                                  
                                </div>                       
                                {/* <!-- Button --> */}
                                <div class="px-4 pb-4">
                                  <a href="blog-details.html" class="px-4 py-2 text-white bgb rounded-lg ">
                                    See More..
                                  </a>
                                </div>
                            </div>
                            <div class="my-6 bg-[rgb(35,33,30)] text-white rounded-lg shadow-md">
                                {/* <!-- Image --> */}
                                 <a href="blog-details.html">
                                     <img 
                                       src={Service1} 
                                       alt="Card Image" 
                                       class="w-full h-48 rounded-t-lg object-cover p-4"
                                     />                       
                                 </a>
                                {/* <!-- Date --> */}
                                <div class="px-4 pt-4">
                                  <p class="text-sm ">December 22, 2024</p>
                                </div>                        
                                {/* <!-- Title --> */}
                                <div class="px-4 py-2">
                                    <a href="blog-details.html"><h1 class="text-lg font-semibold ">Your Card Title</h1></a>          
                                </div>                       
                                {/* <!-- Subtitle --> */}
                                <div class="px-4 pb-4">
                                    <a href="blog-details.html"><p class="text-sm ">This is the card subtitle. It gives additional information about the content.</p></a>
                                  
                                </div>                       
                                {/* <!-- Button --> */}
                                <div class="px-4 pb-4">
                                  <a href="blog-details.html" class="px-4 py-2 text-white bgb rounded-lg ">
                                    See More..
                                  </a>
                                </div>
                            </div>
                            <div class="my-6 bg-[rgb(35,33,30)] text-white rounded-lg shadow-md">
                                {/* <!-- Image --> */}
                                 <a href="blog-details.html">
                                     <img 
                                       src={Service3} 
                                       alt="Card Image" 
                                       class="w-full h-48 rounded-t-lg object-cover p-4"
                                     />                       
                                 </a>
                                {/* <!-- Date --> */}
                                <div class="px-4 pt-4">
                                  <p class="text-sm ">December 22, 2024</p>
                                </div>                        
                                {/* <!-- Title --> */}
                                <div class="px-4 py-2">
                                    <a href="blog-details.html"><h1 class="text-lg font-semibold ">Your Card Title</h1></a>          
                                </div>                       
                                {/* <!-- Subtitle --> */}
                                <div class="px-4 pb-4">
                                    <a href="blog-details.html"><p class="text-sm ">This is the card subtitle. It gives additional information about the content.</p></a>
                                  
                                </div>                       
                                {/* <!-- Button --> */}
                                <div class="px-4 pb-4">
                                  <a href="blog-details.html" class="px-4 py-2 text-white bgb rounded-lg ">
                                    See More..
                                  </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Related news section end --> */}
                  

            </div>
        </section>
        {/* <!-- blog-details section end --> */}
    </div>
  )
}

export default Blogdetails