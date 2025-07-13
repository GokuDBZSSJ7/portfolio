import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] border-t border-white/10 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Contatos */}
        <div className="flex flex-col md:flex-row md:justify-between gap-8 text-sm text-white/70">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-white font-semibold uppercase tracking-wide text-xs mb-1">
              Email
            </h4>
            <p>lucas.baggio.silva@gmail.com</p>
          </div>

          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-white font-semibold uppercase tracking-wide text-xs mb-1">
              Telefone
            </h4>
            <p>(17) 98137-9835</p>
          </div>

          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-white font-semibold uppercase tracking-wide text-xs mb-1">
              Localização
            </h4>
            <p>Santa Fé do Sul, SP</p>
          </div>
        </div>

        {/* Redes sociais */}
        <div className="mt-8 flex justify-center gap-6 text-white/50">
          <a
            href="https://github.com/lucasbaggios"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-[#A3E635] transition"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/lucasbaggios"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[#22D3EE] transition"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Lucas Baggio. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
