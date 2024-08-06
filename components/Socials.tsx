import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { animate, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
const socails = [
  { icon: <FaGithub />, path: "https://github.com/sami561" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/sami-ayachi/" },
];
const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socails.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
