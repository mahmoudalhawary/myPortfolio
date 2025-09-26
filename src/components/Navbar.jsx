import React, { useState } from "react";
import logo from "../assets/meIcon.ico";
import PillNav from "../animation/PillNav";
import { NAVIGATION_LINKS } from "../constants";
import { motion } from "framer-motion";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    console.log(isMobileMenuOpen);
  };
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);

    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement;
      getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div>
      <nav className="fixed left-0 right-0 top-0 z-50">
        {/* Desktop menu */}
        <div className="mx-auto hidden max-w-2xl items-center justify-center rounded-lg   py-3  lg:flex">
          {/* <div className="flex justify-between items-center gap-6 ">
            <div>
              <a href="#">
                <img src={logo} alt="logo" width={150} />
              </a>
            </div>
            <div>
              <ul className="flex gap-6 text-white">
                <li>
                  <a
                    href="#about"
                    onClick={(e) => handleLinkClick(e, "#about")}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    onClick={(e) => handleLinkClick(e, "#projects")}
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => handleLinkClick(e, "#contact")}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div> */}

          <PillNav
            logo={logo}
            logoAlt="Company Logo"
            items={NAVIGATION_LINKS}
            activeHref="/Hero"
            className="custom-nav"
            ease="power2.easeOut"
            baseColor="#000000"
            pillColor="#ffffff"
            hoveredPillTextColor="#ffffff"
            pillTextColor="#000000"
          />
        </div>

        {/* Mobile menu */}
        <div className="  rounded-lg  p-3 backdrop-blur-lg lg:hidden">
          <div className="flex justify-between items-center">
            <div>
              {/* <a href="#">
                <img src={logo} alt="logo" width={150} />
              </a> */}
            </div>

            <div className="flex-col-reverse   items-between justify-between   w-full">
              <motion.button
                initial={{ scale: 0.9 }}
                whileHover={{ scale: 1 }}
                className=" focus:outline-none lg:hidden "
                onClick={toggleMenu}
              >
                {isMobileMenuOpen ? (
                  <motion.svg
                    whileHover={{ scale: 1, rotate: 135 }}
                    className="swap-on fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 512 512"   hdfgrmm 
                  >
                    <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                  </motion.svg>
                ) : (
                  <svg
                    className="swap-off fill-current "
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 512 512"
                  >
                    <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                  </svg>
                )}
              </motion.button>
              {isMobileMenuOpen && (
                <ul className="ml-4 flex flex-col gap-4 backdrop-blur-md">
                  {NAVIGATION_LINKS.map((item, index) => (
                    <motion.li
                      initial={{ opacity: 0, x: -1500 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.13 }}
                      className="bg-white/10   rounded-lg p-1  hover:scale-105 transition-transform duration-200"
                      key={index}
                    >
                      <a
                        href={item.href}
                        //  onClick={(e) => handleLinkClick(e, item.href)}
                        className="block text-white w-full  p-1 px-4 hover:text-blue-400"
                      >
                        {item.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
