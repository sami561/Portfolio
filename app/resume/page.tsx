"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
const about = {
  title: "About me",
  description:
    "I am a software developer with a passion for crafting elegant digital experiences. I am proficient in various programming languages and technologies.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Sami Ayachi",
    },
    {
      fieldName: "Email",
      fieldValue: "semiayachi.contact@gmail.com",
    },
    {
      fieldName: "Experience",
      fieldValue: "1 Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Tunisian",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "languages",
      fieldValue: "English, French, Arabic",
    },
  ],
};
const experiences = {
  icon: "",
  title: "My experiences",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nisi vero quod molestiae culpa sunt, nihil corporis deleniti ex quibusdam. ",
  items: [
    {
      company: "arsela",
      position: "Full  Stack Developer",
      duration: "2024-present",
    },
    {
      company: "arsela",
      position: "Full  Stack Intern",
      duration: "2024-present",
    },
    {
      company: "ReactIt",
      position: "Front-End  Developer Intern",
      duration: "Summer 2023",
    },
    {
      company: "pixillum",
      position: "Front-End  Developer Intern",
      duration: "2022-2023",
    },
  ],
};
const education = {
  icon: "",
  title: "My Education",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nisi vero quod molestiae culpa sunt, nihil corporis deleniti ex quibusdam. ",
  items: [
    {
      institution: "epi ",
      position: "Full  Stack Developer",
      duration: "2024-present",
    },
    {
      institution: "isitcom",
      position: "Full  Stack Intern",
      duration: "2024-present",
    },
    {
      institution: "isitcom",
      position: "Full  Stack Intern",
      duration: "2024-present",
    },
  ],
};
const skills = {
  title: "My Skills",
  description:
    "I have a wide range of skills that I am constantly improving through practice and learning.",
  skillList: [
    {
      name: "HTML",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS",
      icon: <FaCss3 />,
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
    },
    {
      name: "React",
      icon: <FaReact />,
    },
    {
      name: "NodeJs",
      icon: <FaNodeJs />,
    },
    {
      name: "TailwindCss",
      icon: <SiTailwindcss />,
    },
    {
      name: "NextJs",
      icon: <SiNextdotjs />,
    },
    {
      name: "Figma",
      icon: <FaFigma />,
    },
  ],
};
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      Resume page
    </motion.div>
  );
};

export default Resume;
