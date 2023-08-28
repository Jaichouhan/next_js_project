import { useRouter } from "next/router";
import React from "react";

const index = () => {
  const route = useRouter();
  console.log(route.query);
  return (
    <>
      <div className="">
        <h1>My Name is jai</h1>
        <button onClick={() => route.replace(`user/jai`)}>
          {" "}
          Go Your Name Page{" "}
        </button>
      </div>
    </>
  );
};

export default index;
