import Image from "next/image";
import Link from "next/link";

import {
  RiMapPin2Fill,
  RiPhoneFill,
  RiMailFill,
  RiArrowRightLine,
} from "react-icons/ri";

import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="mt-16 xl:mt-32 bg-primary">
      <div className="container mx-auto">
        <div className="py-16 xl:py-[100px] flex flex-col xl:flex-row gap-20 xl:gap-36">
          <div className="flex-1">
            <Link href="/" className="flex mb-6">
              <Image
                src="/assets/Asylkreis-Logo-eV-23.jpg"
                width={230}
                height={48}
                alt=""
              />
            </Link>
            <p className="text-border max-w-[300px] ">
              „Brücken bauen. Zukunft gestalten.“
            </p>
          </div>
          <div className="flex-1 text-border">
            <h3 className="h3 text-white mb-10">Contact</h3>
            <ul>
              <li className="flex items-center gap-4 mb-4">
                <RiMapPin2Fill className="text-teal-500 text-xl" />
                <p>Asylkreis Eppstein e.V., Waldstraße 6, 65817 Eppstein.</p>
              </li>
              <li className="flex items-center gap-4">
                <RiMailFill className="text-teal-500 text-xl" />
                <p>info@asylkreis-eppstein.de</p>
              </li>
            </ul>
          </div>
          {/* <div className="flex-1 text-border">
            <h4 className="h4 text-white mb-10">Newsletter</h4>
            <ul>
              <li className="flex items-center gap-4">
                <RiMapPin2Fill className="text-teal-500 text-xl" />
                <p>Asylkreis Eppstein e.V., Am Borbig 5, 65817 Eppstein.</p>
              </li>
              <li className="flex items-center gap-4">
                <RiMailFill className="text-teal-500 text-xl" />
                <p>info@asylkreis-eppstein.de</p>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
      <div
        className="container mx-auto xl:px-0 py-12 border-t border-border/10 flex flex-col gap-6 xl:flex-row
       items-center justify-between"
      >
        <p className="text-border">&copy; Asylkreis Eppstein e.V. </p>
        <Socials
          containerStyles="flex gap-6 text-white"
          iconStyles="hover:text-3xl transition-all"
        />
      </div>
    </footer>
  );
};

export default Footer;
