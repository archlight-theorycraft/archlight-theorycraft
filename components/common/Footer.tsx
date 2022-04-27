import Link from "next/link";
import React from "react";

const Footer = () => (
  <footer>
    <div className="container">
      <Link href="/">
        <a className="logo-font">
          archtheory
        </a>
      </Link>
      <span className="attribution">
        An interactive learning project from{" "}
        <Link href="https://thinkster.io">Thinkster</Link>. Code &amp; design licensed
        under MIT.
      </span>
    </div>
  </footer>
);

export default Footer;
