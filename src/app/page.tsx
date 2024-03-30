"use client";
import About from "@/components/about/about";
import Contact from "@/components/contact/contact";
import Fotter from "@/components/fotter/fotter";
import Header from "@/components/header/header";
import Intro from "@/components/intro/intro";
import Projects from "@/components/projects/projects";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Zoom } from "react-awesome-reveal";

export default function Home() {
  const [loading, Setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      Setloading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="app__loader">
          <div className="app__imageParent">
            <svg height="130" width="130" className="app__loaderSvg">
              <polygon
                points="55 3,105 30,105 87,55 120,3 87,3 30"
                className="app__loaderSvgHex"
              />
            </svg>
            <div className="app__loaderImageParent">
              <Zoom>
                <Image
                  className="app__loaderImage"
                  src={"/tanishLogo.png"}
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt=""
                />
              </Zoom>
            </div>
          </div>
        </div>
      ) : (
        <>
          <Header />
          <Intro />
          <Projects />
          <About />
          <Contact />
          <Fotter />
        </>
      )}
    </div>
  );
}
