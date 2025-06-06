import { useEffect } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import Reveal from "../util/Reveal";
import { Chip } from "../util/Chip";

interface Props {
  isOpen: boolean;
  setIsOpen: Function;
  title: string;
  imgSrc: string;
  ytVidSrc: string;
  code: string;
  projectLink: string;
  tech: string[];
  modalContent: JSX.Element;
  techStack:string[];
}

export const ProjectModal = ({
  modalContent,
  projectLink,
  setIsOpen,
  imgSrc,
  ytVidSrc,
  isOpen,
  title,
  code,
  tech,
  techStack,
}: Props) => {
  useEffect(() => {
    const body = document.querySelector("body");

    if (isOpen) {
      body!.style.overflowY = "hidden";
    } else {
      body!.style.overflowY = "scroll";
    }
  }, [isOpen]);

  const content = (
    <div
      className="fixed inset-0 z-50 px-4 py-12 bg-zinc-950/50 backdrop-blur-2xl overflow-y-scroll flex justify-center cursor-pointer"
      onClick={() => setIsOpen(false)}
    >
      <button className="absolute top-4 md:top-6 text-2xl right-4">
        <MdClose />
      </button>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl h-fit rounded-lg overflow-hidden bg-zinc-900 shadow-lg cursor-auto"
      >
        {/* <img
          className="w-full"
          src={imgSrc}
          alt={`An image of the ${title} project.`}
        /> */}

        {ytVidSrc && ytVidSrc != "" ? (
          <iframe
            // width="560"
            // height="315"
            src={ytVidSrc}
            className="w-full h-96"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="w-full h-96 relative">
            <Image
              src={imgSrc}
              alt={`An image of the ${title} project.`}
              layout="fill"
              objectFit=""
              className=""
              style={{
                transformOrigin: "center",
              }}
            />
          </div>
        )}

        <div className="p-8">
          <div className="mb-8">
            <p className="font-bold mb-2 text-xl">
              Project Links<span className="text-rose-500">.</span>
            </p>
            <div className="flex items-center gap-4 text-sm">
              {code && code !== "" && (
                <Link
                  target="_blank"
                  rel="nofollow"
                  className="text-zinc-300 hover:text-rose-300 transition-colors flex items-center gap-1"
                  href={code}
                >
                  <AiFillGithub /> Source Code
                </Link>
              )}
              <Link
                target="_blank"
                rel="nofollow"
                className="text-zinc-300 hover:text-rose-300 transition-colors flex items-center gap-1"
                href={projectLink}
              >
                <AiOutlineExport /> Live Project
              </Link>
            </div>
          </div>

          <h4 className="text-3xl font-bold mb-2">{title}</h4>
          <div className="flex flex-wrap gap-2 text-sm text-rose-300">
            {tech.join(" - ")}
          </div>

          <div className="space-y-4 my-6 leading-relaxed text-sm text-zinc-300">
            {modalContent}
          </div>
          <Reveal>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((item) => (
                      <Chip key={item}>{item}</Chip>
                    ))}
                  </div>
                </Reveal>
        </div>
      </motion.div>
    </div>
  );

  if (!isOpen) return <></>;

  // @ts-ignore
  return ReactDOM.createPortal(content, document.getElementById("root"));
};
