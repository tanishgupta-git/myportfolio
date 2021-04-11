import React,{useState} from 'react';
import './header.css';
import { HiMenuAlt3,HiOutlineX } from "react-icons/hi";
import Fade from 'react-reveal/Fade';
const Header = () => {
    const [showNav,SetshowNav] = useState(false); 
    return (
      <Fade top><nav className='navbar'>
      <div className='navbar__main'>
        <h1 className='navbar__logo'><span className='navbar__logo--themeColor'>Tanish</span> Gupta</h1>
        <ul className='navbar__list--desktop'>
          <li><a href='#about'>About</a></li>
          <li><a href='#projects'>Projects</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
        <span className="navbar__mobile--icon" onClick={() => SetshowNav(prev => !prev)}>{showNav ? <HiOutlineX /> : <HiMenuAlt3 />}</span>
        <ul className={showNav ? 'navbar__list--mobile navbar__list--mobileShow' : 'navbar__list--mobile'}>
           <li><a href='#about'>About</a></li>
          <li><a href='#projects'>Projects</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
        </div>
      </nav>
      </Fade>
    )
}

export default Header;