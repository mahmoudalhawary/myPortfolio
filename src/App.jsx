import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
// import Navbar from "./components/Navbar";
import PillNav from "./animation/PillNav";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import FloatingFAIcons from "../src/animation/BubblesBackground/FloatingFAIcons";
import {
  faBootstrap,
  faCss3Alt,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import Bio from "./components/Bio";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" relative h-full overflow-y-hidden  antialiased">
        <FloatingFAIcons
          icons={[faHtml5, faCss3Alt, faJs, faReact, faBootstrap]}
          count={10}
          colors={["#60A5FA", "#34D399", "#FBBF24", "#F472B6", "#A78BFA"]}
          sizeRange={[20, 34]}
          duration={[12, 20]}
          sway={22}
        />{" "}
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(59,130,246,0.18), transparent 45%),
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
            backgroundSize: "100% 100%, 60px 60px, 60px 60px",
          }}
        />
        <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img"></div>
        <div className="relative z-10 flex flex-col items-center  p-4 space-y-8 container mx-auto">
          <Navbar />
          <Hero />
          <Projects />
          <Bio/>
          <Skills />
          <WorkExperience />
          <Education />
          {/* <Navbar    /> */}
        </div>
      </div>
    </>
  );
}

export default App;
