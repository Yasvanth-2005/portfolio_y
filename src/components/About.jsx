import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-router-dom";
import { socialLinks } from "../constants";
import me from "../assets/me.jpg";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a Experienced Full Stack Web Developer with a strong proficiency in
        the MERN stack. Proven track record of delivering high-quality web
        applications and solutions. Currently, actively engaged in exploring and
        gaining expertise in Web 3.0 technologies. Passionate about staying
        updated with the latest trends in web developments.
      </motion.p>

      <div className="flex justify-between items-center max-md:flex-col mt-[40px] w-full max-w-3xl">
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="w-[320px] flex justify-center items-center max-md:mb-5"
        >
          <img src={me} alt="Yasvanth" className="h-[360px] rounded-md" />
        </motion.div>
        <motion.div variants={fadeIn("", "", 0.1, 1)}>
          <h1 className="text-3xl max-md:text-2xl">Yasvanth Hanumantu</h1>
          <p className="text-sm text-gray-500">Full Stack Web Developer</p>
          <p className="text-sm text-gray-500">+91 8330930503</p>
          <p className="text-sm text-gray-500">yasvanthhanumantu1@gmail.com</p>

          <div className="flex gap-2 mt-4">
            {socialLinks.map((link) => (
              <Link to={link.link}>
                <div className="rounded-md bg-gray-300">
                  <img src={link.icon} alt={link.name} width={24} height={24} />
                </div>
              </Link>
            ))}
          </div>

          <h1 className="mt-5 text-2xl pl-2 border-l-4">Education Details</h1>

          <div className="flex flex-col mt-4">
            <h1 className="text-lg">Pre University Course (2021 - 2023)</h1>
            <p className="text-sm text-gray-500">
              Rajiv Ghandi University of Knowledge Technologies
            </p>
            <p className="text-sm text-gray-500">CGPA :- 9.83</p>
          </div>

          <div className="flex flex-col mt-4">
            <h1 className="text-lg">B.Tech (2023 - present)</h1>
            <p className="text-sm text-gray-500">
              Computer Science Engineering
            </p>
            <p className="text-sm text-gray-500">
              Rajiv Ghandi University of Knowledge Technologies
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
