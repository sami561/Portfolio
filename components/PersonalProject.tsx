"use client";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { useTranslations } from "next-intl";

// Personal projects (from CV), in the same order as PersonalProject.projects translations
const projectsConfig = [
    {
        tags: ["React", "Vite", "Three.js", "JavaScript"],
        image: "/assets/Project01/clinet.png",
        link: "https://github.com/sami561",
    },
    {
        tags: ["Angular", "TypeScript", "Bootstrap", "Angular Material", "Laravel"],
        image: "/assets/Project01/add.png",
        link: "https://github.com/sami561/e-learning-website.git",
    },
    {
        tags: ["React", "Google Maps API", "Weather API"],
        image: "/assets/manorga.png",
        link: "https://github.com/sami561/calculator-manorga.git",
    },
];

const PersonalProject: React.FC = () => {
    const t = useTranslations("PersonalProject");
    const tHome = useTranslations("HomePage");

    const projectTexts = t.raw("projects") as { name: string; description: string }[];
    const projects = projectsConfig.map((item, index) => ({
        ...item,
        ...projectTexts[index],
    }));

    return (
        <div>
            <div className="section-label">{t("sectionLabel")}</div>
            <h2 className="h2 mb-12">{tHome("personalProjects")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="card-surface rounded-[18px] overflow-hidden flex flex-col"
                    >
                        <div className="h-[180px] relative striped-placeholder">
                            <Image
                                src={project.image}
                                alt={project.name}
                                fill
                                className="object-cover object-top"
                            />
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Source code on GitHub"
                                className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-background flex items-center justify-center text-foreground hover:text-accent transition-colors"
                            >
                                <FaGithub size={16} />
                            </a>
                        </div>
                        <div className="p-[26px] flex flex-col gap-3.5 flex-1">
                            <div className="text-[19px] font-semibold leading-[1.3]">
                                {project.name}
                            </div>
                            <div className="text-[14.5px] leading-[1.6] text-muted flex-1">
                                {project.description}
                            </div>
                            <div className="flex flex-wrap gap-2 mt-1">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="font-mono text-xs text-accent">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PersonalProject;
