import { Inter } from "next/font/google";
import { HomPage } from "@/components";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Sai Kedarisetti | Frontend Developer | MERN Stack Developer</title>
        <meta
          name="description"
          content="Experienced MERN Stack and Frontend Developer skilled in React, Next.js, Node.js, and MongoDB. Passionate about building responsive, real-time web applications with clean, user-friendly interfaces and scalable architecture."
        />   
        <meta name="keywords" content="Frontend Developer, React, Next.js, Portfolio, Web Developer, MERN Stack Developer, Website Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Sai kedarisetti" />
        <meta name="robots" content="index, follow" />
      </Head>

      <main className={inter.className}>
        <HomPage />
      </main>
    </>
  );
}
