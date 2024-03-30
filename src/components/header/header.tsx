import React, { useState } from "react";
import "./header.css";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";

const Header = () => {
  const [showNav, SetshowNav] = useState(false);
  return (
    <Fade direction="up" triggerOnce>
      <nav className="navbar">
        <div className="navbar__main">
          <Image
            className="navbar__logo"
            src={"/logo.png"}
            width={0}
            height={0}
            sizes="100vw"
            alt=""
          />
          <ul className="navbar__list--desktop">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <span
            className="navbar__mobile--icon"
            onClick={() => SetshowNav((prev) => !prev)}
          >
            {showNav ? <HiOutlineX /> : <HiMenuAlt3 />}
          </span>
          <ul
            className={
              showNav
                ? "navbar__list--mobile navbar__list--mobileShow"
                : "navbar__list--mobile"
            }
          >
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </Fade>
  );
};

export default Header;
