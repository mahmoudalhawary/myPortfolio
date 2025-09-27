import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.png";
import projectImage2 from "../assets/project2.png";
import projectImage3 from "../assets/project3.png";
import projectImage4 from "../assets/project4.png";
import projectImage5 from "../assets/project5.png";
import projectImage6 from "../assets/project6.png";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandAngular } from "react-icons/tb";
import { SiMongodb, SiTailwindcss } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import {
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
} from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
export const HERO = {
  name: "MAHMOUD NASR",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate frontend developer with a knack for creating beautiful and functional user interfaces. I like transforming ideas into engaging web experiences for over a decade.",
};
export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/mahmoudalhawary/myPortfolio",
    LiveLink: "https://mahmoudalhawary.github.io/myPortfolio/",
  },
  {
    id: 2,
    name: "E-Commerce Platform",
    description:
      "An e-commerce web application developed using react.js  featuring a comprehensive product catalog, shopping cart, and checkout system.",
    image: projectImage2,
    githubLink: "https://github.com/mahmoudalhawary/Shoe-store",
    LiveLink: "https://mahmoudalhawary.github.io/Shoe-store/#",
  },
  {
    id: 3,
    name: "My Movie",
    description:
      "A movie discovery application built with React and Redux for efficient movie searching and viewing, including features like user authentication, watchlists, and ratings.",
    image: projectImage3,
    githubLink: "https://github.com/mahmoudalhawary/MyMovie",
    LiveLink: "https://mahmoudalhawary.github.io/MyMovie/",
  },
  {
    id: 4,
    name: "agazaty",
    description: "A agazaty is a leave management system (graduation project).",
    image: projectImage4,
    githubLink: "https://github.com/mahmoudalhawary/Agazaty1",
    LiveLink: "https://agazaty.vercel.app/",
  },
  {
    id: 5,
    name: "ITI graduation project",
    description:
      "An e-commerce web application developed using Angular.js for payment integration, featuring a comprehensive product catalog, shopping cart, and checkout system",
    image: projectImage5,
    githubLink: "https://github.com/user/blog-platform",
  },
  {
    id: 6,
    name: " Timer",
    description:
      "A real-time timer application using  For focusing. Built with html and JS.",
    image: projectImage6,
    githubLink: "https://github.com/mahmoudalhawary/Timer",
    LiveLink: "https://mahmoudalhawary.github.io/Timer/",
  },
];
export const BIO = [
  "In his senior year at South Valley University of Technology, Mahmoud Nasr actively trained and contributed within the university's developer community, where he gained practical exposure to real-world projects and teamwork.",
  "Mahmoud Nasr studied Computer Science at the South Valley University of Technology, from which he graduated in 2025. Following his education, he honed his craft and expertise online, immersing himself in the world of frontend development.",
  "As a multi-disciplinary frontend developer, Mahmoud Nasr brings a wealth of skills and expertise to his work. From his deep understanding of HTML, CSS, and JavaScript to his proficiency in modern frameworks like React and Angular.js, he possesses a versatile skill set that allows him to craft stunning and unforgettable web experiences for his clients and audiences alike.",
];
export const SKILLS = [
  {
    icon: (
      <div className="flex gap-2">
        <FaHtml5 className="text-4xl text-orange-600 lg:text-5xl" />
        <FaCss3Alt className="text-4xl text-blue-500 lg:text-5xl" />
      </div>
    ),
    name: "HTML, CSS ",
    experience: "3+ years",
  },
  {
    icon: <FaJsSquare className="text-4xl text-yellow-400 lg:text-5xl" />,
    name: " JavaScript",
    experience: "3+ years",
  },
  {
    icon: <DiRedis className="text-4xl text-red-600 lg:text-5xl" />,
    name: "C++",
    experience: "3+ years",
  },
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "2+ years",
  },
  {
    icon: <FaBootstrap className="text-4xl text-purple-600 lg:text-5xl" />,
    name: "Bootstrap",
    experience: "2.5+ years",
  },
  {
    icon: <TbBrandAngular className="text-4xl text-red-500 lg:text-5xl" />,
    name: "Angular.js",
    experience: "1.5+ years",
  },
  {
    icon: <SiTailwindcss className="text-4xl text-sky-400 lg:text-5xl" />,
    name: "Tailwind CSS",
    experience: "1+ year",
  }
];

export const EXPERIENCES = [
  {
    title: "Junior Web Developer",
    company: "Freelancer at Mostaql",
    duration: "August 2023 – Present",
    description:
      "As a Junior Web Developer, I worked on building and maintaining responsive web applications for various clients. My responsibilities included developing user-friendly interfaces with HTML, CSS, and JavaScript, ensuring cross-browser compatibility, and optimizing performance. I collaborated with clients to translate requirements into functional features and continuously enhanced my problem-solving and coding skills.",
  },
  {
    title: "Frontend Developer Support",
    company: "SVU Support Team",
    duration: "July 2022 – August 2023",
    description:
      "Provided frontend development support by contributing to modern web applications using React, Redux, and JavaScript. Collaborated with designers, backend developers, and product managers to create seamless user experiences. Assisted in debugging, implementing new features, and maintaining project codebases while gaining practical experience in agile teamwork.",
  },
];


export const EDUCATION = [

{
  degree: "Bachelor of Science in Information Technology",
  institution: "South Valley University, Qena, Egypt",
  duration: "September 2021 - June 2025",
  description:
    "Graduated with a strong foundation in programming fundamentals, algorithms, and problem-solving. Studied the core concepts of computer science, including data structures, object-oriented programming, and database basics. Built several academic projects that strengthened my understanding of software development and web technologies.",
},

  {
    degree: "ITI Summer Training",
    institution: "Information Technology Institute (ITI)",
    duration: "August 2024 - September 2024",
    description:
      "      Completed a practical training program where I studied frontend development for the second time, this time focusing on Angular. Applied the concepts directly in a real graduation project from the institute, gaining hands-on experience in building dynamic and scalable web applications."

      
  },
];

// done
export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/mahmoud.nasr.876051",
    icon: (
      <FaFacebook
        fontSize={25}
        className="hover:text-[#1877F2] transition-colors duration-300 hover:scale-125"
      />
    ),
  },
  {
    href: "https://wa.me/201006132539",
    icon: (
      <FaWhatsapp
        fontSize={25}
        className="hover:text-[#25D366] transition-colors duration-300 hover:scale-125"
      />
    ),
  },
  {
    href: "https://www.instagram.com/m_a_h_m_o_u_d3759?igsh=NDN6b21meHYzZng1",
    icon: (
      <FaInstagram
        fontSize={25}
        className="hover:text-[#E4405F] transition-colors duration-300 hover:scale-125"
      />
    ),
  },
  // {
  //   href: "https://x.com/",
  //   icon: (
  //     <FaXTwitter
  //       fontSize={25}
  //       className="hover:text-black transition-colors duration-300 hover:scale-125"
  //     />
  //   ),
  // },
  {
    href: "https://github.com/mahmoudalhawary",
    icon: (
      <FaGithub
        fontSize={25}
        className="hover:text-[#333] transition-colors duration-300 hover:scale-125"
      />
    ),
  },
  {
    href: "https://www.linkedin.com/in/mahmoud-alhawary1",
    icon: (
      <FaLinkedin
        fontSize={25}
        className="hover:text-[#0077B5] transition-colors duration-300 hover:scale-125"
      />
    ),
  },

  {
    href: "mailto:mahmoudnasr11178@gmail.com",
    icon: (
      <FaEnvelope
        fontSize={25}
        className="hover:text-[#EA4335] transition-colors duration-300 hover:scale-125  "
      />
    ),
  },
];
