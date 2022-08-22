import "./Style/style.css";
export const Header = () => {
 

  const handleSubmit = (e)=>{
    e.preventDefault();
    let amount=100;
      var options = {
        key: "rzp_test_5NjjkLN2BSk56X",
        key_secret:"Ee2wZgRjIjyXMgIo1at3pxad",
        amount: amount *100,
        currency:"INR",
        name:"STARTUP_PROJECTS",
        description:"for testing purpose",
        handler: function(response){
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name:"Velmurugan",
          email:"mvel1620r@gmail.com",
          contact:"7904425033"
        },
        notes:{
          address:"Razorpay Corporate office"
        },
        theme: {
          color:"#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    
  }

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 header-bottom">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Brand new
              </p>
            </div>
            <h3 className="max-w-lg mb-6 font-sans text-2xl font-bold tracking-tight text-white-900 sm:text-3xl sm:leading-none">
              Education alone will help them
            </h3>
            <p className="text-base text-white-700 md:text-lg">
              We help Poor children to get their life better. Koshish, founded
              by young and devoted social activists was registered as a
              charitable trust on 4th August 1997. It works for social,
              political and economic empowerment of poor people, protection of
              Human Rights, gender issues, Right to Food, grassroots justice
              delivery system and environment conservation.
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
           
              <button onClick={handleSubmit} className="mr-3 inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">Donate</button>
            
            <a
              href="/"
              disabled="disabled"
              aria-label=""
              className="inline-flex items-center font-semibold text-white-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Yes! I want to support a child!
            </a>
          </div>
        </div>
        <div className="relative lg:w-1/2">
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="https://img.freepik.com/free-vector/clothing-donation-concept-flat-hand-drawn_52683-55267.jpg?w=996&t=st=1660982124~exp=1660982724~hmac=35267d4d5dd195a15c8ad3c2bb466917f6255880cc759b02f038a522ad65406b"
            alt=""
          />
          <a
            href="/"
            aria-label="Play Video"
            className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-white-900 bg-opacity-50 group hover:bg-opacity-25"
          >
            <div className="flex items-center justify-center w-16 h-16 transition duration-300 transform bg-white-100 rounded-full shadow-2xl group-hover:scale-110">
              <svg
                className="w-10 text-white-900"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z" />
              </svg>
            </div>
          </a>
        </div>
      </div>
      <div class="mouse_scroll">
        <div class="mouse">
          <div class="wheel"></div>
        </div>
        <div>
          <span class="m_scroll_arrows unu"></span>
          <span class="m_scroll_arrows doi"></span>
          <span class="m_scroll_arrows trei"></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
