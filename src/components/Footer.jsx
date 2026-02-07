import React from "react";
import Button from "./Button";
import { socialMedia, aboutMe, resumeLink } from "../constants";
import { profilePic } from "../assets";
import { layout } from "../style";
import { HiOutlineDocumentText } from "react-icons/hi";

const Footer = () => (
  <footer id="contactMe" className="bg-gray-900 sm:px-16 px-6">
    <div
      className={`${layout.sectionReverse} xl:max-w-[1280px] w-full mx-auto gap-y-4`}
    >
      <div className={layout.sectionInfo}>
        <h2 className="text-xl font-bold font-poppins text-white">
          {aboutMe.name}
        </h2>

        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[30px] max-w-[470px] mt-4">
          {aboutMe.tagLine}
        </p>

        <div className="flex flex-row mt-4">
          {socialMedia.map((social) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mr-5 text-[25px] hover:text-teal-200 transition"
            >
              {React.createElement(social.icon)}
            </a>
          ))}
        </div>

        <a href={resumeLink} target="_blank" rel="noopener noreferrer">
          <Button
            styles="mt-8 inline-flex items-center justify-center"
            text="View Resume"
            icon={HiOutlineDocumentText}
          />
        </a>
      </div>

      <div className="md:ml-auto mt-10 md:mt-0">
        <img
          src={profilePic}
          alt={aboutMe.name}
          className="w-[180px] h-[180px] border-2 border-teal-200 rounded-full object-cover"
        />
      </div>
    </div>

    <div className="text-center font-poppins font-normal text-dimWhite text-xs sm:text-sm pb-4 mt-6">
      <p>Built with 💙 by {aboutMe.name}</p>
    </div>
  </footer>
);

export default Footer;
