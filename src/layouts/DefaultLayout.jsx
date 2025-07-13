import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <div className="bg-[#0F172A] text-white font-inter min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
