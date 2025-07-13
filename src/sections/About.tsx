import React from "react";
import { motion } from "framer-motion";
import eu from '../assets/eu.jpg';

const About = () => {
  return (
    <section id="about" className="bg-[#0C1424] text-white py-20 px-6 md:px-12">
      <motion.div
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Imagem */}
        <div className="flex-1 flex justify-center">
          <div className="w-[240px] h-[240px] md:w-[300px] md:h-[300px] bg-white/10 rounded-xl overflow-hidden">
            <img
              src={eu}
              alt="Lucas Baggio"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Conteúdo */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-poppins font-semibold mb-6">
            Sobre mim
          </h2>
          <div className="space-y-4 text-white/70 text-sm leading-relaxed">
            <p>
              Sou um desenvolvedor Full Stack com foco em criar sistemas inteligentes,
              eficientes e com excelente experiência de uso, tanto para web quanto desktop.
            </p>
            <p>
              Trabalho com tecnologias como{" "}
              <span className="text-[#A3E635] font-medium">Angular</span>,{" "}
              <span className="text-[#22D3EE] font-medium">.NET</span>,{" "}
              <span className="text-[#A3E635] font-medium">React Native</span> e{" "}
              <span className="text-[#22D3EE] font-medium">MySQL</span>, sempre buscando
              manter boas práticas, código limpo e soluções duradouras.
            </p>
            <p>
              Já atuei em diversos projetos freelance, desenvolvendo desde sistemas de
              gestão até sites institucionais. Meu objetivo é transformar ideias em
              produtos digitais que realmente fazem a diferença.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
