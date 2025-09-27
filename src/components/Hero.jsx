import React, { useState, useEffect } from "react";
import ProfileCard from "../animation/ProfileCard";
import meIcon from "../assets/meIcon.ico";
import { HERO } from "../constants";
import { motion } from "framer-motion";
import DownloadCV from "./MyCv";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex min-h-screen flex-wrap items-center" id="Hero">
      <motion.div
        className=" w-full lg:w-1/2"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className=" my-8 p-2 text-4xl font-bold md:text-5xl lg:text-[7rem]">
          {HERO.name}
        </h2>
        <p className="p-2 text-3xl tracking-tighter lg:text-4xl">
          {HERO.greet}
        </p>
        <p className="mb-8 p-2 text-xl">{HERO.description}</p>
        <div className="ms-2  ">
          <DownloadCV />
        </div>
      </motion.div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full lg:w-1/2 lg:p-8"
      >
        <div className="flex justify-center">
          {isLoading ? (
            <div className="skeleton h-96 w-64 rounded-2xl"></div>
          ) : (
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
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
