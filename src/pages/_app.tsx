"use client";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <link rel="icon" href="/initial.png" type="image/png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}