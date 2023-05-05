import React from "react";
import Link from "next/link";

const Navbar = () => {
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
    </>
  );
};

export default Navbar;
