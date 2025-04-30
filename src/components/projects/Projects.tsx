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
    title: "Media Project Management Dashboard",
    imgSrc: "/worksImages/mediaProject/loginPage.png",
    ytVidSrc:
      "https://www.youtube.com/embed/jgzu712sn9s?si=inCzUASP9z7NrJPQ&autoplay=1&mute=1&loop=1&cc_load_policy=0",
    code: "https://github.com/12106457/skailama-MERN-Assignment",
    projectLink: "https://skailama-assigment-client.vercel.app/",
    tech: ["Media Project Management Platform", "MERN Stack"],
    techStack: ["React", "Node JS", "Express JS", "Mongo DB"],
    description:
      "This is a full-stack Media Project Management Web Application designed for users to upload, manage, and edit multimedia files across multiple projects with an intuitive interface and secure user authentication.",
    modalContent: (
      <>
        <p>
          This project is a full-stack Media Project Management Dashboard that
          enables users to seamlessly manage multimedia files across multiple
          projects. It starts with a secure login and registration system,
          allowing each user to create and access their personalized dashboard.
          The dashboard showcases all the user’s projects in a card layout,
          where each card displays a project image, title, the number of
          uploaded files, and the last edited date — giving a clear and quick
          overview of ongoing work.
        </p>{" "}
        <p>
          Upon selecting a project, the user is navigated to a dedicated
          workspace with a split-screen layout: a left-side sidebar for easy
          navigation and a right-side main content area. This main section
          features a top navigation bar and powerful upload functionalities.
          Users can upload files either directly from their device, through
          feeds, or via YouTube links. The upload process is managed via a modal
          popup, where users can enter the file name, provide a transcription,
          and submit the file. All uploaded files are displayed in a table
          format with options to view, delete, or edit the file contents,
          ensuring full control over project resources.
        </p>{" "}
        <p>
          Additionally, the application provides an account settings section,
          allowing users to manage personal information such as name and
          password. The overall design focuses on usability, clean structure,
          and performance, making it ideal for content creators, educators, or
          businesses handling large volumes of multimedia content. With features
          like real-time file management, project-based organization, and user
          customization, this platform streamlines the entire media project
          workflow in one place.
        </p>{" "}
      </>
    ),
  },
  {
    title: "AI Chat Interface Prototype",
    imgSrc: "/worksImages/claude-ai/dashboard.png",
    ytVidSrc: "",
    code: "https://github.com/12106457/Claude-ai-clone",
    projectLink: "https://claude-ai-clone-peach.vercel.app/",
    tech: ["AI Chat Interface", "Google authentication"],
    techStack: ["HTML", "CSS", "JavaScript", "React"],
    description:
      "This is a Claude.ai-inspired AI Chat Dashboard built as a prototype for a company. It includes Google login, a split-screen UI with chat history and user profile on the left, and a responsive AI chat interface on the right. Users can view past chats, interact with AI, and manage their profile details.",
    modalContent: (
      <>
        <p>
          This project is a Claude.ai-style Conversational AI Dashboard, created
          as a functional prototype for a company. It offers seamless Google
          authentication for user login and registration, ensuring quick and
          secure access. Once logged in, users land on a clean, intuitive
          interface divided into two main sections to mirror the familiar
          experience of modern AI chat platforms like ChatGPT and Claude.
        </p>{" "}
        <p>
          The left panel provides users with a searchable history of their
          previous queries and responses, allowing them to revisit past
          conversations easily. Below that, a profile section displays user
          information, including access to personal details and settings. On the
          right panel, users interact with a responsive chat box that accepts
          queries and returns AI-generated responses in real time. The layout is
          designed for clarity and smooth usability, ensuring a seamless
          conversational experience.
        </p>{" "}
        <p>
          Built with scalability in mind, this prototype demonstrates a
          practical, user-focused approach to AI interaction. It highlights key
          features like session management, user personalization, and real-time
          data handling — making it suitable for enterprise-grade integration or
          expansion into a full-scale product.
        </p>{" "}
      </>
    ),
  },
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
    description:
      "The Online Quiz Platform is a secure web-based testing system that begins with a login page and a pre-exam environment check to ensure all required test conditions are met. Only after passing this check can users access the quiz interface. Upon completing and submitting the test, the platform automatically calculates the score and sends the results to the user’s registered email address, making it an efficient and user-friendly solution for online assessments.",
    live_link: "",
    github_link: "https://github.com/12106457/Online_Quiz_Platform",
    skills: ["React JS", "Node Js", "Express JS", "MongoDB"],
    live_icon: "/assets/icons/figmaIcon.png",
  },

  {
    img: "",
    name: "Blood Donation Website",
    description:
      "The Blood Donation Website is a life-saving platform where users can register as donors and also request blood when in need. The main features include donor registration, searching for available blood types in a specific location, and requesting blood units from registered donors. It simplifies the process of finding and connecting with compatible donors during emergencies, making blood donation more accessible, efficient, and community-driven.",
    live_link: "",
    github_link: "https://github.com/12106457/Blood_donation_website",
    skills: ["HTML", "CSS", "Javascript", "Bootstrap"],
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
