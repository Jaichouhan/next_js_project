import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Offer from "@/components/Offer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Offer />
      <Navbar />
      <Head>
        <title>Fit4Sure</title>
        <meta name="description" content="Fit4Sure" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}
