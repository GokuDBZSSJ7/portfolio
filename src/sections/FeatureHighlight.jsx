import React from "react";
import { motion } from "framer-motion";

const FeatureHighlight = () => {
  return (
    <section className="bg-[#0C1424] text-white py-20 px-6 md:px-12">
      <motion.div
        className="max-w-7xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-2xl md:text-3xl font-poppins font-semibold leading-tight mb-4">
          Soluções digitais sob medida<br />para impulsionar seu negócio
        </h2>
        <p className="text-white/70 max-w-3xl mx-auto text-sm md:text-base">
          Desenvolvo sistemas e aplicações que resolvem problemas reais com tecnologia moderna, performance e experiência de uso. Seja para web, desktop ou mobile, o foco é criar produtos escaláveis, eficientes e alinhados com os objetivos da sua empresa.
        </p>
      </motion.div>
    </section>
  );
};

export default FeatureHighlight;
