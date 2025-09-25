import Link from "next/link";

import {
  RiFacebookFill,
  RiYoutubeFill,
  RiTwitterXFill,
  RiInstagramLine,
} from "react-icons/ri";

const socials = [
  {
    icon: <RiFacebookFill className="text-blue-700" target="_blank" />,
    path: "https://www.facebook.com/asylkreis.eppstein.ev",
  },
  {
    icon: <RiYoutubeFill className="text-red-700" />,
    path: "",
  },
  {
    icon: <RiTwitterXFill />,
    path: "",
  },
  {
    icon: (
      <RiInstagramLine className="rounded text-white bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]" />
    ),
    path: "https://www.instagram.com/asylkreis_eppstein_ev/",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {socials.map((item, index) => {
        return (
          <Link href={item.path} key={index} passHref legacyBehavior>
            <a
              className={`${iconStyles}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
