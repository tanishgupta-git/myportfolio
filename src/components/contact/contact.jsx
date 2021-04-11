import React from 'react';
import './contact.css';
import Fade from 'react-reveal/Fade';

const Contact = () => {
    return (
        <Fade bottom><div className='contact' id='contact'>
         <h1 className='section__heading'>Contact</h1>
        
          <form name="contact" className='contact__form' method="POST" data-netlify="true">
              <p>
                <input className='contact__input' type="text" name="name" required={true} placeholder="Name"/>  
              </p>
              <p>
                <input className='contact__input' type="email" name="email" required={true} placeholder="Email"/>
              </p>
              <p> 
                <textarea className='contact__input' name="message"  rows='7' required={true} placeholder="Message"></textarea>
              </p>
              <p>
                <button className='contact__button' type="submit">Send</button>
              </p>
       </form>
      </div></Fade>
    )
}

export default Contact;