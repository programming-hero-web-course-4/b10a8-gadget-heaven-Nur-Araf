import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import LandingNav from "./components/navbar/LandingNav";
import HeroSection from "./components/landingPage/HeroSection";
import ShowAll from "./components/landingPage/ShowAll";

function App() {
  return (
    <div>
      <div className="px-2 py-1 lg:px-16 md:px-6 md:py-4 lg:py-8 font-sora bg-[#F6F6F6]">
        <LandingNav />
        <HeroSection />
        <ShowAll />
      </div>
      <Footer />
    </div>
  );
}

export default App;
