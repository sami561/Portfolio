"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

type TabId = "experiences" | "education" | "skills" | "about";

const skillNames = [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "React Native",
    "Expo",
    "Medusa v2",
    "Mercur",
    "Magento",
    "Node.js",
    "Express",
    "NestJS",
    "Spring Boot",
    "Python",
    "GraphQL",
    "Redux Saga",
    "TailwindCSS",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Redis",
    "Docker",
    "Kubernetes",
    "AWS",
    "Git",
    "Jenkins",
    "Azure",
];

// Credly badge URLs — fill in from https://www.credly.com/users/<your-handle>/badges
const certifications = [
    { id: "az-900", credlyUrl: "" },
    { id: "ai-900", credlyUrl: "" },
];

const Resume = () => {
    const t = useTranslations("Resume");
    const [activeTab, setActiveTab] = useState<TabId>("experiences");

    const tabs: { id: TabId; label: string }[] = [
        { id: "experiences", label: t("tabs.experiences") },
        { id: "education", label: t("tabs.education") },
        { id: "skills", label: t("tabs.skills") },
        { id: "about", label: t("tabs.about") },
    ];

    const experiences = t.raw("experiences.items") as {
        company: string;
        position: string;
        duration: string;
    }[];

    const education = t.raw("education.items") as {
        institution: string;
        degree: string;
        duration: string;
    }[];

    const certificationNames = t.raw("certifications.items") as string[];

    const titles: Record<TabId, string> = {
        experiences: t("experiences.title"),
        education: t("education.title"),
        skills: t("skills.title"),
        about: t("about.title"),
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 lg:gap-12 items-start">
            {/* Sidebar tabs */}
            <div className="flex flex-col gap-3 lg:sticky lg:top-[100px]">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`text-left font-mono text-[15px] rounded-xl px-5 py-[18px] transition-colors ${activeTab === tab.id
                                ? "font-semibold bg-accent text-accent-foreground"
                                : "font-medium card-surface text-foreground hover:border-accent"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div>
                <div className="section-label">{t("sectionLabel")}</div>
                <h2 className="h2 mb-5">{titles[activeTab]}</h2>

                {activeTab === "experiences" && (
                    <>
                        <p className="text-[17px] leading-[1.7] text-muted max-w-[720px] mb-10">
                            {t("experiences.description")}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {experiences.map((item, index) => (
                                <div key={index} className="card-surface rounded-2xl p-7">
                                    <div className="font-mono text-accent text-[13px] mb-3">
                                        {item.duration}
                                    </div>
                                    <div className="text-xl font-semibold mb-3">
                                        {item.position}
                                    </div>
                                    <div className="flex items-center gap-2 text-muted text-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                        {item.company}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {activeTab === "education" && (
                    <div className="flex flex-col gap-5 max-w-[720px]">
                        {education.map((item, index) => (
                            <div key={index} className="card-surface rounded-2xl p-7">
                                <div className="font-mono text-accent text-[13px] mb-3">
                                    {item.duration}
                                </div>
                                <div className="text-xl font-semibold mb-2">{item.degree}</div>
                                <div className="text-muted text-[15px]">
                                    {item.institution}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === "skills" && (
                    <>
                        <div className="flex flex-wrap gap-3 max-w-[720px]">
                            {skillNames.map((skill) => (
                                <div
                                    key={skill}
                                    className="font-mono text-sm bg-accent-soft text-accent-soft-text border border-accent-soft-border rounded-lg px-4 py-2.5"
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                        <h3 className="text-xl font-semibold mt-12 mb-5">
                            {t("certifications.title")}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[720px]">
                            {certifications.map((cert, index) => {
                                const content = (
                                    <>
                                        <div className="font-mono text-accent text-[13px] mb-2">
                                            Microsoft · Credly
                                        </div>
                                        <div className="text-[15px] font-semibold">
                                            {certificationNames[index]}
                                        </div>
                                    </>
                                );
                                return cert.credlyUrl ? (
                                    <a
                                        key={cert.id}
                                        href={cert.credlyUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="card-surface rounded-2xl p-6 hover:border-accent transition-colors block"
                                    >
                                        {content}
                                    </a>
                                ) : (
                                    <div key={cert.id} className="card-surface rounded-2xl p-6">
                                        {content}
                                    </div>
                                );
                            })}
                        </div>
                    </>
                )}

                {activeTab === "about" && (
                    <p className="text-[17px] leading-[1.7] text-muted max-w-[680px]">
                        {t("about.description")}
                    </p>
                )}
            </div>
        </div>
    );
};

export default Resume;
