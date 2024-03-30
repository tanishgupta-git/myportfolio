import React from "react";
import "./projects.css";
import Project from "../project/project";
import { Fade } from "react-awesome-reveal";
function Projects() {
  return (
    <div className="projects" id="projects">
      <Fade direction="down" triggerOnce>
        <h1 className="section__heading">Projects</h1>
      </Fade>

      <div className="projects__projectCont">
        {/* Addinex Project */}
        <Project
          title="Addinex App & Backend"
          desc="At Addinex Technologies, I contribute to the Addinex Patient Application, improving medication retrieval. Our app generates secure device codes, utilizing advanced algorithms to prevent cheating and optimize dosage timings. 
          Working on the backend has honed my skills in crafting scalable architectures and efficient data management.
          Currently, I am at the forefront of enhancing the app's overall performance and leading the transition towards a microservices architecture for our upcoming version 2.
          "
          langs={["NestJs", "TypeORM", "PostgreSQL", "GraphQL", "React-Native"]}
        />

        {/* Instagram clone project */}
        <Project
          title="Instagram Clone"
          desc="A instagram clone made using react,redux and firebase. In this i have build a chatroom using real time snapshot listening in firebase.
                Converted it into PWA. I have also added error controller pages for better error handling. 
                It is deployed on firebase."
          langs={["React", "Redux", "Firebase"]}
          githubLink="https://github.com/tanishgupta-git/instagram-clone"
        />

        {/* Rental Seeker */}
        <Project
          title="Rental Seeker"
          desc="A web app in MERN for the user who want to give or take a property on rent. In this user can search a
             property for a specific location and the property based on that location is been shortlisted by the user based 
             on it's price and rating. After that he can contact the host for further proceedure."
          langs={["React", "Redux", "Node.js", "Express", "Mongodb"]}
          githubLink="https://github.com/tanishgupta-git/Rental-Seeker.git"
        />

        {/* Expenser */}
        <Project
          title="Expenser"
          desc="A android app made in react-native for managing personal finance. In this you can add transactions and create your monthly budget which
             help you to limit your expenses. I have added chart functionality which help you to compare your income and expense transactions."
          langs={["React-Native", "Firebase"]}
          githubLink="https://github.com/tanishgupta-git/Expenser"
        />
      </div>
    </div>
  );
}

export default Projects;
