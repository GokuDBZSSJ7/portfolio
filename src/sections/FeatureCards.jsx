import React from "react";
import { FaDesktop, FaGlobe, FaMobileAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    title: "Sistemas Web e Portais",
    description:
      "Criação de sistemas modernos para internet, com foco em escalabilidade, segurança e performance. Ideal para empresas que querem crescer com tecnologia.",
    icon: <FaGlobe size={24} />,
    button: "Solicitar orçamento",
    destaque: true,
  },
  {
    title: "Sistemas para Computador",
    description:
      "Aplicações desktop robustas, ideais para uso interno, gestão de empresas e automação de processos. Desenvolvido com Electron ou .NET.",
    icon: <FaDesktop size={24} />,
    button: "Ver soluções",
    destaque: true,
  },
  {
    title: "Aplicativos Mobile",
    description:
      "Apps Android/iOS feitos com React Native. Projeto sob demanda, integrando seu sistema com experiência mobile otimizada.",
    icon: <FaMobileAlt size={20} />,
    button: "Fale comigo",
    destaque: false,
  },
];

const FeatureCards = () => {
  return (
    <section className="bg-[#0F172A] text-white py-20 px-6 md:px-12">
      <motion.div
        className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {features.map((item, index) => (
          <motion.div
            key={index}
            className={`rounded-2xl p-6 flex flex-col justify-between shadow-md hover:shadow-lg transition border ${item.destaque
                ? "bg-[#0C1424] border-white/10"
                : "bg-white/5 border-white/5 opacity-80"
              }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
          >
            <div className="mb-4 text-[#A3E635]">{item.icon}</div>
            <h3 className="text-xl font-semibold font-poppins mb-3">
              {item.title}
            </h3>
            <p className="text-white/70 text-sm mb-6">{item.description}</p>
            <a
              href="#contact"
              className={`mt-auto inline-block rounded-full text-sm font-medium px-4 py-2 w-fit ${item.destaque
                  ? "bg-[#A3E635] text-[#0F172A]"
                  : "border border-[#A3E635] text-[#A3E635]"
                }`}
            >
              {item.button}
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FeatureCards;
