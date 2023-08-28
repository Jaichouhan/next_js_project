import { useRouter } from "next/router";
import React from "react";

const Setting = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h1>Your setting Page {router.query.usersname}</h1>
    </div>
  );
};

export default Setting;
