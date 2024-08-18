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
  title: "My Experiences",
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
      degree: "Full  Stack Developer",
      duration: "2024-present",
    },
    {
      institution: "isitcom",
      degree: "Full  Stack Intern",
      duration: "2024-present",
    },
    {
      institution: "isitcom",
      degree: "Full  Stack Intern",
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
      <div className="container mx-auto">
        <Tabs
          defaultValue="experiences"
          className="flex flex-col xl:flex-row  gap-[60px]"
        >
          <TabsList className="flex flex-col w-full  max-w-[380px]mx-auto xl:mx-0 gap-6 ">
            <TabsTrigger value="experiences"> Experiences</TabsTrigger>
            <TabsTrigger value="education"> Education</TabsTrigger>
            <TabsTrigger value="skills"> Skills</TabsTrigger>
            <TabsTrigger value="about"> About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experiences" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold ">{experiences.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto  xl:mx-0  ">
                  {experiences.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2  gap-[30px]">
                    {experiences.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center align-center gap-1 lg:items-start "
                      >
                        <span className="text-accent ">{item.duration}</span>
                        <h4 className="text-xl  max-w-[280px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h4>
                        <div className="flex items-center gap-3 ">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold ">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto  xl:mx-0  ">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2  gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center align-center gap-1 lg:items-start "
                      >
                        <span className="text-accent ">{item.duration}</span>
                        <h4 className="text-xl  max-w-[280px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h4>
                        <div className="flex items-center gap-3 ">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold ">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto  xl:mx-0 ">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md-grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((item, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={10}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl groupe-hover:text-accent transition-all duration-300 ">
                                {item.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>{item.name}</TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] mx-auto xl:mx-0 ">
                  {about.description}
                </p>
                <ul className="grid  grd-col-1 xl:grid-col-2 gap-y-6 max-w-[620px]  mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">
                          {item.fieldName} :
                        </span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
