import { AiOutlineArrowRight } from "react-icons/ai";
import { SectionHeader } from "../util/SectionHeader";
import Reveal from "../util/Reveal";
import { MyLinks } from "../nav/Header";
import { Stats } from "./Stats";
import DotGrid from "../hero/DotGrid";

export const About = () => {
  return (
    <section className="section-wrapper relative">
      <SectionHeader title="My Journey" dir="l" />
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
        <div className="space-y-4 bg-gray-900/10 z-10 backdrop-blur-lg">
          <Reveal>
            <p>
              <span className="bg-rose-500 text-white py-2 px-3 rounded font-bold mr-1 float-left text-2xl">
                I
              </span>
              &apos;am a Full Stack Developer with hands-on experience building scalable, high-performance web and mobile applications across fintech and service-based platforms. I specialize in React, Next.js, Tailwind CSS, and React Native (Expo), with a strong focus on delivering fast, intuitive, and user-centric interfaces. I have a proven ability to translate complex Figma designs into pixel-perfect, responsive UIs while maintaining clean architecture and performance optimization.
            </p>
          </Reveal>

          <Reveal>
            <p>
              In the fintech domain, I worked extensively on frontend systems, developing features such as voice recording, in-app note-taking, and advanced data filtering for large datasets using tools like AG Grid. My work focused on improving usability, reducing load times, and ensuring smooth handling of complex data-driven interfaces.
            </p>
          </Reveal>

          <Reveal>
            <p>
              I further expanded my skill set into mobile development through the OnService application, where I built production-ready features by integrating multiple APIs, including Google Maps and payment services. This experience strengthened my ability to handle real-world use cases involving third-party integrations, location-based services, and transaction workflows.
            </p>
          </Reveal>

          <Reveal>
            <p>
             Currently, I am contributing as a Full Stack Developer to a US-based background verification platform, where I design and develop APIs, integrate third-party services, and build end-to-end features across both frontend and backend systems. My role involves ensuring seamless data flow, system reliability, and scalable architecture while maintaining code quality and performance standards.
            </p>
          </Reveal>

          <Reveal>
            <p>
              I focus on writing clean, maintainable code, optimizing performance, and solving real business problems through efficient and scalable solutions. I approach development with an ownership mindset, prioritizing impact, usability, and long-term scalability over just feature delivery.
            </p>
          </Reveal>
        </div>

        <Stats />
      </div>
      <div className="hidden md:block">{/* <DotGrid /> */}</div>
    </section>
  );
};
