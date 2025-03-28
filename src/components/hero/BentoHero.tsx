import React from "react";
import { MotionProps, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin  } from "react-icons/fi";
import { FaRegBuilding } from "react-icons/fa";
import { SiBehance, SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

import { OutlineButton } from "../buttons/OutlineButton";
import Link from "next/link";
import Image from "next/image";
import { LinkPreview } from "../util/link-preview";

export const BentoHero = () => {
  return (
    <div id="about" className="min-h-screen bg-zinc-900  py-6 text-zinc-50">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid  grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        {/* <SocialsBlock /> */}
        <AboutBlock />
        <LocationBlock />
        <CompanyBlock/>
        <EmailListBlock />
      </motion.div>
    </div>
  );
};

type BlockProps = {
  className?: string;
} & MotionProps;

const Block = ({ className, ...rest }: BlockProps) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
    {/* <img
      src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John"
      alt="avatar"
      className="mb-4 size-14 rounded-full"
    /> */}
    <div className="bg-gray-500 border-2 size-24 mb-4 relative inline-block border-gray-400 rounded-full overflow-hidden">
      <Image
        alt="Reach logo"
        src={"/sai_profile_photo.jpeg"}
        layout="fill"
        className="object-cover "
      />
    </div>
    <h1 className="mb6 text-4xl font-medium leading-tight">
      Hi, I'm Sai<span className="text-rose-500">.</span>{" "}
      <span className="text-zinc-400">
        {/* I design and develop intuitive web experiences that stand out. ✨ */}
        I create sleek and powerful websites that make an impact. ✨
      </span>
    </h1>
    <OutlineButton
      onClick={() => {
        document.getElementById("projects")?.scrollIntoView();
      }}
      className="pointer-events-auto before:bg-rose-700 hover:text-white hover:border-rose-700 mt-4 bg-rose-500 text-zinc-100 border-rose-500 md:mt-6"
    >
      View Projects
    </OutlineButton>
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-blue-500 md:col-span-3 "
    >
      <Link
        href=""
        target="_blank"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiLinkedin />
      </Link>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-gray-700 md:col-span-3"
    >
      <Link
        href=""
        target="_blank"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiGithub />
      </Link>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-zinc-50 md:col-span-3"
    >
      <Link
        href="mailto:abc@gmail.com"
        target="_blank"
        className="grid h-full place-content-center text-3xl text-black"
      >
        <SiGmail />
      </Link>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-green-500 md:col-span-3"
    >
      <Link
        href=""
        target="_blank"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiBehance />
      </Link>
    </Block>
  </>
);

const AboutBlock = () => (
  <Block className="col-span-12 text-3xl leading-snug md:col-span-6">
    <p className="text-zinc-400">
      Building seamless and intuitive web experiences, one project at a time. With{" "}
      <span className="text-white"> expertise in React, Next.js, and Tailwind CSS</span>,  
      and a passion for <span className="text-white">frontend innovation</span>,  
      I turn ideas into high-performance, user-friendly applications.
    </p>
  </Block>
);


const LocationBlock = () => (
  <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
    {/* <LinkPreview url="https://maps.app.goo.gl/QgqiJEFLb3M2LS9r5"> */}
      <div className="flex flex-col  align-middle gap-4">
        <FiMapPin className="text-3xl mx-auto" />
        <p className="text-center text-lg text-zinc-400">Gurugram, India</p>
      </div>
    {/* </LinkPreview> */}
  </Block>
);

const CompanyBlock = () => (
  <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
    {/* <LinkPreview url="https://maps.app.goo.gl/QgqiJEFLb3M2LS9r5"> */}
      <div className="flex flex-col  align-middle gap-4">
        <FaRegBuilding  className="text-3xl mx-auto" />
        <p className="text-center text-lg text-zinc-400">Factiify</p>
      </div>
    {/* </LinkPreview> */}
  </Block>
);
//  const EmailListBlock = () => (
//   <Block className="col-span-12 md:col-span-9">
//     <div className="flex flex-wrap justify-between gap-6 align-middle flex-grow">
//       {/* <LinkPreview url="https://nextjs.org/"> */}
//         <div className="bg-gray-500 border-2 border-gray-400 rounded-full p-3">
//           <Image
//             alt="Nextjs logo"
//             src={"/tech/Next.svg"}
//             width={50}
//             height={50}
//           />
//         </div>
//       {/* </LinkPreview> */}
//       {/* <LinkPreview url="https://react.dev/"> */}
//         <div className="bg-gray-500 border-2 border-gray-400 rounded-full p-3">
//           <Image
//             alt="Reach logo"
//             src={"/tech/React.svg"}
//             width={50}
//             height={50}
//           />
//         </div>
//       {/* </LinkPreview> */}
//       {/* <LinkPreview url="https://expressjs.com/"> */}
//         <div className="bg-gray-500 border-2 border-gray-400 rounded-full p-3">
//           <Image
//             alt="Express logo"
//             src={"/tech/Express.svg"}
//             width={50}
//             height={50}
//           />
//         </div>
//       {/* </LinkPreview> */}
//       {/* <LinkPreview url="https://www.mongodb.com/"> */}
//         <div className="bg-gray-500 border-2 border-gray-400 rounded-full p-3">
//           <Image
//             alt="MongoDB logo"
//             src={"/tech/MongoDB.svg"}
//             width={50}
//             height={50}
//           />
//         </div>
//       {/* </LinkPreview> */}
//       {/* <LinkPreview url="https://www.figma.com/about/"> */}
//         <div className="bg-gray-500 border-2 border-gray-400 rounded-full p-3 flex justify-center">
//           <Image
//             alt="Tailwind logo"
//             src={"/tech/tailwind-css.svg"}
//             width={50}
//             height={50}
//           />
//         </div>
//       {/* </LinkPreview> */}
//     </div>
//   </Block>
// );

const icons = [
  { src: "/tech/icons8-css-logo.svg", alt: "Css logo" },
  { src: "/tech/icons8-javascript.svg", alt: "Js logo" },
  { src: "/tech/icons8-typescript.svg", alt: "Ts logo" },
  { src: "/tech/Next.svg", alt: "Next.js logo" },
  { src: "/tech/React.svg", alt: "React logo" },
  { src: "/tech/Express.svg", alt: "Express logo" },
  { src: "/tech/MongoDB.svg", alt: "MongoDB logo" },
  { src: "/tech/tailwind-css.svg", alt: "Tailwind logo" },
  { src: "/tech/react-native-1.svg", alt: "React Native logo" },
  { src: "/tech/icons8-bootstrap.svg", alt: "Bootstrap logo" },
];

const EmailListBlock = () => {
  return (
    <Block className="col-span-12 md:col-span-12 overflow-hidden relative">
     
      <motion.div
        className="flex gap-6"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
      >
        {[...icons, ...icons].map((icon, index) => (
          <div
            key={index}
            className="bg-gray-500 border-2 border-gray-400 rounded-full p-3 shrink-0 flex justify-center items-center"
          >
            <Image alt={icon.alt} src={icon.src} width={50} height={50} />
          </div>
        ))}
      </motion.div>
      
    </Block>
  );
};

const Logo = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <svg
      width="40"
      height="auto"
      viewBox="0 0 50 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto mb-12 fill-zinc-50"
    >
      <path
        d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
        stopColor="#000000"
      ></path>
      <path
        d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
        stopColor="#000000"
      ></path>
    </svg>
  );
};
