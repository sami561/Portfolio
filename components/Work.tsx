"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import { useTranslations } from "next-intl";

const projectsConfig = [
    {
        num: "01",
        stack: [
            { name: "Redux" },
            { name: "ReduxSaga" },
            { name: "Next.js" },
            { name: "React.js" },
            { name: "Express" },
            { name: "MongoDB" },
            { name: "Redis" },
        ],
        image: "/assets/Project01/e-citoyen.png",
        live: "https://e-citoyen.tn/",
        github: "",
    },
    {
        num: "02",
        stack: [
            { name: "ReactJS" },
            { name: "Django" },
            { name: "Next.js" },
            { name: "ApexCharts" },
            { name: "NumPy" },
            { name: "Git" },
            { name: "GitLab" },
        ],
        image: "/assets/Project02/wide.png",
        live: "http://appflow.wide.tn:3001/",
        github: "",
    },
];

const Work = () => {
    const t = useTranslations("Work");
    // Merge static config with translations
    const projects = projectsConfig.map((item, index) => ({
        ...item,
        category: t(`projects.${index}.category`),
        title: t(`projects.${index}.title`),
        description: t(`projects.${index}.description`),
    }));

    const [project, setProject] = useState(projects[0]);
    const handelslidechange = (swiper: any) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    };
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex  flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none ">
                        <div className="flex flex-col gap-[30px]  h-[50%]">
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            <h2 className="text-[42px] font-bold leading-none text-text-color groupe-hover:text-accent transition-all duration-500 capitalize">
                                {project.category}
                            </h2>
                            <p className="text-text-color/60">{project.description}</p>
                            <ul className="flex flex-row items-start w-[50%]">
                                {project.stack.map((item, index) => {
                                    return (
                                        <li key={index} className="text-xl text-accent">
                                            {item.name}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    );
                                })}
                            </ul>
                            <div className="border border-primary/20"></div>
                            <div className=" flex items-center gap-4">
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-primary/5 flex justify-center items-center group ">
                                                <BsArrowUpRight className="text-primary text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>live project </p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                {/*   <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-primary/5 flex justify-center items-center group ">
                        <BsGithub className="text-primary text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub Repository </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12 bg-red"
                            onSlideChange={handelslidechange}
                        >
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="h-[460px] relative group justify-center items-center bg-pink-50/20">
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                            <div className="relative w-full  h-full  ">
                                                <Image
                                                    src={project.image}
                                                    fill
                                                    /*    className="object-cover" */
                                                    alt="project image"
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                            <WorkSliderBtns
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none "
                                btnStyles="bg-accent hover:bg-accent-hover text-primary  text-[22px] w-[44px] h-[44px] flex justify-center  items-center "
                                iconsStyles=""
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Work;
