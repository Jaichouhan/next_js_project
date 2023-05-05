import Navbar from "@/components/Navbar";
import styles from "../styles/home.module.css";
import Head from "next/head";

const home = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta charset="UTF-8" />
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript , Next.js" />
        <meta name="author" content="Jaipal Chouhan" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      <div className={styles.heading}>Home Page</div>
      <h1>Hello Wolrd </h1>
      <style jsx>{`
        h1 {
          color: pink;
          margin-top: 30px;
        }
      `}</style>
    </>
  );
};

export default home;
