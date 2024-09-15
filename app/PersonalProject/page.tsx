"use client";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn, textVariant } from "../../lib/motion";
import Image from "next/image";
import { LampContainer } from "@/components/ui/lamp";

type Project = {
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  source_code_link: string;
};

const projects: Project[] = [
  {
    name: "Loan Application System",
    description:
      "A loan request application developed with Spring Boot for backend services, implementing Spring Security for authentication and authorization. The frontend was built using reusable components and responsive design. ",
    tags: [
      { name: "Spring Boot", color: "blue-text-gradient" },
      { name: "Django", color: "green-text-gradient" },
      { name: "Redux Toolkit", color: "pink-text-gradient" },
      { name: "Docker", color: "green-text-gradient" },
      { name: "Jenkins", color: "blue-text-gradient" },
      { name: "react", color: "green-text-gradient" },
    ],
    image: "/assets/Project01/dashboardLight.png",
    source_code_link: "https://github.com/sami561/Loan-Application-Repo",
  },
  {
    name: "Online Learning Platform",
    description:
      "An online learning platform with features for managing teachers, students, and classrooms. The backend was developed using Laravel, and the frontend with Angular. The platform is connected to an SQL database for data management.",
    tags: [
      { name: "Laravel", color: "blue-text-gradient" },
      { name: "Angular", color: "red-text-gradient" },
      { name: "SQL", color: "green-text-gradient" },
    ],
    image: "/assets/Project01/add.png",
    source_code_link: "//github.com/sami561/e-learning-website.git",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "supabase", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: "/assets/tripguide.png",
    source_code_link: "https://github.com/sami561",
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
  source_code_link: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <Image
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
            width={360}
            height={230}
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <Image
                src="/assets/github.png"
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
                width={360}
                height={230}
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
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
