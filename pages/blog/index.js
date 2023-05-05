import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";

export const getStaticProps = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const index = ({ data }) => {
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
        {data &&
          data.products &&
          data.products.slice(0, 5).map((data, i) => (
            <div className="" key={i}>
              <h1>{data.brand}</h1>
              <Link href={`/blog/${data.id}`}>
                <h2>{data.category}</h2>
              </Link>
              <h3>{data.description}</h3>
              <h4>{data.price}</h4>
              <h5>{data.title}</h5>
              <h6>{data.rating}</h6>
              <div style={{ marginTop: "30px" }}></div>
            </div>
          ))}
      </header>
    </>
  );
};

export default index;
