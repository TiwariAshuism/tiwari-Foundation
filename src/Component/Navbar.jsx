import { useState } from "react";

import AnchorLink from "react-anchor-link-smooth-scroll";
import Logo from "./assest/logo.png";
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = 100;
    var options = {
      key: "rzp_test_5NjjkLN2BSk56X",
      key_secret: "Ee2wZgRjIjyXMgIo1at3pxad",
      amount: amount * 100,
      currency: "INR",
      name: "STARTUP_PROJECTS",
      description: "for testing purpose",
      handler: function (response) {
        window.location.assign("https://google.com"); 
      },
      prefill: {
        name: "Velmurugan",
        email: "mvel1620r@gmail.com",
        contact: "7904425033",
      },
      notes: {
        address: "Razorpay Corporate office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var pay = new window.Razorpay(options);
    pay.open();
  };
  return (
    <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div class="relative flex grid items-center grid-cols-2 lg:grid-cols-3">
        <ul class="flex items-center hidden space-x-8 lg:flex">
          <li>
            <AnchorLink
              href="#About"
              spy={true}
              smooth={true}
              className="font-medium tracking-wide text-white-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              About
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              href="#Gallery"
              aria-label="About"
              title="About"
              class="font-medium tracking-wide text-white-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Photo Gallery
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              href="#Campaigns"
              aria-label="Campaigns"
              title="Campaigns"
              class="font-medium tracking-wide text-white-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Campaigns
            </AnchorLink>
          </li>
        </ul>
        <a
          href="/"
          aria-label="Company"
          title="Companyy"
          class="inline-flex items-center lg:mx-auto"
        >
          <img src={Logo} class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />

          <span class="ml-2 text-xl font-bold tracking-wide text-white-700 uppercase">
            Tiwari Foundation
          </span>
        </a>
        <ul class="flex items-center hidden ml-auto space-x-8 lg:flex">
          <li>
          <button onClick={handleSubmit} className="mr-3 inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">Donate</button>
             
          </li>
        </ul>
        <div class="ml-auto lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div class="absolute top-0 left-0 w-full">
              <div class="p-5 bg-white border rounded shadow-sm">
                <div class="flex items-center justify-between mb-4">
                  <div>
                    <a
                      href="/"
                      aria-label="Company"
                      title="Company"
                      class="inline-flex items-center"
                    >
                      <svg
                        class="w-8 text-deep-purple-accent-400"
                        viewBox="0 0 24 24"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        stroke="currentColor"
                        fill="none"
                      >
                        <rect x="3" y="1" width="7" height="12" />
                        <rect x="3" y="17" width="7" height="6" />
                        <rect x="14" y="1" width="7" height="6" />
                        <rect x="14" y="11" width="7" height="12" />
                      </svg>
                      <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        Company
                      </span>
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul class="space-y-4">
                    <li>
                      <a
                        href="/"
                        aria-label="About"
                        title="About"
                        class="font-medium tracking-wide text-white-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Product
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="About"
                        title="About"
                        class="font-medium tracking-wide text-white-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Features
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="Campaigns"
                        title="Campaigns"
                        class="font-medium tracking-wide text-white-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Pricing
                      </a>
                    </li>
                    <li></li>
                    <li>
                    <button onClick={handleSubmit} className="mr-3 inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">Donate</button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
