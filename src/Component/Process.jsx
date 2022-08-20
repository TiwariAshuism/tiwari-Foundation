export const Process = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-32 process">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Join Now
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="b902cd03-49cc-4166-a0ae-4ca1c31cedba"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#b902cd03-49cc-4166-a0ae-4ca1c31cedba)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">The</span>
            </span>{' '}
            How can you join Tiwari foundation 
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
          Tiwari Foundation (Trust) is a registered organisation based in (Bihar) Registered as a public Trust. Mainly aims to benefit underprivileged children and their families, through various projects and health care, education, nutrition, shelter, livelihood, women empowerment, child rights and other social issue.
          </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-4 sm:grid-cols-2">
          <div>
            <div className="flex items-center justify-between mb-6">
              <p className="text-2xl font-bold text-red-900	">Step 1</p>
              <svg
                className="w-6 text-gray-700 transform rotate-90 sm:rotate-0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line
                  fill="none"
                  strokeMiterlimit="10"
                  x1="2"
                  y1="12"
                  x2="22"
                  y2="12"
                />
                <polyline
                  fill="none"
                  strokeMiterlimit="10"
                  points="15,5 22,12 15,19 "
                />
              </svg>
            </div>
            <p className="text-gray-600">
            To join the foundation you have to donate small amount,
            </p>
          </div>
          <div>
            <div className="flex items-center justify-between mb-6">
              <p className="text-2xl font-bold text-yellow-900	">Step 2</p>
              <svg
                className="w-6 text-gray-700 transform rotate-90 sm:rotate-0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line
                  fill="none"
                  strokeMiterlimit="10"
                  x1="2"
                  y1="12"
                  x2="22"
                  y2="12"
                />
                <polyline
                  fill="none"
                  strokeMiterlimit="10"
                  points="15,5 22,12 15,19 "
                />
              </svg>
            </div>
            <p className="text-gray-600">
            Chose a donation amount 
            </p>
          </div>
          <div>
            <div className="flex items-center justify-between mb-6">
              <p className="text-2xl font-bold text-purple-900	">Step 3</p>
              <svg
                className="w-6 text-gray-700 transform rotate-90 sm:rotate-0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line
                  fill="none"
                  strokeMiterlimit="10"
                  x1="2"
                  y1="12"
                  x2="22"
                  y2="12"
                />
                <polyline
                  fill="none"
                  strokeMiterlimit="10"
                  points="15,5 22,12 15,19 "
                />
              </svg>
            </div>
            <p className="text-gray-600">
              Fill the details and do the Payment.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-between mb-6">
              <p className="text-2xl font-bold text-green-900	">Success</p>
              <svg
                className="w-8 text-white-600"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <polyline
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  points="6,12 10,16 18,8"
                />
              </svg>
            </div>
            <p className="text-gray-600">
             After Payment take a screenshot. After 24-48 hours you will Get a conformation Mail.
            </p>
          </div>
        </div>
      </div>
    );
  };
  export default Process;