import React from "react";
import styles from "../style";
import { positionsOfResponsibility } from "../constants";
import { BsLink45Deg } from "react-icons/bs";
import { motion } from "framer-motion";

const Content = ({ text, link }) => {
  return (
    <p className="font-poppins font-normal text-[14px] text-dimWhite my-3 leading-[28px]">
      • {text}{" "}
      {link && (
        <a href={link} target="_blank" rel="noreferrer">
          <BsLink45Deg className="inline hover:text-teal-200 ml-1" />
        </a>
      )}
    </p>
  );
};

const PositionCard = ({ organisation, title, duration, logo, content }) => {
  return (
    <motion.div
      className="flex flex-col px-8 py-10 rounded-[20px] max-w-[380px] bg-black-gradient shadow-card"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex items-start">
        <img
          src={logo}
          alt={organisation}
          className="w-[52px] h-[52px] rounded-full"
        />
        <div className="ml-4">
          <h4 className="font-poppins font-semibold text-[20px] text-gradient">
            {organisation}
          </h4>
          <p className="font-poppins text-white text-[16px] mt-1">
            {title}
          </p>
          <p className="font-poppins italic text-dimWhite text-[14px] mt-1">
            {duration}
          </p>
        </div>
      </div>

      <div className="mt-4">
        {content.map((item, index) => (
          <Content key={index} {...item} />
        ))}
      </div>
    </motion.div>
  );
};

const PositionsOfResponsibility = () => {
  return (
    <section id="por" className="mt-16 mb-24">
      <h1 className="font-poppins font-semibold ss:text-[55px] text-[45px] text-white leading-[80px]">
        Positions of Responsibility
      </h1>

      <div className={`${styles.flexCenter} flex-col mt-6`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {positionsOfResponsibility.map((role) => (
            <PositionCard key={role.id} {...role} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PositionsOfResponsibility;
