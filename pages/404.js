import Link from "next/link";
import { useRouter } from "next/router";

const Errorpage = () => {
  const route = useRouter();
  return (
    <>
      <div className="">
        <h2>Page Not Found</h2>
        <Link href="/">Home Page</Link>
        <a onClick={() => route.push("/")}>Home</a>
      </div>
    </>
  );
};

export default Errorpage;
