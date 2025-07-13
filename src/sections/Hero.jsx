import React from "react";
import { motion } from "framer-motion";
import eu from '../assets/eu-2.jpg';

const Hero = () => {
  return (
    <section
      id="hero"
      className="w-full min-h-[60vh] bg-[#0F172A] text-white py-24 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Texto com animação */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6 leading-[1.2]">
            Lucas Baggio:<br />
            <span className="text-[#A3E635]">Full Stack</span> Developer<br />
            Extraordinaire
          </h1>
          <p className="text-white/80 mb-6 text-base max-w-xl">
            Eu sou um fullstack developer obstinado de criar soluções robustas e escaláveis.
            Meu propósito é transformar ideias em aplicações modernas, rápidas e acessíveis.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="bg-[#22D3EE] text-[#0F172A] px-5 py-2 rounded-full font-semibold text-sm"
            >
              GitHub
            </a>
            <a
              href="#"
              className="border border-[#22D3EE] text-[#22D3EE] px-5 py-2 rounded-full font-semibold text-sm"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Imagem com animação */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <div className="w-[280px] h-[280px] rounded-xl overflow-hidden shadow-lg">
            <img
              src={eu}
              alt="Lucas Baggio"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
