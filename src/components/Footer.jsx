import React from "react";
import { motion } from "framer-motion";
import { SOCIAL_MEDIA_LINKS } from "../constants";

function Footer() {
  return (
    <motion.div
      className="mb-8 mt-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="flex items-center justify-center gap-8"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
      >
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            {link.icon}
          </motion.a>
        ))}
      </motion.div>

      <motion.p
        className="text-center text-sm text-gray-500 mt-2"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.7 }}
      >
        &copy;  Mahmoud Nasr {new Date().getFullYear()} . All rights reserved.
      </motion.p>
    </motion.div>
  );
}

export default Footer;
