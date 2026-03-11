"use client";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn, textVariant } from "@/lib/motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

type Project = {
    name: string;
    description: string;
    tags: {
        name: string;
        color: string;
    }[];
    image: string;
    source_code_link?: string;
    figma_link?: string;
};

const projectsConfig = [
    {
        tags: [
            { name: "Spring Boot", color: "blue-text-gradient" },
            { name: "Django", color: "green-text-gradient" },
            { name: "Redux Toolkit", color: "pink-text-gradient" },
            { name: "Docker", color: "green-text-gradient" },
            { name: "Jenkins", color: "blue-text-gradient" },
            { name: "react", color: "green-text-gradient" },
        ],
        image: "/assets/Project01/dashboardLight.png",
        source_code_link: "https://github.com/sami561/Loan-Application-Repo.git",
    },
    {
        tags: [
            { name: "Laravel", color: "blue-text-gradient" },
            { name: "Angular", color: "red-text-gradient" },
            { name: "SQL", color: "green-text-gradient" },
        ],
        image: "/assets/Project01/add.png",
        source_code_link: "https://github.com/sami561/e-learning-website.git",
    },
    {
        tags: [
            { name: "react", color: "blue-text-gradient" },
            { name: "maps-api", color: "green-text-gradient" },
            { name: "weather-api", color: "pink-text-gradient" },
        ],
        image: "/assets/manorga.png",
        figma_link: "https://github.com/sami561/calculator-manorga.git",
    },
];

type ProjectCardProps = {
    index: number;
    name: string;
    description: string;
    tags: {
        name: string;
        color: string;
    }[];
    image: string;
    source_code_link?: string;
    figma_link?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
    figma_link,
}) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-secondary p-5 rounded-2xl sm:w-[360px] w-full"
            >
                <div className="relative w-full h-[230px]">
                    <Image
                        src={image}
                        alt="project_image"
                        className="w-full h-full object-cover rounded-2xl"
                        width={360}
                        height={230}
                    />

                    <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2">
                        {source_code_link && (
                            <div
                                onClick={() => window.open(source_code_link, "_blank")}
                                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                            >
                                <Image
                                    src="/assets/github.png"
                                    alt="source code"
                                    className="w-1/2 h-1/2 object-contain"
                                    width={36}
                                    height={36}
                                />
                            </div>
                        )}
                        {figma_link && (
                            <div
                                onClick={() => window.open(figma_link, "_blank")}
                                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer text-white"
                            >
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 384 512"
                                    className="w-1/2 h-1/2 object-contain"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M192 149.333c-35.253 0-64-28.747-64-64s28.747-64 64-64H256c35.253 0 64 28.747 64 64s-28.747 64-64 64H192zm-64 213.334c-35.253 0-64-28.747-64-64s28.747-64 64-64 64 28.747 64 64-28.747 64-64 64zm64-106.667c-35.253 0-64-28.747-64-64s28.747-64 64-64h64c35.253 0 64 28.747 64 64s-28.747 64-64 64h-64v-64zm0 256c-35.253 0-64-28.747-64-64s28.747-64 64-64h21.333v64c0 35.253-28.747 64-64 64H192z"></path>
                                </svg>
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-5">
                    <h3 className="text-primary font-bold text-[24px]">{name}</h3>
                    <p className="mt-2 text-primary/60 text-[14px]">{description}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <p
                            key={`${name}-${tag.name}`}
                            className={`text-[14px] ${tag.color}`}
                        >
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    );
};

const PersonalProject: React.FC = () => {
    const t = useTranslations("PersonalProject");
    const projects: Project[] = projectsConfig.map((item, index) => ({
        ...item,
        name: t(`projects.${index}.name`),
        description: t(`projects.${index}.description`),
    }));

    return (
        <>
            <motion.div variants={textVariant()}>
                <div className="flex justify-center align-middle">
                    <div className="mt-20 flex flex-wrap gap-7">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={`project-${index}`}
                                {...project}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default PersonalProject;
