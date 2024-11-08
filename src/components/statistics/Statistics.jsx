import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import DataOfUser from './DataOfUser';

const Statistics = () => {
  document.title = "Statistics - Gadget Heaven";
  return (
    <div>
      <div className="px-2 py-1 lg:px-16 md:px-6 md:py-4 lg:py-6 font-sora bg-[#F6F6F6]">
        <Navbar />
        <DataOfUser/>
      </div>
      <Footer />
    </div>
  );
}

export default Statistics;