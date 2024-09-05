"use client";
import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { ModalTrigger } from "@/components/ui/animated-modal";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import React, { useState } from "react";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  const words = `Aspiring Software Engineer and Full Stack JavaScript Developer
                with 1+ years of experience.`;
  const word = ["Software Engineer ", "Full Stack JavaScript Developer"];

  return (
    <>
      <section className=" h-full">
        <div className="container mx-auto h-full relative z-10">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            <div className="text-center xl:text-left order-2 xl:order-none">
              <FlipWords words={word} />
              <h1 className="h1 my-6">
                Hello I'm <br />{" "}
                <span className="text-accent"> Sami Ayachi</span>
              </h1>
              <div className="max-w-[600px] mb-9 ">
                <TextGenerateEffect words={words} />
              </div>
              <div className="flex flex-row gap-5 justify-center align-middle">
                <a
                  href="https://drive.google.com/file/d/1Egik-vTOVytQMn2ixEm9hQgUEDLvHMbK/view?usp=sharing"
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
                        <span>Download CV</span>
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
    </>
  );
};

export default Home;
