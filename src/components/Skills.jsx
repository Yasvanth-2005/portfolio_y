import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { skills } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Icosahedron } from "@react-three/drei";

const SkillCard = ({ name, icon }) => (
  <div
    style={{
      width: "120px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      boxShadow: "2px 3px 2px 3px rgba(0,0,0,0.2)",
      padding: "10px",
    }}
    variants={fadeIn("", "", 0.1, 1)}
  >
    <img src={icon} alt={name} style={{ width: "80px" }} />
    <p
      style={{
        fontWeight: "400",
        marginTop: "10px",
        textAlign: "center",
        textTransform: "uppercase",
      }}
    >
      {name}
    </p>
  </div>
);

export default function Skills() {
  return (
    <section className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What do I know</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>
      <div
        className="mt-20 flex flex-wrap gap-10"
        style={{ justifyContent: "center", alignItems: "stretch" }}
      >
        {skills.map((skill, index) => (
          <SkillCard key={skill.title} index={index} {...skill} />
        ))}
      </div>
    </section>
  );
}
