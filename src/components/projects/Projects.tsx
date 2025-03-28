import React, { useState } from "react";
import { SectionHeader } from "../util/SectionHeader";
import { Project } from "./Project";
import { motion } from "framer-motion";
import { OutlineButton } from "../buttons/OutlineButton";
import MiniProjectCard from "./MiniProjectCard";

export const Projects = () => {
  const [viewAllOpen, setViewAllOpen] = useState(false);
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <motion.div
        initial={false}
        animate={viewAllOpen ? "open" : "closed"}
        style={{
          overflow: "hidden",
        }}
        variants={{
          open: {
            height: "fit-content",
          },
          closed: {
            height: 800,
          },
        }}
        className="relative grid gap-8 grid-cols-1 md:grid-cols-2 p-8"
      >
        {/* <div className="grid gap-12 grid-cols-1 md:grid-cols-2"> */}
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
        {/* </div> */}

        {/* <div className="flex flex-wrap w-full gap-6 mt-4"> */}
        {miniProjects.map((project) => (
          <MiniProjectCard key={project.name} project={project} />
        ))}
        {/* </div> */}

        <motion.div
          variants={{
            open: {
              top: "100%",
            },
            closed: {
              top: "60%",
            },
          }}
          className="absolute bottom-0  left-0 right-0 bg-gradient-to-b from-zinc-950/0 to-zinc-950"
        />
      </motion.div>
      <OutlineButton
        onClick={() => setViewAllOpen((pv) => !pv)}
        className={`mx-auto ${viewAllOpen ? " mt-12 " : " -mt-14 "} =`}
      >
        {viewAllOpen ? "View less" : "View more"}
      </OutlineButton>
    </section>
  );
};

const projects = [
  {
    title: "Nutrify",
    imgSrc: "/worksImages/Nutrify/home.png",
    ytVidSrc: "",
    code: "https://github.com/12106457/Nutrify-website",
    projectLink: "",
    tech: ["Nutrition Tracking Platform", "MERN Stack"],
    techStack: ["React", "Node JS", "Express JS", "Mongo DB"],
    description:
      "Nutrify is a comprehensive health and nutrition tracking application designed to help users log their food intake, monitor daily nutrition goals, manage their diet effectively, and add custom food entries, all within an intuitive and user-friendly interface, making healthy living easier and more accessible.",
    modalContent: (
      <>
        <p>
          Nutrify is a smart and intuitive health and nutrition tracking
          application designed to help users take control of their diet and
          wellness. It allows users to log their daily food intake, monitor
          nutrition goals, and effectively manage their diet with ease. With
          features like user authentication, a personalized dashboard, and the
          ability to add custom food entries with detailed nutritional values,
          Nutrify provides a seamless experience for individuals looking to
          maintain a healthy lifestyle. The platform simplifies the process of
          tracking calories, macros, and essential nutrients, making it a
          valuable tool for anyone focused on fitness, weight management, or
          overall well-being.
        </p>{" "}
        <p>
          I developed this project during my engineering studies as a way to
          apply my knowledge of full-stack development while solving a
          real-world problem. With increasing awareness of healthy living, I
          wanted to create a solution that makes nutrition tracking accessible
          and user-friendly. This project allowed me to enhance my skills in
          frontend and backend development, user authentication, and data
          management while designing an engaging and efficient user experience.
          Through Nutrify, I aimed to build a practical and impactful
          application that promotes healthier eating habits using technology.
        </p>{" "}
      </>
    ),
  },

  {
    title: "Kanban Board",
    imgSrc: "/worksImages/kanban/dashboard.png",
    ytVidSrc: "",
    code: "https://github.com/12106457/Kanban_board",
    projectLink: "https://kanban-board-frontend-mu.vercel.app/",
    tech: ["Task Manager", "React JS"],
    techStack: ["React", "Node JS", "Express JS", "Mongo DB", "Vercel"],
    description:
      "A Kanban board is a visual tool used to manage tasks and workflow efficiently by organizing tasks into columns representing different stages (e.g., To Do, In Progress, Complete). It helps teams visualize work, track progress, and limit work in progress (WIP) to improve productivity.",
    modalContent: (
      <>
        <p>
          A Kanban board is a highly effective visual tool for managing tasks
          and workflows by organizing them into distinct columns representing
          various stages of progress, such as To Do, In Progress, and Complete.
          This system provides a clear overview of ongoing work, helping teams
          track tasks efficiently and prioritize activities based on urgency and
          importance. By visually representing the flow of work, Kanban enhances
          transparency, making it easier to identify bottlenecks and optimize
          task management.
        </p>
        <p>
          One of the key benefits of a Kanban board is its ability to limit Work
          in Progress (WIP), preventing teams from becoming overwhelmed with too
          many tasks at once. This encourages a more streamlined workflow,
          ensuring that work moves smoothly from one stage to another without
          unnecessary delays. Whether used for software development, project
          management, or daily productivity tracking, a Kanban board helps teams
          stay organized, improve collaboration, and enhance overall efficiency.
          With its simple yet powerful structure, it is an essential tool for
          teams looking to boost productivity and maintain a steady workflow.
        </p>
      </>
    ),
  },
];

export const miniProjects = [
  {
    img: "",
    name: "Online Quiz Platform",
    description: "",
    live_link: "",
    github_link: "https://github.com/12106457/Online_Quiz_Platform",
    skills: ["React JS", "Node Js", "Express JS","MongoDB"],
    live_icon: "/assets/icons/figmaIcon.png",
  },

  {
    img: "",
    name: "Blood Donation Website",
    description: "",
    live_link: "",
    github_link: "https://github.com/12106457/Blood_donation_website",
    skills: ["HTML", "CSS","Javascript","Bootstrap"],
    live_icon: "",
  },
  {
    img: "",
    name: "Old Portfolio Website",
    description: "",
    live_link: "https://remarkable-pithivier-aa2e03.netlify.app/",
    github_link: "https://github.com/12106457/Portfolio-website",
    skills: ["HTML", "CSS", "Javascript", "React JS"],
    live_icon: "",
  },
];
