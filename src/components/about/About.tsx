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
              I started my journey with a two-month internship at
              <span className="font-semibold text-rose-500"> MyDailyWork</span>,
              where I gained my first experience working on real-world software
              projects.
            </p>
          </Reveal>

          <Reveal>
            <p>
              I then joined
              <span className="font-semibold text-rose-500">
                {" "}
                Factiify Technologies
              </span>
              as an intern and, after eight months, transitioned into a
              full-time role. Since then, I’ve worked across multiple products
              and technologies.
            </p>
          </Reveal>

          <Reveal>
            <p>
              My first major project was
              <span className="font-semibold text-rose-500"> HALO</span>, a
              fintech platform for Stride Ventures, where I handled the complete
              frontend development and built scalable, production-ready
              interfaces.
            </p>
          </Reveal>

          <Reveal>
            <p>
              I then worked on a
              <span className="font-semibold text-rose-500">
                {" "}
                US-based background verification platform
              </span>
              , where I built an automation flow from scratch to deployment.
              This expanded my experience into backend APIs, integrations,
              webhooks, automation, and deployment.
            </p>
          </Reveal>

          <Reveal>
            <p>
              I also contributed to
              <span className="font-semibold text-rose-500">
                {" "}
                MSI (MySiteInspection)
              </span>
              , a US-based platform, where I enhanced existing features and
              fixed production issues while working with an established
              codebase.
            </p>
          </Reveal>

          <Reveal>
            <p>
              Currently, I’m working on an
              <span className="font-semibold text-rose-500">
                {" "}
                e-commerce ERP platform
              </span>
              , focusing on frontend development, API integration, and building
              intuitive interfaces for complex business workflows.
            </p>
          </Reveal>

          <Reveal>
            <p>
              From my first internship to working on fintech, background
              verification, inspection, and ERP platforms, my journey has
              evolved from frontend development to taking ownership of complete
              features and real-world products.
            </p>
          </Reveal>
        </div>

        <Stats />
      </div>
      <div className="hidden md:block">{/* <DotGrid /> */}</div>
    </section>
  );
};
