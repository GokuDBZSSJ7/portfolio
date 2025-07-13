import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import testimonials from "../data/testimonials";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="w-full bg-[#0F172A] text-white py-20 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-center mb-12">
          Depoimentos
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
              className="bg-[#0C1424] border border-white/10 rounded-xl p-6 shadow-md hover:shadow-lg transition"
            >
              {/* Estrelas */}
              <div className="flex items-center gap-1 text-[#FACC15] mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={14} />
                ))}
              </div>

              {/* Aspas + texto */}
              <div className="text-white/80 text-sm leading-relaxed mb-4 relative">
                <FaQuoteLeft className="absolute -top-2 -left-3 text-[#22D3EE] opacity-30 text-lg" />
                <p className="italic pl-6">“{item.content}”</p>
              </div>

              {/* Nome */}
              <p className="text-[#A3E635] font-semibold text-sm">— {item.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
