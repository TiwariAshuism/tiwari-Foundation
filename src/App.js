import React from "react";
import Navbar from "./Component/Navbar";
import Header from "./Component/Hero";
import Process from "./Component/Process";
import Campaigns from "./Component/Campaigns";
import Gallary from "./Component/Gallary";

import Footer from "./Component/Footer";
export const App = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Header />
      </div>
      <div>
        <Process />
      </div>
      <div>
      <Campaigns/>
      </div>
      <div>
        <Gallary/>
      </div>
      
    <div>
      <Footer/>
    </div>
    </div>
    
  );
};

export default App;
