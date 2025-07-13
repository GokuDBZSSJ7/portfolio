import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import projects from "../data/projects";

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section
      id="projects"
      className="w-full bg-[#0C1424] text-white py-20 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-center mb-12">
          Projetos em Destaque
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.slice(0, visibleCount).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              className="bg-[#0F172A] border border-white/10 rounded-xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col"
            >
              <div className="w-full h-48 bg-white/5 flex items-center justify-center text-white/40 text-sm">
                { <img src={project.image} alt={project.title} className="w-full h-full object-cover" /> }
                {/* [Imagem do projeto] */}
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold font-poppins mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-white/10 text-white/60 text-xs px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 bg-[#22D3EE] text-[#0F172A] px-4 py-2 rounded-full text-sm font-medium w-fit"
                >
                  Ver Projeto <FaArrowRight className="text-xs" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {visibleCount < projects.length && (
          <div className="mt-12 text-center">
            <motion.button
              onClick={handleShowMore}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="inline-block border border-white/20 text-white/80 hover:text-[#A3E635] px-6 py-2 rounded-full text-sm transition"
            >
              Ver mais projetos
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
