import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
// import Navbar from "./components/Navbar";
import PillNav from './animation/PillNav';
import Navbar from "./components/Navbar";

function App() { 
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" relative h-full overflow-y-hidden  antialiased">
        <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img"></div>

        <div className="relative z-10 flex flex-col items-center  p-4 space-y-8 container mx-auto">
          <Navbar />
          <Hero />
          {/* <Navbar    /> */}
        </div>
      </div>
    </>
  );
}

export default App;
