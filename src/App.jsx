import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <div className="px-2 py-1 lg:px-16 md:px-6 md:py-4 lg:py-8 font-sora bg-[#F6F6F6]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
