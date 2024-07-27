import { AtSign, Github, Linkedin, MapPin } from "lucide-react";
import React from "react";

const ContactSection = ({ contact }) => (
  <section
    id="contact"
    className="flex flex-col items-start justify-center py-16 sm:py-36"
  >
    <div className="py-2 text-shadow-md rounded-md text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
      Contact Me
    </div>

    <div className="w-full border-base-300 bg-base-100 flex flex-col items-center h-36 gap-4 justify-center border  my-4">
      <div className="py-4 font-medium flex fc gap-4 justify-around text-center">
        <p className="flex  text-shadow-sm items-center text-sm md:text-base lg:text-lg">
          <AtSign />
          {contact.email}
        </p>
        <p className="flex text-shadow-sm items-center text-sm md:text-base lg:text-lg">
          <MapPin />
          {contact.location}
        </p>
      </div>
      <div className="flex gap-4">
        <a
          href={contact.linkedin}
          className="tooltip tooltip-left cursor-pointer"
          data-tip="LinkedIn"
          target="_blank"
        >
          <Linkedin />
        </a>
        <a
          href={contact.github}
          className="tooltip tooltip-right cursor-pointer"
          data-tip="Github"
          target="_blank"
        >
          <Github />
        </a>
      </div>
    </div>
  </section>
);

export default ContactSection;
