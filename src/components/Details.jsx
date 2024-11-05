import React from 'react'
import Footer from './footer/Footer';
import ShowingDetails from './products/ShowingDetails';
import Navbar from './navbar/Navbar';

const Details = () => {

  return (
    <div>
      <div className="px-2 py-1 lg:px-16 md:px-6 md:py-4 lg:py-6 font-sora bg-[#F6F6F6]">
        <Navbar />
        <ShowingDetails />
      </div>
      <Footer />
    </div>
  );
}

export default Details;