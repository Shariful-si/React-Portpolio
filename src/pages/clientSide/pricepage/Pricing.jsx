import React, { useState } from 'react';

const Pricing = () => {
  const faqItems = [
    {
      question: 'What is the typical turnaround time for a website project?',
      answer: 'The typical turnaround time depends on the project scope and complexity, ranging from 2 to 8 weeks.',
    },
    {
      question: 'Do you offer ongoing support?',
      answer: 'Yes, we offer various support and maintenance packages to suit your needs.',
    },
    {
      question: 'Can I update my website content?',
      answer: 'Absolutely! We provide user-friendly CMS options for easy content updates.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {/* Pricing Section */}
      <section>
        <div className="container max-w-7xl mx-auto mb-12 text-white">
          <div className="flex flex-col justify-between items-center mb-8">
            <span className="text-md mt-32">PRICING</span>
            <span className="text-7xl font-light p-4">Experience the Power of</span>
            <span className="text-7xl font-light p-4">Premium Web Design</span>
            <span>Choose a package that suits your needs and budget.</span>
            <span>Transparent pricing with no hidden fees.</span>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            {/* Lite Plan */}
            <div className="max-w-sm mx-auto border border-gray-200 text-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Lite Plan</h2>
              <p className="text-3xl font-semibold mb-4">$3900</p>
              <p className="mb-6">
                Affordable web design package with a custom design, CMS integration, and responsive design for small
                businesses and startups.
              </p>
              <button className="mt-6 w-full bg-white text-black py-2 px-4 rounded-lg hover:bg-gray-400 transition duration-300">
                Get Started
              </button>
            </div>
            {/* Premium Plan */}
            <div className="max-w-sm mx-auto border border-gray-200 text-white rounded-lg shadow-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Premium Plan</h2>
                <h2 className="text-2xl font-bold bg-gray-900 p-2 rounded-lg">Popular</h2>
              </div>
              <p className="text-3xl font-semibold mb-4">$6900</p>
              <p className="mb-6">
                Premium package with UX/UI design, interactive prototype, Framer development, and CMS integration for
                medium businesses.
              </p>
              <button className="mt-6 w-full bg-white text-black py-2 px-4 rounded-lg hover:bg-gray-400 transition duration-300">
                Get Started
              </button>
            </div>
            {/* Gold Plan */}
            <div className="max-w-sm mx-auto border border-gray-200 text-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Gold Plan</h2>
              <p className="text-3xl font-semibold mb-4">$9900</p>
              <p className="mb-6">
                Elite web design package with SEO optimization, research, and SEO support for businesses looking to
                dominate their market.
              </p>
              <button className="mt-6 w-full bg-white text-black py-2 px-4 rounded-lg hover:bg-gray-400 transition duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section py-10">
        <div className="container max-w-7xl mx-auto">
          <div className="flex">
            {/* Left Section */}
            <div className="w-1/2">
              <h1 className="text-xl font-light">FAQ</h1>
              <p className="text-7xl">Common</p>
              <p className="text-7xl">Questions</p>
            </div>
            {/* Right Section */}
            <div className="w-1/2">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="max-w-lg mx-auto p-4 border border-gray-300 rounded-lg shadow-md my-4"
                >
                  {/* Heading Section */}
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-white">{item.question}</h3>
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="text-white text-center bg-gray-200 px-3 py-1 rounded-full hover:bg-gray-300 focus:outline-none"
                    >
                      <span className="text-xl text-black font-bold">
                        {openIndex === index ? '-' : '+'}
                      </span>
                    </button>
                  </div>
                  {/* Content Section */}
                  {openIndex === index && <div className="mt-4 text-gray-300">{item.answer}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
