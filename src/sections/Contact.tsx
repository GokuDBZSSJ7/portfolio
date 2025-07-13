import React from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

const Contact = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // 👇 Adiciona manualmente o form-name
    formData.append("form-name", "contato");

    try {
      const encodedData = new URLSearchParams({
        "form-name": "contato",
        nome: formData.get("nome") as string,
        email: formData.get("email") as string,
        mensagem: formData.get("mensagem") as string,
      });

      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodedData.toString(),
      });

      Swal.fire({
        icon: "success",
        title: "Mensagem enviada!",
        text: "Obrigado pelo contato. Retornarei em breve.",
        confirmButtonColor: "#A3E635",
      });

      form.reset();
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Erro ao enviar",
        text: "Tente novamente mais tarde.",
        confirmButtonColor: "#A3E635",
      });
    }
  };

  return (
    <section
      id="contact"
      className="w-full bg-[#0C1424] text-white py-20 px-6 md:px-12"
    >
      <motion.div
        className="max-w-7xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-4xl font-poppins font-semibold leading-tight">
          Entre em Contato
        </h2>
        <p className="text-white/60 text-sm mt-3 max-w-md mx-auto">
          Tem uma ideia de projeto, dúvida ou proposta? Envie uma mensagem e vamos conversar.
        </p>
      </motion.div>

      <motion.form
        name="contato"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto grid gap-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      >
        <input type="hidden" name="form-name" value="contato" />

        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            required
            className="bg-[#0F172A] border border-white/10 rounded-lg px-4 py-3 text-sm placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#A3E635]"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="bg-[#0F172A] border border-white/10 rounded-lg px-4 py-3 text-sm placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#A3E635]"
          />
        </div>

        <textarea
          name="mensagem"
          rows={5}
          placeholder="Sua mensagem"
          required
          className="resize-none bg-[#0F172A] border border-white/10 rounded-lg px-4 py-3 text-sm placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#A3E635]"
        ></textarea>

        <button
          type="submit"
          className="bg-[#A3E635] text-[#0F172A] px-6 py-3 rounded-full font-semibold text-sm w-full md:w-fit mx-auto"
        >
          Enviar Mensagem
        </button>
      </motion.form>
    </section>
  );
};

export default Contact;
