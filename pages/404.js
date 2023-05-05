import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Errorpage = () => {
  const route = useRouter();

  useEffect(() => {
    setTimeout(() => {
      route.push("/");
    }, 3000);
  }, []);
  return (
    <>
      <Navbar />
      <div className="">
        <h2>Page Not Found</h2>
        <Link href="/">Home Page</Link>
        <a onClick={() => route.push("/")}>Home</a>
      </div>
    </>
  );
};

export default Errorpage;
