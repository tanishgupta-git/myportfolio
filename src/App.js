import React,{useState,useEffect} from 'react';
import './App.css';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Fotter from './components/fotter/fotter';
import Header from './components/header/header';
import Intro from './components/intro/intro';
import Projects from './components/projects/projects';
import Logo from './tanishLogo.png';
import Zoom from 'react-reveal/Zoom';

function App() {
  const [ loading,Setloading] = useState(true);
  useEffect(() => {
   setTimeout(() => {
    Setloading(false)
   },2000)
  },[])
  return (
    <div className="App">
    { loading ?  
    <div className="app__loader">
    <div className="app__imageParent">
      <svg width="230" height="190" className="app__loaderSvg">
        <rect width="220" x="3" y="4" height="180" className="app__loaderSvgRect" />
      </svg>
    <Zoom><div className="app__loaderImageParent"><img className="app__loaderImage" src={Logo} alt=""/></div></Zoom>
    </div>
  </div>
    : <>
      <Header />
      <Intro />
      <Projects />
      <About />
      <Contact />
      <Fotter />
      </> }
    </div>
  );
}

export default App;