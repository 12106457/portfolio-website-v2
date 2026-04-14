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
    position: "Full Stack Developer",
    time: "Sept 2024 - Present",
    location: "On Site, Gurugram",
    description:
      "Worked as a Full Stack Developer building scalable web and mobile applications across fintech and service platforms using React, Next.js, Tailwind CSS, and React Native (Expo). Developed pixel-perfect, responsive UIs from Figma designs and implemented features like voice recording, in-app note-taking, and advanced data filtering. Integrated multiple APIs, including Google Maps and payment services, to deliver production-ready mobile features. Currently contributing to a US-based background verification platform by developing APIs, integrating third-party services, and building end-to-end functionality across frontend and backend with a focus on performance, scalability, and clean code.",
     tech: [
      "React.js",
      "Next.js",
      "React Native (Expo)",
      "JavaScript (ES6+)",
      "TypeScript",
      "Tailwind CSS",
      "Redux / Context API",
      "REST API Integration",
      "Google Maps API",
      "Payment Gateway Integration",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Git & GitHub"
    ]
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
