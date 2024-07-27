import { FileText } from "lucide-react";
import React from "react";

const HeroSection = ({ name, description, imgSrc, cvlink }) => (
  <section className="flex flex-col items-center py-16 sm:py-36 justify-center">
    <div className="flex gap-4 sm:flex-row flex-col-reverse">
      <div className="flex flex-col items-start gap-3">
        <h1 className="font-extrabold text-shadow-md text-3xl sm:text-4xl md:text-5xl ">
          Hi, I'm {name}
        </h1>
        <p className="text-base-content text-shadow-sm opacity-80 text-sm  md:text-base lg:text-lg font-medium">
          {description}
        </p>
        <a
          href={cvlink}
          target="_blank"
          className="btn btn-sm text-shadow sm:btn-md btn-outline"
        >
          <FileText />
          CV
        </a>
      </div>
      <div className="avatar sm:pb-4 flex flex-col">
        <div className="ring-gray-500 ring-offset-base-100 w-32 sm:w-40 md:w-40 rounded-full ring ring-offset-2">
          <img src={imgSrc} alt="Profile" />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
