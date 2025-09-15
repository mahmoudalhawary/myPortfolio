import React from "react";
import { PROJECTS } from "../constants";

function Projects() {
  return (
    <section className="pt-20" id="projects">
      <h2 className="lg:text-4xl text-center text-3xl mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="group relative rounded-3xl shadow-xl overflow-hidden cursor-pointer"
          >
            <img
              src={project.image}
              alt={project.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
