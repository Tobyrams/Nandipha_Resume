import React from "react";

const AboutSection = ({ about }) => (
  <section
    id="about"
    className="flex flex-col items-start justify-center py-16 sm:py-36"
  >
    <div className="py-2 text-shadow-md rounded-md text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
      About
    </div>
    <p className="text-base-content text-shadow-sm opacity-80 text-sm md:text-base lg:text-lg font-medium">
      {about}
    </p>
  </section>
);

export default AboutSection;
