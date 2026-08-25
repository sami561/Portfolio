"use client";
import HeroThree from "@/components/HeroThree";
import Resume from "@/components/Resume";
import Work from "@/components/Work";
import PersonalProject from "@/components/PersonalProject";
import Contact from "@/components/Contact";
import React from "react";
import { useTranslations } from "next-intl";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Home = () => {
    const t = useTranslations("HomePage");

    return (
        <>
            {/* Hero */}
            <section
                id="home"
                className="grid grid-cols-1 xl:grid-cols-2 items-center gap-10 px-6 xl:px-14 pt-16 xl:pt-[100px] pb-20 xl:pb-[120px] min-h-[640px]"
            >
                <div className="order-2 xl:order-none text-center xl:text-left">
                    <div className="font-mono text-accent text-[15px] tracking-[0.04em] mb-5 flex items-center justify-center xl:justify-start gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulseDot" />
                        {t("tagline")}
                    </div>
                    <h1 className="h1 mb-6">
                        {t("title")}
                        <br />
                        <span className="text-accent">Sami Ayachi</span>
                    </h1>
                    <p className="text-[19px] leading-relaxed text-muted max-w-[480px] mx-auto xl:mx-0 mb-9">
                        {t("role")}
                    </p>
                    <div className="flex items-center justify-center xl:justify-start gap-4">
                        <a
                            href="/sami_ayachi_cv.pdf"
                            download="Sami_Ayachi_CV.pdf"
                            className="font-mono font-semibold text-sm bg-accent text-accent-foreground px-7 py-4 rounded-[10px] inline-flex items-center gap-2.5 hover:bg-accent-hover transition-colors"
                        >
                            {t("downloadCv")} <span aria-hidden>↓</span>
                        </a>
                        <a
                            href="https://github.com/sami561"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="w-12 h-12 border border-input-border rounded-[10px] flex items-center justify-center text-foreground hover:border-accent hover:text-accent transition-colors"
                        >
                            <FaGithub size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/sami-ayachi/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="w-12 h-12 border border-input-border rounded-[10px] flex items-center justify-center text-foreground hover:border-accent hover:text-accent transition-colors"
                        >
                            <FaLinkedinIn size={20} />
                        </a>
                    </div>
                </div>
                <div className="order-1 xl:order-none flex justify-center items-center">
                    <HeroThree />
                </div>
            </section>

            {/* Resume */}
            <section id="resume" className="px-6 xl:px-14 pt-10 pb-20 xl:pb-[120px]">
                <Resume />
            </section>

            {/* Personal project */}
            <section
                id="personal-project"
                className="px-6 xl:px-14 pt-10 pb-20 xl:pb-[120px]"
            >
                <PersonalProject />
            </section>

            {/* Work projects */}
            <section id="work" className="px-6 xl:px-14 pt-10 pb-20 xl:pb-[120px]">
                <Work />
            </section>

            {/* Contact */}
            <section id="contact" className="px-6 xl:px-14 pt-10 pb-24 xl:pb-[140px]">
                <Contact />
            </section>
        </>
    );
};

export default Home;
