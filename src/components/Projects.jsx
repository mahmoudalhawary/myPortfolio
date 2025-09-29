import React, { useState } from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaGithub, FaGlobe } from "react-icons/fa";

function Projects() {
  const [activeId, setActiveId] = useState(null);

  return (
    <section className="pt-20" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="lg:text-4xl text-center text-3xl mb-8"
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: project.id * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="group relative rounded-3xl shadow-xl overflow-hidden cursor-pointer"
            onClick={() =>
              setActiveId(activeId === project.id ? null : project.id)
            }
          >
            <img
               src={project.image}
              alt={project.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: activeId === project.id ? 1 : 0,
              }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white transition-opacity duration-500"
            >
              <h3 className="text-xl mb-2 font-semibold">{project.name}</h3>
              <p className="mb-6 px-4 text-center">{project.description}</p>

              <div className="flex gap-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 font-semibold hover:bg-gray-200 transition"
                >
                  <FaGithub /> GitHub
                </a>

                {project.LiveLink && (
                  <a
                    href={project.LiveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 font-semibold hover:bg-gray-200 transition"
                  >
                    <FaGlobe /> Live
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
