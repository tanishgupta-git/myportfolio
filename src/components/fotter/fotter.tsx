import React from "react";
import {
  GrLinkedinOption,
  GrInstagram,
  GrGithub,
  GrTwitter,
  GrMail,
} from "react-icons/gr";
import "./fotter.css";
import { Fade } from "react-awesome-reveal";

const Fotter = () => {
  return (
    <Fade direction="up" triggerOnce>
      <div className="fotter">
        <p className="fotter__socialHead">
          &lt;Social /&gt;
          <br />
        </p>
        <ul className="fotter__social">
          <a
            href="https://www.instagram.com/tanish2605/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/tanish-gupta-52b76a19a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrLinkedinOption />
          </a>
          <a
            href="https://github.com/tanishgupta-git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrGithub />
          </a>
          <a
            href="https://twitter.com/_TanishGupta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrTwitter />
          </a>
          <a
            href="mailto:tanishgupta0315@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrMail />
          </a>
        </ul>
        <Fade direction="up" triggerOnce>
          <h3 className="fotter__head">
            {" "}
            Designed & Developed By Tanish Gupta
          </h3>
        </Fade>
      </div>
    </Fade>
  );
};

export default Fotter;
