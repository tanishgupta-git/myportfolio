import React from "react";
import "./intro.css";
import { Fade, Zoom } from "react-awesome-reveal";
import Image from "next/image";

function Intro() {
  return (
    <div className="intro">
      <Zoom triggerOnce>
        <div className="intro__image">
          <div className="intro__imageBack"></div>
          <Image
            className="taniImage"
            src={"/TanishProfileImage.png"}
            width={0}
            height={0}
            sizes="100vw"
            alt=""
          />
        </div>
      </Zoom>

      <div className="intro__desc">
        <Fade direction="down" triggerOnce>
          <p className="intro__msg">Hi, my name is</p>
        </Fade>
        <Fade direction="down" triggerOnce>
          <h1 className="intro__head">Tanish Gupta.</h1>
        </Fade>
        <Fade direction="down" triggerOnce>
          <h1 className="intro__text">
            I design and develop web & mobile apps that promote people 24/7.
          </h1>
        </Fade>
        <Fade direction="down" triggerOnce>
          {" "}
          <a href="#about" className="intro__aboutLink">
            More About Me
          </a>
        </Fade>
      </div>
    </div>
  );
}

export default Intro;
