import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

interface SocialItem {
  icon: ReactNode;
  path: string;
}

interface SocialsProps {
  containerStyles: string;
  iconStyles: string;
}

const socails: SocialItem[] = [
  { icon: <FaGithub />, path: "https://github.com/sami561" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/sami-ayachi/" },
];

const Socials: React.FC<SocialsProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socails.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
