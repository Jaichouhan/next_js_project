import Navbar from "@/components/Navbar";
import styles from "../styles/home.module.css";

const home = () => {
  return (
    <>
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
