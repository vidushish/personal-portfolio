import { motion } from "framer-motion";
import { vidushiLogo } from "../assets";

const Loading = () => {
  return (
    <div className="bg-primary w-full h-screen flex items-center justify-center">
      <motion.img
        src={vidushiLogo}
        alt="Vidushi Sharma"
        className="w-[160px] md:w-[200px] object-contain"
        initial={{
          scale: 0.7,
          opacity: 0.6,
        }}
        animate={{
          scale: 1.25,
          opacity: 1,
        }}
        transition={{
          duration: 0.9,
          ease: "easeOut",
        }}
      />
    </div>
  );
};

export default Loading;
