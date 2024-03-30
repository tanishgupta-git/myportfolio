import React from "react";
import "./project.css";
import { FaLink, FaGithub } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import { IProps } from "./types";

const Project: React.FC<IProps> = (props) => {
  const { title, desc, langs, liveLink, githubLink } = props;
  return (
    <Fade direction="up" triggerOnce>
      <div className="project">
        <div className="project__basicInfo">
          <h2 className="project__title">{title}</h2>
          <div className="project__langs">
            {langs.map((lang) => (
              <span key={Math.random()} className="project__lang">
                {lang}
              </span>
            ))}
          </div>
          <div className="project__links">
            {liveLink && (
              <a href={liveLink}>
                <FaLink />
              </a>
            )}
            {githubLink && (
              <a href={githubLink}>
                <FaGithub />
              </a>
            )}
          </div>
        </div>

        <div className="project__detail">
          <p className="project__desc">{desc}</p>
        </div>
      </div>
    </Fade>
  );
};

export default Project;
