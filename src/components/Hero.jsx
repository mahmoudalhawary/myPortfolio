import React, { useState } from "react";
import ProfileCard from "../animation/ProfileCard";
import meIcon from "../assets/meIcon.ico";
import { HERO } from "../constants";
import { motion } from "framer-motion";
import DownloadCV from "./MyCv";
import TextType from "../animation/TextType";

const Hero = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className="flex min-h-screen flex-wrap items-center" id="Hero">
      {/* النصوص */}
      <motion.div
        className="w-full lg:w-1/2"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="my-6 p-2 text-4xl font-bold md:text-5xl lg:text-[5rem] leading-tight">
          <TextType
            text={["MAHMOUD NASR", "Software Engineer", "Frontend Developer"]}
            typingSpeed={100}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </h2>
        <p className="p-2 text-2xl tracking-tight lg:text-3xl">{HERO.greet}</p>
        <p className="mb-6 p-2 text-lg lg:text-xl">{HERO.description}</p>
        <div className="my-2">
          <DownloadCV />
        </div>
      </motion.div>

      {/* البروفايل */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full lg:w-1/2 lg:p-8"
      >
        <div className="flex justify-center">
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
            onLoad={() => setIsImageLoaded(true)}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
