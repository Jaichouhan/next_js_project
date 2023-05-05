import Navbar from "@/components/Navbar";
import React from "react";

const index = () => {
  return (
    <>
      <Navbar />
      <header className="header">
        <div className="brand_box"></div>
        <div className="text_box">
          <h1 className="heading_primary">
            <span className="heading_primary_main">
              Welcome to the world of ReactJS
            </span>
            <span>Love with JavaScript</span>
          </h1>
          <a href="" className="btn btn_white btn_animated">
            Jaipal Chouhan
          </a>
        </div>
      </header>
    </>
  );
};

export default index;
