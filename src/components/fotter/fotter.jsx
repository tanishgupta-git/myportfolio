import React from 'react';
import { GrLinkedinOption,GrInstagram,GrGithub,GrTwitter,GrMail } from "react-icons/gr";
import './fotter.css';
import Fade from 'react-reveal/Fade';

const Fotter = () => {
    return (
        <div className='fotter'>
        <Fade bottom><p className='fotter__socialHead'>&lt;Social /&gt;<br/></p>
        <ul className='fotter__social'>
         <a href="https://www.instagram.com/tanish2605/" target="_blank" rel="noopener noreferrer"><GrInstagram /></a>
         <a href="https://www.linkedin.com/in/tanish-gupta-52b76a19a/" target="_blank" rel="noopener noreferrer"><GrLinkedinOption /></a>
         <a href="https://github.com/tanishgupta-git" target="_blank" rel="noopener noreferrer"><GrGithub /></a>
         <a href="https://twitter.com/TanishG02114765?s=08" target="_blank" rel="noopener noreferrer"><GrTwitter /></a>
         <a href="mailto:tanishgupta0315@gmail.com" target="_blank" rel="noopener noreferrer"><GrMail /></a>
        </ul>
        </Fade>
        <Fade bottom><h3 className='fotter__head'> Designed and Developed By Tanish Gupta</h3></Fade> 
      </div> 
    )
}

export default Fotter;