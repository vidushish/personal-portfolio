import styles, { layout } from "../style";
import { educationList } from "../constants";
import Lottie from "react-lottie-player";
import animationData from "../lotties/quiz-mode-teal-dark.json";
import { motion } from "framer-motion";

const FeatureCard = ({
	icon,
	title,
	institution,
	duration,
	content1,
	content2,
	location,
	index,
}) => (
	<div
		className={`flex flex-row p-6 rounded-[20px] ${
			index === educationList.length - 1 ? "mb-0" : "mb-6"
		} feature-card`}
	>
		<div
			className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
		>
			<img
				src={icon}
				alt={title}
				className="w-[80%] h-[80%] object-contain"
			/>
		</div>

		<div className="flex-1 flex flex-col ml-4">
			<h4 className="font-poppins font-semibold text-[20px] leading-[30px] text-gradient">
				{title}
			</h4>

			<p className="font-poppins italic text-dimWhite text-[16px]">
				{institution}
			</p>

			<p className="font-poppins italic text-dimWhite text-[14px]">
				{location}
			</p>
      
			<p className="font-poppins text-dimWhite text-[14px]">{duration}</p>

			<p className="font-poppins text-dimWhite text-[16px] mt-1">
				• {content1}
			</p>

			{content2 && (
				<p className="font-poppins text-dimWhite text-[16px]">
					• {content2}
				</p>
			)}
		</div>
	</div>
);

const Education = () => {
	return (
		<section id="education">
			<h1 className="font-poppins font-semibold ss:text-[55px] text-[45px] text-white leading-[80px]">
				Education
			</h1>

			<motion.div
				className={layout.sectionReverse}
				initial={{ x: -40, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: true, amount: 0.2 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
			>
				<div className={layout.sectionImgReverse}>
					<div className="w-[80%] h-[80%] relative z-[5]">
						<Lottie
							loop
							play
							animationData={animationData}
						/>
					</div>

					<div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
					<div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
				</div>

				<div className={`${layout.sectionInfo} flex-col`}>
					{educationList.map((item, index) => (
						<FeatureCard
							key={item.id}
							index={index}
							{...item}
						/>
					))}
				</div>
			</motion.div>
		</section>
	);
};

export default Education;
