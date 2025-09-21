import React from 'react'
import { EDUCATION } from '../constants'

function Education() {
  return (

    <section className="py-8" id='education'>
        <h2 className="text-3xl text-center font-bold mb-4">Education</h2>
        {EDUCATION.map((edu, index) => (
          <div key={index} className="mb-6 p-10">
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="text-lg">{edu.institution}</p>
            <p className="text-sm text-stone-300">{edu.duration}</p>
            <p className="mt-2">{edu.description}</p>
          </div>
        ))}
    </section>
   )
}

export default Education