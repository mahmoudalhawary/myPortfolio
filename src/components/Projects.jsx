import React from "react";
import { PROJECTS } from "../constants";
import {motion} from "framer-motion";

function Projects() {
  return (
    <section className="pt-20" id="projects">
      <motion.h2
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
 
      className="lg:text-4xl text-center text-3xl mb-8">Projects</motion.h2>
      <div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <motion.div
            initial={{ opacity: 0 ,scale:0.9}}
            whileInView={{ opacity: 1, scale:1}}
            transition={{ duration: 0.8, delay: project.id * 0.1}}
            whileHover={{ scale: 1.05  }}
            key={project.id}
            className="group relative rounded-3xl shadow-xl overflow-hidden cursor-pointer"
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={project.image}
              alt={project.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <motion.div

              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            
            className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-xl mb-2 font-semibold">{project.name}</h3>
              <p className="mb-6 px-4 text-center">{project.description}</p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white text-black px-4 py-2 font-semibold hover:bg-gray-200 transition"
              >
                View on GitHub
              </a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
