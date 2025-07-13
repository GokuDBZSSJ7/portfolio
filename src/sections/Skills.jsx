import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "Angular", destaque: true },
  { name: ".NET", destaque: true },
  { name: "React Native", destaque: false },
  { name: "MySQL", destaque: true },
  { name: "Laravel", destaque: false },
  { name: "TailwindCSS", destaque: false },
  { name: "TypeScript", destaque: true },
  { name: "JavaScript", destaque: false },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full bg-[#0F172A] text-white py-20 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-poppins font-semibold mb-12">
          Minhas Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
              className={`rounded-xl px-4 py-3 text-sm font-medium text-center border transition ${
                skill.destaque
                  ? "border-[#A3E635] text-[#A3E635] bg-[#0C1424]"
                  : "border-white/10 text-white/80 bg-[#0C1424]/60"
              }`}
            >
              {skill.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
