"use client";
import { useEffect, useState } from "react";

import Comingsoon from "@/components/Comingsoon";

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
      <Comingsoon />
    </div>
  );
};

export default Home;
