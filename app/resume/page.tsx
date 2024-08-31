"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaPython,
  FaAngular,
  FaJava,
  FaGitAlt,
  FaDocker,
  FaAndroid,
  FaSwift,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiDjango,
  SiPostgresql,
  SiMongodb,
  SiJenkins,
  SiAzuredevops,
  SiExpress,
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiAngular,
} from "react-icons/si";
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
    "Full Stack Developer and Software Engineer with 1+ years of experience in building responsive applications and robust backend systems. Skilled in delivering high-quality code and collaborating with cross-functional teams to create scalable, user-friendly software solutions. ",
  items: [
    {
      company: "Arsela Technologies",
      position: "Full-Time Full-Stack Developer",
      duration: "February 2024 - Present",
    },
    {
      company: "Arsela Technologies",
      position: "Summer Intern",
      duration: "June 2023 - August 2023",
    },
    {
      company: "Reactit",
      position: "End-of-Study Project Intern",
      duration: "February 2022 - June 2022",
    },
    {
      company: "pixillum",
      position: "Summer Intern",
      duration: "August 2021-September 2021",
    },
  ],
};
const education = {
  icon: "",
  title: "My Education",
  description:
    "I hold a Bachelor's degree in Computer Science and Multimedia, followed by a Master's in Web Services and Multimedia, alongside Software Engineering. This academic journey has equipped me with a strong foundation in both technical and creative problem-solving.",
  items: [
    {
      institution: "EPI DIGITAL SCHOOL",
      degree: "Engineering Degree ",
      duration: "Sept 2023 - June 2025",
    },
    {
      institution: "ISITCOM",
      degree: "Master Degree in Web services ",
      duration: "2024-present",
    },
    {
      institution: "ISITCOM",
      degree: "Bachelor’s Degree in Computer Science",
      duration: "Sept 2019 - July 2022",
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
    {
      name: "Python (Django)",
      icon: <FaPython />,
    },
    {
      name: "Angular",
      icon: <FaAngular />,
    },
    {
      name: "ReactJS",
      icon: <FaReact />,
    },

    {
      name: "NodeJS",
      icon: <FaNodeJs />,
    },
    {
      name: "ExpressJs",
      icon: <SiExpress />,
    },
    {
      name: "Java (Spring Boot)",
      icon: <FaJava />,
    },
    {
      name: "SQL (PostgreSQL)",
      icon: <SiPostgresql />,
    },
    {
      name: "NoSQL (MongoDB)",
      icon: <SiMongodb />,
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
    },
    {
      name: "DevOps (Docker, Azure, Jenkins)",
      icon: <FaDocker />, // For Docker
    },
    {
      name: "Swift",
      icon: <FaSwift />,
    },
    {
      name: "Android",
      icon: <FaAndroid />,
    },
    {
      name: "React Native",
      icon: <FaReact />,
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
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
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
          <TabsList className="flex flex-col w-full  max-w-[380px] mx-auto xl:mx-0 gap-6 ">
            <TabsTrigger value="experiences"> Experiences</TabsTrigger>
            <TabsTrigger value="education"> Education</TabsTrigger>
            <TabsTrigger value="skills"> Skills</TabsTrigger>
            <TabsTrigger value="about"> About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experiences" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold ">{experiences.title}</h3>
                <p className=" text-white/60 mx-auto  xl:mx-0  ">
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
                <p className=" text-white/60 mx-auto  xl:mx-0  ">
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
                  <p className=" text-white/60 mx-auto  xl:mx-0 ">
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
                <p className="mx-auto xl:mx-0 ">{about.description}</p>
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
