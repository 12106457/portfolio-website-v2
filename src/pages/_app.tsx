import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Analytics/>
      <Component {...pageProps} />
    </>
  );
}
