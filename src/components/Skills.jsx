import React from "react";
import { skills } from "../constants";
import { motion } from "framer-motion";

export const SkillIcon = ({ icon, name }) => {
	if (!icon) return null;

	return (
		<div
			className="
        flex flex-col items-center justify-center
        w-[140px] h-[130px]
        rounded-xl
        bg-white/5
        border border-white/10
        hover:border-teal-400/50
        hover:bg-white/10
        transition-all duration-300
      "
		>
			<span
				className="
          text-white
          text-[42px]
          sm:text-[48px]
          hover:text-teal-300
          transition-colors
        "
			>
				{React.createElement(icon)}
			</span>

			<p className="font-poppins text-gray-300 text-[14px] mt-3 tracking-wide">
				{name}
			</p>
		</div>
	);
};

const SkillCard = ({ title, items }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
			className="mb-16"
		>
			{/* Section Title */}
			<div className="mb-8">
				<h3 className="font-poppins font-semibold text-[24px] text-teal-300">
					{title}
				</h3>
				<div className="w-12 h-[2px] bg-teal-400 mt-2"></div>
			</div>

			{/* Skills Grid */}
			<div
				className="
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-5
          xl:grid-cols-6
          gap-x-10 gap-y-12
          place-items-center
        "
			>
				{items.map((item) => (
					<SkillIcon
						key={item.id}
						{...item}
					/>
				))}
			</div>
		</motion.div>
	);
};

const Skills = () => {
	return (
		<section
			id="skills"
			className="w-full py-20"
		>
			<h1
				className="
          font-poppins font-semibold
          text-[45px] sm:text-[55px]
          text-white
          mb-16
        "
			>
				Skills
			</h1>

			{skills.map((skill) => (
				<SkillCard
					key={skill.title}
					{...skill}
				/>
			))}
		</section>
	);
};

export default Skills;
