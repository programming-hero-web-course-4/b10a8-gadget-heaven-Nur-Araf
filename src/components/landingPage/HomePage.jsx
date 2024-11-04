import React from 'react'
import LandingNav from '../navbar/LandingNav';
import HeroSection from './HeroSection';
import ShowAll from './ShowAll';
import { Outlet } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <LandingNav />
      <HeroSection />
      <ShowAll />
    </div>
  );
}

export default HomePage;