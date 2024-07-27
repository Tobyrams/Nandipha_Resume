import React from "react";

const SkillsSection = ({ skills }) => (
  <section
    id="skills"
    className="flex flex-col items-start justify-center py-16 sm:py-36"
  >
    <div className="py-4 text-shadow-md rounded-md text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
      Skills
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <button
          key={index}
          className="btn text-shadow-md btn-sm md:btn-md lg:btn-lg btn-primary"
        >
          {skill}
        </button>
      ))}
    </div>
  </section>
);

export default SkillsSection;
