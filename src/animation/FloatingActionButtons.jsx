import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import { SOCIAL_MEDIA_LINKS } from "../constants";

function FloatingSocial() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6">
      {!open && (
        <motion.button
          onClick={() => setOpen(!open)}
          className="w-12 h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center shadow-lg"
          whileHover={{ scale: 1.1 }}
        >
          <svg
            aria-label="New"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </motion.button>
      )}

      {open && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              transition: { staggerChildren: 0.05, staggerDirection: -1 },
            },
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="flex flex-col gap-3 mt-4 items-center"
        >
          {SOCIAL_MEDIA_LINKS.map((Icon, i) => (
            <motion.a
              key={i}
              href={Icon.href}
              target="_blank"
              rel="noreferrer"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="w-12 h-12 flex items-center justify-center rounded-full   text-white"
              whileHover={{ scale: 1.3, rotate: 10 }}
            >
              {Icon.icon}
            </motion.a>
          ))}
          <motion.button
            onClick={() => setOpen(!open)}
            className="w-12 h-12   rounded-full bg-indigo-500 text-white flex items-center justify-center shadow-lg"
            whileHover={{ scale: 1.1 }}
          >
            <svg
              aria-label="New"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}

export default FloatingSocial;
