import React from "react";

const Header = () => {
  return (
    <header className="w-full py-4 px-6 md:px-12 flex items-center justify-between bg-[#0F172A] border-b border-white/10">
      {/* Container de 3 colunas */}
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="font-poppins font-bold text-white text-lg">
          Lucas Baggio
        </div>

        {/* Navegação */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-white/80">
          <a href="#about" className="hover:text-[#A3E635]">Sobre</a>
          <a href="#skills" className="hover:text-[#A3E635]">Skills</a>
          <a href="#projects" className="hover:text-[#A3E635]">Projetos</a>
          <a href="#testimonials" className="hover:text-[#A3E635]">Depoimentos</a>
          <a href="#contact" className="hover:text-[#A3E635]">Contato</a>
        </nav>

        {/* Botão */}
        <a
          href="#"
          className="ml-4 bg-[#A3E635] text-[#0F172A] px-4 py-2 rounded-full font-semibold text-sm"
        >
          Baixar CV
        </a>
      </div>
    </header>
  );
};

export default Header;
