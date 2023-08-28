import { useRouter } from "next/router";
import React from "react";

const index = () => {
  const route = useRouter();
  return (
    <>
      <div className="">
        <h1>My Name is {route.query.usersname}</h1>
        <button
          onClick={() =>
            route.push({
              pathname: "/user/[user]/setting",
              query: { user: route.query.usersname },
            })
          }
        >
          {" "}
          Go Your Name Page{" "}
        </button>
      </div>
    </>
  );
};

export default index;
