"use client";

import { RiArrowDropLeftFill, RiArrowRightUpLine } from "react-icons/ri";
import { Link as ScrollLink } from "react-scroll";
import Logo from "./Logo";
import NavMobile from "./NavMobile";

const links = [
  {
    name: "Home",
    path: "home",
  },
  {
    name: "Über Uns",
    path: "Über Uns",
  },
  {
    name: "Hilfsangebote",
    path: "services",
  },
  {
    name: "Freizeit",
    path: "projects",
  },
  {
    name: "Aktuelles",
    path: "aktuelles",
  },
  {
    name: "Kontakt",
    path: "Kontakt",
  },
];

const Header = () => {
  return (
    <header
      className="bg-gradient-to-r from-cyan-600 to-fuchsia-800 py-0"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Logo />
          <nav className="hidden xl:flex items-center gap-12">
            <ul className="flex">
              {links.map((links, index) => {
                return (
                  <li
                    key={index}
                    className="text-white text-sm uppercase font-primary font-medium translate-[1.2px] after:content-['||'] after:mx-4 last:after:content-none after:text-yellow-600"
                  >
                    <ScrollLink
                      to={links.path}
                      smooth
                      spy
                      className="cursor-pointer"
                      activeClass="text-yellow-300"
                    >
                      {links.name}
                    </ScrollLink>
                  </li>
                );
              })}
            </ul>
            <button className="w-[200px] h-[54px] py-[5px] pl-[10px] pr-[5px] flex items-center justify-between min-w-[200px] border rounded rounded-xl group">
              {/*bg-white */}
              <div className="flex-1 text-center tracking-[1.2px] font-primary font-bold text-white  uppercase hover:text-2xl">
                Spenden
              </div>
              <div className="w-11 h-11 flex items-center justify-center">
                <RiArrowRightUpLine className="text-white text-xl group-hover:rotate-45 transition-all duration-200" />
              </div>
            </button>
          </nav>

          <div className="xl:hidden">
            <NavMobile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
