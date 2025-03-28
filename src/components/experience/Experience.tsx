import { SectionHeader } from "../util/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Factiify",
    position: "Frontend Developer",
    time: "Sept 2024 - Present",
    location: "On Site, Gurugram",
    description:
      "As a Frontend Developer in the fintech space, I specialize in building and optimizing web applications using React, Next.js, and Tailwind CSS. I translate Figma designs into pixel-perfect UIs, ensuring a seamless user experience. My work involves implementing new features like voice recording, a notepad for note-taking, and advanced filtering for large datasets. I also integrate APIs to streamline data flow and enhance application functionality. Collaborating with cross-functional teams, I focus on delivering intuitive, high-performance solutions that improve efficiency and user engagement.",
    tech: [
      "ReactJS",
      "NextJS",
      "Tailwind Css",
      "Typescript",
      "State Management Tools",
      "Team Collaboration",
    ],
  },
  {
    title: "MyDailyWork",
    position: "Web Developer",
    time: "July 2023 - Aug 2024",
    location: "Remote",
    description:
    "I started my journey with a two-month internship at MyDailyWork, where I was assigned various tasks to gain hands-on experience in real-world projects. During my internship, I worked on developing projects like an eCommerce website and an online quiz platform, which helped me strengthen my frontend skills and understand project workflows. This experience provided me with a strong foundation in building scalable applications, following best coding practices, and collaborating on real-time development tasks",
    tech: [
     "HTML",
     "CSS",
     "Javascript",
     "React"
    ],
  }
  
];
