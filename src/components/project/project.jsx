import React from 'react';
import './project.css';
import { FaLink,FaGithub } from "react-icons/fa";
import Fade from 'react-reveal/Fade';

const Project = ({title,desc,langs,liveLink,githubLink}) => {
    return (
        <Fade bottom>
        <div className='project'>
       <div className="project__basicInfo">
            <h2 className="project__title">{title}</h2>
            <div className="project__langs">
            {
                langs.map( lang => (
                    <span key={Math.random()} className="project__lang">{lang}</span>
                ))
            }
            </div>
            <div className='project__links'>
                { liveLink && <a href={liveLink}><FaLink /></a>}
                <a href={githubLink}><FaGithub /></a>
            </div>
        </div>
       
    
        <div className="project__detail">
            <p className="project__desc">{desc}</p>
        </div>
      
        </div>
        </Fade>
    )
}

export default Project;