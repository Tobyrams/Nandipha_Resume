import React from "react";

const EducationSection = ({ education }) => (
  <section
    id="education"
    className="flex flex-col items-start justify-center py-16 sm:py-36"
  >
    <div className="py-4 text-shadow-md rounded-md text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
      Education
    </div>
    {education.map((edu, index) => (
      <div
        key={index}
        className="w-full border-base-300 bg-base-100 border my-2"
      >
        <div className="py-4 font-medium flex justify-around items-center">
          <div className="items-start flex flex-col">
            <p className="text-sm text-shadow-sm sm:text-base md:text-lg lg:text-xl">
              {edu.institution}
            </p>
            {edu.degree && (
              <p className="text-base-content text-shadow-sm opacity-80 text-xs sm:text-sm md:text-base lg:text-lg font-normal">
                {edu.degree}
              </p>
            )}
          </div>
          <p className="text-sm text-shadow-sm sm:text-base md:text-lg lg:text-xl">
            {edu.years}
          </p>
        </div>
      </div>
    ))}
  </section>
);

export default EducationSection;
