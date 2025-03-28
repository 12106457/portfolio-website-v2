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
              &apos;m your go-to guy for all things frontend development,
              shaping seamless digital experiences from the ground up. Based in
              India, I thrive on turning complex ideas into intuitive user
              interfaces, crafting solutions that blend aesthetic appeal with
              functionality
            </p>
          </Reveal>

          <Reveal>
            <p>
              My journey started with the fundamentals of HTML, CSS, and
              JavaScript but soon expanded into React, Next.js, and Tailwind
              CSS, leading me to build cutting-edge fintech applications and
              business tools. I specialize in optimizing fintech web
              applications by enhancing performance and user experience.
              Utilizing AG Grid for handling large datasets and implementing
              drag-and-drop functionality for seamless interactions, I focus on
              improving efficiency, reducing load times, and making applications
              more scalable and responsive.
            </p>
          </Reveal>

          <Reveal>
            <p>
              Currently, I’m a Frontend Developer working on a fintech web
              application, bringing intuitive UI/UX to life. Beyond my full-time
              role, I explore new ideas—empowering small shopkeepers with
              digital commerce solutions and helping businesses adapt to the
              evolving online market.
            </p>
          </Reveal>

          <Reveal>
            <p>
              But beyond the code, I’m a passionate tech explorer, startup
              enthusiast, and problem solver, always learning and pushing
              boundaries. Whether it’s refining UI/UX, optimizing performance,
              or enhancing digital interactions, I thrive on building solutions
              that make a meaningful impact.
            </p>
          </Reveal>
        </div>

        <Stats />
      </div>
      <div className="hidden md:block">{/* <DotGrid /> */}</div>
    </section>
  );
};
