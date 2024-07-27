import React from "react";
import { useState, useEffect } from "react";
import portfolioData from "./portfolioData.json";
import "daisyui/dist/full.css"; // Import DaisyUI styles
import "@fontsource/poppins";

import { Header, BackgroundTexture, BackToTopBtn } from "./components";
import {
  HeroSection,
  AboutSection,
  EducationSection,
  SkillsSection,
  ContactSection,
} from "./sections";

const App = () => {
  return (
    <div className="min-h-screen bg-base-100 scroll-smooth font-poppins ">
      <BackgroundTexture />
      <BackToTopBtn />

      <Header />
      <main className="flex flex-col py-10 w-full items-center relative z-10">
        <div className="sm:w-[600px] px-10 sm:px-10">
          <HeroSection
            name={portfolioData.name}
            title={portfolioData.title}
            description={portfolioData.description}
            imgSrc={portfolioData.imgSrc}
            cvlink={portfolioData.cvlink}
          />
          <AboutSection about={portfolioData.aboutDescription} />
          <EducationSection education={portfolioData.education} />
          <SkillsSection skills={portfolioData.skills} />
          <ContactSection contact={portfolioData.contact} />
        </div>
      </main>
    </div>
  );
};

export default App;
