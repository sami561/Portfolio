"use client";
import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import Resume from "@/components/Resume";
import Work from "@/components/Work";
import PersonalProject from "@/components/PersonalProject";
import Contact from "@/components/Contact";
import { ModalTrigger } from "@/components/ui/animated-modal";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import React, { useState } from "react";
import { FiDownload } from "react-icons/fi";
// import { useTranslations } from "next-intl"; // Will be added in refactor step

import { useTranslations } from "next-intl";

const Home = () => {
    const [isHovered, setIsHovered] = useState(false);
    const t = useTranslations("HomePage");

    const words = t("role");
    // next-intl returns array if raw keys are used or if configured, but normally t('key.0') etc.
    // To get an array, better to use t.raw('roles')?
    // next-intl 3.x: t('roles') might return string if not array.
    // Actually, standard t() returns string. To get plain object/array, use useMessages() or t.raw().
    // Let's use t.raw('roles') but we need to cast it or assume it is array.
    // Or simply t('roles.0'), t('roles.1') if count is known.
    // But t.raw('roles') is cleaner.
    const word = t.raw("roles") as string[];

    return (
        <>
            <section id="home" className="h-full mb-12 xl:mb-24">
                <div className="container mx-auto h-full relative z-10">
                    <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                        <div className="text-center xl:text-left order-2 xl:order-none">
                            <FlipWords words={word} />
                            <h1 className="h1 my-6">
                                {t("title")} <br />{" "}
                                <span className="text-accent"> Sami Ayachi</span>
                            </h1>
                            <div className="max-w-[600px] mb-9 ">
                                <TextGenerateEffect words={words} />
                            </div>
                            <div className="flex flex-row gap-5 justify-center align-middle">
                                <a
                                    href="https://drive.google.com/file/d/1yeoKhjNrDLkJJ5Uv3izOyh7oq83-h8Vy/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="uppercase flex items-center gap-2 w-[16rem] h-12"
                                        onMouseEnter={() => setIsHovered(true)}
                                        onMouseLeave={() => setIsHovered(false)}
                                    >
                                        {isHovered ? (
                                            <FiDownload className="text-xl" />
                                        ) : (
                                            <span className="uppercase flex items-center gap-2">
                                                <span>{t("downloadCv")}</span>
                                                <FiDownload className="text-xl" />
                                            </span>
                                        )}
                                    </Button>
                                </a>

                                <div className="flex align-middle xl:mb-0 mt-2 pb-5">
                                    <Socials
                                        containerStyles="flex gap-6"
                                        iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="order-1 xl:order-none mb-8 xl:mb-0">
                            <Photo />
                        </div>
                    </div>
                </div>
                {/* <Stats /> */}
            </section>

            <section id="resume" className="mb-12 xl:mb-24">
                <Resume />
            </section>

            <section id="work" className="mb-12 xl:mb-24">
                <div className="container mx-auto mb-8">
                    <h2 className="h2 text-center xl:text-left text-primary">{t("workProjects")}</h2>
                </div>
                <Work />
            </section>

            <section id="personal-project" className="mb-12 xl:mb-24">
                <div className="container mx-auto mb-8">
                    <h2 className="h2 text-center xl:text-left text-primary">{t("personalProjects")}</h2>
                </div>
                <PersonalProject />
            </section>

            <section id="contact" className="mb-12 xl:mb-24">
                <Contact />
            </section>
        </>
    );
};

export default Home;
