export const Gallary = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 gallary" id="Gallery">
      <div className="flex flex-col w-full mb-6 lg:justify-between lg:flex-row md:mb-8">
        <div className="flex items-center mb-5 md:mb-6 group lg:max-w-xl">
          <a href="/" aria-label="Item" className="mr-3">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50">
              <svg
                className="w-12 h-12 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </a>
          <h2 className="font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl">
            <span className="inline-block mb-2">The Gallary box</span>
            <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
          </h2>
        </div>
        <p className="w-full text-gray-700 lg:text-sm lg:max-w-md">
          Giving is not just about making donations, it’s about making a
          difference. Thaagam foundation we will send you the account of every
          single rupee that you
        </p>
      </div>
      <div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-5 lg:row-gap-8">
        <div>
          <img
            className="object-cover w-full h-52 mb-6 rounded shadow-lg md:h-52 xl:h-52"
            src="https://www.thaagam.org/donate/assets/images/birthday_cake/CAKE4.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="object-cover w-full h-52 mb-6 rounded shadow-lg md:h-52 xl:h-52"
            src="https://www.thaagam.org/donate/assets/images/birthday_cake/CAKE3.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="object-cover w-full h-52 mb-6 rounded shadow-lg md:h-52 xl:h-52"
            src="https://www.thaagam.org/donate/assets/images/birthday_cake/CAKE3.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="object-cover w-full h-52 mb-6 rounded shadow-lg md:h-52 xl:h-52"
            src="https://www.thaagam.org/donate/assets/images/birthday_cake/CAKE3.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="object-cover w-full h-52 mb-6 rounded shadow-lg md:h-52 xl:h-52"
            src="https://www.thaagam.org/donate/assets/images/birthday_cake/CAKE3.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="object-cover w-full h-52 mb-6 rounded shadow-lg md:h-52 xl:h-52"
            src="https://www.thaagam.org/donate/assets/images/birthday_cake/CAKE3.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="object-cover w-full h-52 mb-6 rounded shadow-lg md:h-52 xl:h-52"
            src="https://www.thaagam.org/donate/assets/images/birthday_cake/CAKE4.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="object-cover w-full h-52 mb-6 rounded shadow-lg md:h-52 xl:h-52"
            src="https://www.thaagam.org/donate/assets/images/birthday_cake/CAKE4.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="object-cover w-full h-52 mb-6 rounded shadow-lg md:h-52 xl:h-52"
            src="https://www.thaagam.org/donate/assets/images/birthday_cake/CAKE4.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="object-cover w-full h-52 mb-6 rounded shadow-lg md:h-52 xl:h-52"
            src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
      </div>
      <div className="text-center">
        <a
          href="/"
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          See more
          <svg
            className="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Gallary;
