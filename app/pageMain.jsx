"use client";
import { useEffect, useState } from "react";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Archive from "@/components/Archive";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Aktuelles from "@/components/Aktuelles";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Topbar from "@/components/Topbar";
import Work from "@/components/Work";
import Honory from "@/components/Honory";

const Home = () => {
  const [headerActive, setHeaderActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderActive(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(headerActive);

  return (
    <div className="bg-gray-50">
      {/* <Topbar /> */}
      <div className="relative z-10">
        <Header />
      </div>
      <div
        className={`w-full transition-transform duration-500 fixed top-0 left-0 z-50 ${
          headerActive ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Header />
      </div>
      <Hero />
      <About />
      <Stats />
      <Services />
      <Work />
      <Aktuelles />
      <Archive />
      <Honory />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
