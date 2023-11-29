import { motion } from "framer-motion";

import { styles } from "../styles";
import Computer from "../assets/pngwing.com.png";

const Hero = () => {
  return (
    <section>
      <div className="relative w-full h-screen mx-auto flex">
        <div
          className={`absolute inset-0 top-[25%] max-md:top-[20%] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-[180px] h-[240px] violet-gradient" />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915EFF]">Yasvanth</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              A Full Stack <span className="text-[#915EFF]">Web Developer</span>
            </p>
            <p className="mt-2 text-2xl text-white-100">
              I create web and mobile apps for seamless
              <br /> digital experiences
            </p>
          </div>
        </div>
        {/* <div>
          <img
            src={Computer}
            alt="lap"
            className="absolute right-[10%] top-[50%] max-lg:hidden w-[250px] h-[auto]"
          />
        </div> */}
        <div className="absolute bottom-[100px] w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
