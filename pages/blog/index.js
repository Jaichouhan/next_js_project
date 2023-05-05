import React from "react";
import Link from "next/link";

const index = () => {
  return (
    <>
      <nav>
        <ul className="menu-bar">
          <li className="">
            <Link href="/">Home</Link>
          </li>
          <li className="">
            <Link href="/about">About</Link>
          </li>
          <li className="">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="">
            <Link href="/product">Product</Link>
          </li>
        </ul>
      </nav>
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
