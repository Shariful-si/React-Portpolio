import React from 'react'
const Footer = () => {
  return (
    <div>
      {/* <!-- contact us section start --> */}
    <section>
        <div class="overflow-hidden w-full border-y border-gray-600 bg-[rgb(33,32,29)] text-white">
                <marquee behavior="scroll" 
                direction="left" 
                class="text-xl bg-[rgb(33,32,29)] backdrop-blur-md font-semibold px-6 py-3 text-white">+++.....LET'S
                    TALK......+++.....LET'S TALK.....+++.....LET'S TALK.....+++.....LET'S TALK+++.....LET'S
                    TALK......+++.....LET'S TALK.....+++.....LET'S TALK.....+++.....LET'S TALK+++.....LET'S
                    TALK......+++.....LET'S TALK.....+++.....LET'S TALK.....+++.....LET'S TALK+++.....LET'S
                    TALK......+++.....LET'S TALK.....+++.....LET'S TALK.....+++.....LET'S TALK+++.....LET'S
                    TALK......+++.....LET'S TALK.....+++.....LET'S TALK.....+++.....LET'S TALK+++.....LET'S
                    TALK......+++.....LET'S TALK.....+++.....LET'S TALK.....+++.....LET'S TALK+++.....LET'S
                    TALK......+++.....LET'S TALK.....+++.....LET'S TALK.....+++.....LET'S TALK+++.....LET'S
                    TALK......+++.....LET'S TALK.....+++.....LET'S TALK.....+++.....LET'S TALK+++.....LET'S
                    TALK......+++.....LET'S TALK.....+++.....LET'S TALK.....+++.....LET'S TALK+++.....LET'S
                    TALK......+++.....LET'S TALK.....+++.....LET'S TALK.....+++.....LET'S TALK+++.....LET'S
                    TALK......+++.....LET'S TALK.....+++.....LET'S TALK.....+++.....LET'S TALK+++.....LET'S
                    TALK......+++.....LET'S TALK.....+++.....LET'S TALK.....+++.....LET'S TALK</marquee>
        </div>
        <div class="container max-w-7xl mx-auto  ">
            <div class="text-white">
                <h1 class="text-xl font-semibold text-center mt-20">Project in mind?</h1>
                <div class="flex flex-col text-center ">
                    <span class="text-7xl font-semibold italic">Let’s make your</span><br/>
                    <span class="text-7xl font-semibold italic mb-6">Website shine</span>
                    <span class="text-xl">Premium web design, development, and SEO</span>
                    <span class="text-xl">services to help your business stand out.</span>
                </div>
                <div class="flex justify-center">
                    <a class="border rounded-lg px-4 py-2 mt-6 ">
                        <span class="text-white">GET IN TOUCH</span>
                        <i class="fa-solid fa-arrow-right-long m-2"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- contact us section end --> */}

    <footer class="text-[#edd6b6] bg-black py-10  mt-8">
      <div class="container max-w-7xl mx-auto px-4">
        <div class="flex flex-wrap justify-between items-center">
          {/* <!-- Logo --> */}
          <div class="mb-4 md:mb-0">
            <h1 class="text-2xl font-bold">SHARIFUL</h1>
          </div>

          {/* <!-- Social Media Icons --> */}
          <div class="flex space-x-6 mb-4 md:mb-0">
            <a href="#" aria-label="Instagram" class="hover:text-gray-400">
              <i class="fab fa-instagram text-3xl"></i>
            </a>
            <a href="#" aria-label="Twitter" class="hover:text-gray-400">
              <i class="fab fa-twitter text-3xl"></i>
            </a>
            <a href="#" aria-label="Dribbble" class="hover:text-gray-400">
              <i class="fab fa-dribbble text-3xl"></i>
            </a>
            <a href="#" aria-label="Behance" class="hover:text-gray-400">
              <i class="fab fa-behance text-3xl"></i>
            </a>
          </div>
        </div>

        {/* <!-- Navigation Links --> */}
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div>
            <h3 class="text-lg font-semibold mb-2">Pages</h3>
            <ul class="space-y-2">
              <li><a href="#" class="hover:text-gray-400">Home</a></li>
              <li><a href="#" class="hover:text-gray-400">Services</a></li>
              <li><a href="#" class="hover:text-gray-400">About</a></li>
              <li><a href="/pricing" class="hover:text-gray-400">Pricing</a></li>
              <li><a href="#" class="hover:text-gray-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-2">More Templates</h3>
            <ul class="space-y-2">
              <li><a href="#" class="hover:text-gray-400">CMS</a></li>
              <li><a href="#" class="hover:text-gray-400">Work</a></li>
              <li><a href="#" class="hover:text-gray-400">Work Single</a></li>
              <li><a href="#" class="hover:text-gray-400">Blog</a></li>
              <li><a href="#" class="hover:text-gray-400">Blog Single</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-2">Utility Pages</h3>
            <ul class="space-y-2">
              <li><a href="#" class="hover:text-gray-400">Styleguide</a></li>
              <li><a href="#" class="hover:text-gray-400">404 Error Page</a></li>
              <li><a href="#" class="hover:text-gray-400">Licensing</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="text-center mt-8 text-sm text-white">
        © 2024 SHARIFUL. All rights reserved.
      </div>
    </footer>

    </div>
  );
};

export default Footer;