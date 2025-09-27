import React from "react";
import { motion } from "framer-motion";

const DownloadCV = () => {
  return (
    <motion.a
      href="https://drive.google.com/uc?export=download&id=1n8lxfzUAFUbYFojFir8EKohOxOQJ0Zof"
      download="Mahmoud_Nasr_CV.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-3  btn btn-outline btn-info  rounded-full text-lg font-semibold  "
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
        Download CV
    </motion.a>
  );
};

export default DownloadCV;
