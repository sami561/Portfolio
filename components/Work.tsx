"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight } from "react-icons/bs";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import { useTranslations } from "next-intl";

// Professional projects (from CV). Slides 1..4 follow the order of Work.projects translations;
// slide 0 is the featured Kamioun marketplace (Work.featured translations).
const projectsConfig = [
    {
        stack: ["React Native", "Expo", "TypeScript", "Medusa v2", "Mercur", "Node.js", "Magento", "Firebase"],
        image: "/assets/kamioun.png",
        live: "https://kamioun.com/",
    },
    {
        stack: ["React", "Next.js", "Redux Saga", "Socket.io", "Express", "MongoDB", "Redis"],
        image: "/assets/Project01/e-citoyen.png",
        live: "https://e-citoyen.tn/",
    },
    {
        stack: ["React", "Next.js", "Tailwind CSS", "Django", "Python"],
        image: "/assets/Project02/wide.png",
        live: "http://appflow.wide.tn:3001/",
    },
    {
        stack: ["React", "Node.js", "Express", "MongoDB", "Docker", "Jenkins"],
        image: "/assets/Project01/dashboardLight.png",
        live: "",
    },
    {
        stack: ["React", "React Native", "Redux", "Material UI", "Node.js", "Express", "MongoDB"],
        image: "/assets/Project01/dashboard interface.png",
        live: "",
    },
];

const Work = () => {
    const t = useTranslations("Work");
    const tHome = useTranslations("HomePage");

    const projectTexts = t.raw("projects") as {
        title: string;
        company: string;
        period: string;
        description: string;
    }[];

    const projects = projectsConfig.map((item, index) => {
        const text =
            index === 0
                ? {
                      title: t("featured.title"),
                      company: t("featured.role"),
                      period: t("featured.duration"),
                      description: t("featured.summary"),
                  }
                : projectTexts[index - 1];
        return { ...item, ...text, num: String(index + 1).padStart(2, "0") };
    });

    const [project, setProject] = useState(projects[0]);
    const handleSlideChange = (swiper: { activeIndex: number }) => {
        setProject(projects[swiper.activeIndex]);
    };

    return (
        <div>
            <div className="section-label">{t("sectionLabel")}</div>
            <h2 className="h2 mb-12">{tHome("workProjects")}</h2>

            <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                {/* Text side */}
                <div className="w-full xl:w-1/2 xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                    <div className="flex flex-col gap-6">
                        <div className="font-mono text-accent text-[72px] xl:text-[96px] leading-none font-bold">
                            {project.num}
                        </div>
                        <h3 className="text-[28px] xl:text-[36px] font-bold leading-[1.15]">
                            {project.title}
                        </h3>
                        <div className="flex items-center gap-2 font-mono text-[13px] text-muted">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                            {project.company} · {project.period}
                        </div>
                        <p className="text-base leading-[1.7] text-muted">
                            {project.description}
                        </p>
                        <ul className="flex flex-wrap gap-x-2 font-mono text-sm text-accent">
                            {project.stack.map((item, index) => (
                                <li key={item}>
                                    {item}
                                    {index !== project.stack.length - 1 && ","}
                                </li>
                            ))}
                        </ul>
                        <div className="border-t border-border" />
                        {project.live && (
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Live project"
                                className="w-[60px] h-[60px] rounded-full card-surface flex items-center justify-center text-foreground hover:text-accent hover:border-accent transition-colors"
                            >
                                <BsArrowUpRight className="text-2xl" />
                            </a>
                        )}
                    </div>
                </div>

                {/* Slider side */}
                <div className="w-full xl:w-1/2 order-1 xl:order-none mb-8 xl:mb-0">
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        className="xl:h-[520px] mb-12"
                        onSlideChange={handleSlideChange}
                    >
                        {projects.map((item, index) => (
                            <SwiperSlide key={index} className="w-full">
                                <div className="h-[300px] sm:h-[460px] relative rounded-[18px] overflow-hidden card-surface striped-placeholder">
                                    <Image
                                        src={item.image}
                                        fill
                                        alt={item.title}
                                        className="object-cover object-top"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                        <WorkSliderBtns
                            containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                            btnStyles="bg-accent hover:bg-accent-hover text-accent-foreground text-[22px] w-[44px] h-[44px] flex justify-center items-center rounded-[10px] transition-colors"
                            iconsStyles=""
                        />
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Work;
