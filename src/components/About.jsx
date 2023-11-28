import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
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
    </>
  );
};

export default SectionWrapper(About, "about");
