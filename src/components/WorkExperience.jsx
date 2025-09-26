import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

function WorkExperience() {
  return (
    <section id="work" className="pt-20">
      <motion.h2
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
       className="mb-5 text-4xl font-semibold tracking-tighter text-center">
        Work Experience
      </motion.h2>
      <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 ,delay:0.3}} 
        className="space-y-8">
        {EXPERIENCES.map((exp, index) => (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            key={index}
            className=" rounded-xl  border border-stone-50/30 bg-white/10 p-4"
          >
            <h3 className="text-2xl font-semibold">{exp.title}</h3>
            <p className="text-xl">{exp.company} </p>
            <p className="text-sm text-stone-300">{exp.duration} </p>
            <p className="text-base mt-2">{exp.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default WorkExperience;
