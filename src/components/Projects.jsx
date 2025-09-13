import React from "react";
import { PROJECTS } from "../constants";

function Projects() {
  return (
    <section className="pt-20" id="projects">
      <h2 className="lg:text-4xl text-center text-3xl mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* 
id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/user/personal-portfolio", */}
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p className="text-gray-600">{project.description}</p>
              <a
                href={project.githubLink}
                className="text-blue-500 hover:underline"
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
