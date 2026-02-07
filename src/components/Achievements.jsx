import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { TiNews } from "react-icons/ti";
import { motion } from "framer-motion";
import { LinkPreview } from "./LinkPreview";
import { achievements } from "../constants";
import styles from "../style";

const Achievements = () => {
  return (
    <section
      className="bg-primary text-white mt-5 md:mt-10 relative"
      id="achievements"
    >
      <div className={`bg-primary ${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <h1 className="flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px]">
            Achievements
          </h1>
        </div>
      </div>

      <div className="absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full blue__gradient bottom-40" />

      <div className={`bg-primary ${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <div className="container px-2 py-10 mx-auto mb-8">
            <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
              {achievements.map((achievement, index) => (
                <AchievementCard key={index} {...achievement} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AchievementCard = (props) => {
  return (
    <motion.div
      className="flex flex-col justify-around px-6 py-4 rounded-[20px] transition-all duration-300 border hover:border-teal-200 hover:shadow-lg hover:shadow-teal-200/20"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <img
        src={props.icon}
        alt={props.event}
        className="w-[45px] h-[45px] rounded-full mt-1 mb-2"
      />

      <div className="mt-3">
        <p className="font-poppins text-xl text-white mb-2">
          {props.event}
        </p>

        <p className="font-poppins italic text-lg text-gradient mb-3">
          {props.position}
        </p>

        {props.content1 && (
          <p className="text-dimWhite text-sm mb-1">🚀 {props.content1}</p>
        )}
        {props.content2 && (
          <p className="text-dimWhite text-sm mb-1">⚡ {props.content2}</p>
        )}
        {props.content3 && (
          <p className="text-dimWhite text-sm mb-3">🔥 {props.content3}</p>
        )}
      </div>

      <div className="flex gap-3 text-dimWhite">
        {props.article && (
          <LinkPreview url={props.article}>
            <a
              href={props.article}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-200 hover:scale-110 transition"
            >
              <TiNews size="1.5rem" />
            </a>
          </LinkPreview>
        )}

        {props.github && (
          <LinkPreview url={props.github}>
            <a
              href={props.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-200 hover:scale-110 transition"
            >
              <AiFillGithub size="1.5rem" />
            </a>
          </LinkPreview>
        )}
      </div>
    </motion.div>
  );
};

export default Achievements;
