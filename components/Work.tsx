"use client";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { useTranslations } from "next-intl";

const featuredConfig = {
    tags: [
        "React Native",
        "Expo",
        "TypeScript",
        "Medusa v2",
        "Mercur",
        "Node.js",
        "PostgreSQL",
        "Magento",
        "Firebase",
        "Google Maps API",
    ],
    image: "/assets/kamioun.png",
    link: "https://kamioun.com/",
};

// Professional projects (from CV), in the same order as Work.projects translations
const projectsConfig = [
    {
        tags: ["React", "Next.js", "Redux Saga", "Socket.io", "Express", "MongoDB", "Redis"],
        image: "/assets/Project01/e-citoyen.png",
        link: "https://e-citoyen.tn/",
    },
    {
        tags: ["React", "Next.js", "Tailwind CSS", "Django", "Python"],
        image: "/assets/Project02/wide.png",
        link: "http://appflow.wide.tn:3001/",
    },
    {
        tags: ["React", "Node.js", "Express", "MongoDB", "Docker", "Jenkins"],
        image: "/assets/Project01/dashboardLight.png",
        link: "",
    },
    {
        tags: ["React", "React Native", "Redux", "Material UI", "Node.js", "Express", "MongoDB"],
        image: "/assets/Project01/dashboard interface.png",
        link: "",
    },
];

const Work = () => {
    const t = useTranslations("Work");
    const tHome = useTranslations("HomePage");

    const featuredBullets = t.raw("featured.bullets") as string[];
    const projectTexts = t.raw("projects") as {
        title: string;
        company: string;
        period: string;
        description: string;
    }[];

    const projects = projectsConfig.map((item, index) => ({
        ...item,
        ...projectTexts[index],
    }));

    return (
        <div>
            <div className="section-label">{t("sectionLabel")}</div>
            <h2 className="h2 mb-12">{tHome("workProjects")}</h2>

            {/* Featured: Kamioun */}
            <div className="card-surface rounded-[18px] overflow-hidden grid grid-cols-1 xl:grid-cols-[1.1fr_1fr] mb-10">
                <div className="p-[26px] xl:p-10 flex flex-col gap-5 order-2 xl:order-none">
                    <div className="font-mono text-accent text-xs tracking-[0.08em] uppercase">
                        {t("featured.label")}
                    </div>
                    <div>
                        <h3 className="text-[24px] xl:text-[28px] font-bold leading-[1.25] mb-2">
                            {t("featured.title")}
                        </h3>
                        <div className="font-mono text-[13px] text-muted">
                            {t("featured.role")} · {t("featured.duration")}
                        </div>
                    </div>
                    <p className="text-[15.5px] leading-[1.65] text-muted">
                        {t("featured.summary")}
                    </p>
                    <ul className="flex flex-col gap-2.5 text-[14.5px] leading-[1.6] text-muted">
                        {featuredBullets.map((bullet, i) => (
                            <li key={i} className="flex gap-3">
                                <span className="mt-[9px] w-1.5 h-1.5 shrink-0 rounded-full bg-accent" />
                                <span>{bullet}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-1">
                        {featuredConfig.tags.map((tag) => (
                            <span key={tag} className="font-mono text-xs text-accent">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
                <a
                    href={featuredConfig.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative min-h-[260px] xl:min-h-full striped-placeholder order-1 xl:order-none"
                >
                    <Image
                        src={featuredConfig.image}
                        alt={t("featured.title")}
                        fill
                        className="object-cover"
                    />
                </a>
            </div>

            {/* Other professional projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="card-surface rounded-[18px] overflow-hidden flex flex-col"
                    >
                        <div className="h-[180px] relative striped-placeholder">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                            />
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Source code"
                                    className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-background flex items-center justify-center text-foreground hover:text-accent transition-colors"
                                >
                                    <FaGithub size={16} />
                                </a>
                            )}
                        </div>
                        <div className="p-[26px] flex flex-col gap-3.5 flex-1">
                            <div className="text-[19px] font-semibold leading-[1.3]">
                                {project.title}
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

export default Work;
