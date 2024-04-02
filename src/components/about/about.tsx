"use client";

import React, { useState } from "react";
import "./about.css";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";

const About = () => {
  const [show, Setshow] = useState({ type: "quote" });
  return (
    <div className="about" id="about">
      <h1 className="section__heading">About</h1>
      <Fade direction="up" triggerOnce>
        <div className="about__section">
          <div className="about__text">
            Hey, I am Tanish Gupta, a passionate Software Developer at Addinex
            Technologies. Currently I focus on building versatile apps and
            robust backend solutions. Beyond the realms of coding, I find joy in
            unraveling the complexities of business, discussing investment
            strategies, and immersing myself in the world of arts. Let&apos;s
            connect and exchange thoughts on these fascinating subjects!.
          </div>

          <div className="about__sectionImageParent">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              src={"/Welcome.svg"}
              alt=""
              className="about__sectionImage"
            />
          </div>
        </div>
      </Fade>
      <Fade direction="up" triggerOnce>
        <div className="about_sideParent">
          <div className="about__buttons">
            <button
              className={
                show.type === "quote"
                  ? "about__button about__button--active"
                  : "about__button"
              }
              onClick={() => Setshow({ type: "quote" })}
            >
              Favourite Quote
            </button>
            <button
              className={
                show.type === "interest"
                  ? "about__button about__button--active"
                  : "about__button"
              }
              onClick={() => Setshow({ type: "interest" })}
            >
              Interests
            </button>
            <button
              className={
                show.type === "recentTech"
                  ? "about__button about__button--active"
                  : "about__button"
              }
              onClick={() => Setshow({ type: "recentTech" })}
            >
              Recent Tech
            </button>
          </div>
          <div className="about__side">
            {show.type === "quote" && (
              <div className="about__quote">
                He who has a why to live can bear almost any how.
                <span className="about__quoteAuthor">
                  <em>Friedrich Nietzsche</em>
                </span>
              </div>
            )}
            {show.type === "interest" && (
              <div className="about__subSection">
                <ul>
                  <li className="about__subSectionitem">Business</li>
                  <li className="about__subSectionitem">Playing Guitar</li>
                  <li className="about__subSectionitem">Mindfulness</li>
                  <li className="about__subSectionitem">Swing Trading</li>
                  <li className="about__subSectionitem">Singing</li>
                  <li className="about__subSectionitem">Web</li>
                </ul>
              </div>
            )}
            {show.type === "recentTech" && (
              <div className="about__subSection">
                <ul>
                  <li className="about__subSectionitem">React-Native</li>
                  <li className="about__subSectionitem">NestJs</li>
                  <li className="about__subSectionitem">PostgreSQL</li>
                  <li className="about__subSectionitem">MikroORM</li>
                  <li className="about__subSectionitem">NextJs</li>
                  <li className="about__subSectionitem">Solidity</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </Fade>
      <Fade direction="up" triggerOnce>
        <div className="about__message">
          <h1 className="about__messageHead">Get In Touch</h1>
          <p className="about__text--light">
            If you have any business idea or Just want to connect, i would love
            to be interect with you. Send me a message by{" "}
            <a href="#contact" className="about__contact">
              Contact
            </a>{" "}
            form.
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default About;
