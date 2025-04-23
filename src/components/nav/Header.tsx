import Link from "next/link";
import React from "react";
import { SiBehance, SiGithub, SiGmail, SiLinkedin, SiX } from "react-icons/si";
import { OutlineButton } from "../buttons/OutlineButton";

export const Header = () => {
  return (
    <header className="h-[72px] px-4 flex items-center justify-between sticky top-0 z-20 bg-zinc-900 backdrop-blur-lg">
      <MyLinks />
      <Link target="_blank" href={"/Resume.pdf"}>
        <OutlineButton>
          My Resume
        </OutlineButton>
      </Link>
    </header>
  );
};

export const MyLinks = () => (
  <div className="flex items-center text-lg gap-4">
    <Link
      className="text-zinc-300 hover:text-rose-300 transition-colors"
      href="https://www.linkedin.com/in/sai-kedarisetti/"
      target="_blank"
      rel="nofollow"
    >
      <SiLinkedin />
    </Link>
    <Link
      className="text-zinc-300 hover:text-rose-300 transition-colors"
      href="https://github.com/12106457"
      target="_blank"
      rel="nofollow"
    >
      <SiGithub />
    </Link>
    <Link
      className="text-zinc-300 hover:text-rose-300 transition-colors"
      href="mailto:kedarisettysai440@gmail.com"
      target="_blank"
      rel="nofollow"
    >
      <SiGmail />
    </Link>
  </div>
);
