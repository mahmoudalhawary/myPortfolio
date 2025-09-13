import React from "react";
import Orb from "../animation/Orb";
import ProfileCard from "../animation/ProfileCard";
import meIcon from "../assets/meIcon.ico";
import { HERO } from "../constants";

 const Hero = () => {
  return (
    <div className="flex min-h-screen flex-wrap  items-center">
      {/* <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>
 */}
  

      <div className=" w-full lg:w-1/2">
        <h2 className=" my-8 p-2 text-4xl font-bold md:text-5xl lg:text-[7rem]">
          {HERO.name}{" "}
        </h2>
        <p className="p-2 text-3xl tracking-tighter lg:text-4xl">
          {HERO.greet}
        </p>
        <p className="mb-8 p-2 text-xl">{HERO.description}</p>
      </div>
      <div className="w-full lg:w-1/2 lg:p-8">
        <div className="flex justify-center ">
          <ProfileCard
            name="Mahmoud Nasr"
            title="Software Engineer"
            handle="MahmoudNasr"
            status="Online"
            contactText="Contact Me"
            avatarUrl={meIcon}
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={true}
            onContactClick={() =>
              window.open("https://wa.me/201006132539", "_blank")
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
