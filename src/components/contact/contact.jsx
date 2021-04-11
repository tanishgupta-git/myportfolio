import React,{useState} from 'react';
import './contact.css';
import Fade from 'react-reveal/Fade';

const Contact = () => {
  const [username,Setusername] = useState("");
  const [email,Setemail] = useState("");
  const [message,Setmessage] = useState("");
  const [success,Setsuccess] = useState("");
  const [error,Seterror] = useState("");
  const [sending,Setsending] = useState(false);
  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }
  const handleSubmit = e => {
    Setusername("");
    Setemail("");
    Setmessage("");
    Setsending(true);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", username:username,email:email,message:message })
    })
      .then(() => {
        Setsuccess("Thank you! Your message has been successfully sent.");
        Setsending(false);
      })
      .catch(error => {
        Seterror("Error in submitting the form,try again later");
        Setsending(false);
      });
    e.preventDefault();
  };
    return (
        <Fade bottom><div className='contact' id='contact'>
         <h1 className='section__heading'>Contact</h1>
          <form 
          name="contact" 
          className='contact__form' 
          method="POST" 
          onSubmit={handleSubmit}>
          { success && <p className="contact__message contact__message--success">{success}</p>}
          { error && <p className="contact__message contact__message--error">{error}</p>}
                <input type="hidden" name="form-name" value="contact" />
                <input className='contact__input' type="text" name="username" required={true} placeholder="Name" 
                onChange={(e) => Setusername(e.target.value)}
                value={username}  
                />          
                <input className='contact__input' type="email" name="email" required={true} placeholder="Email"
                 onChange={(e) => Setemail(e.target.value)}
                 value={email} 
                />    
                <textarea className='contact__input' name="message"  rows='7' required={true} placeholder="Message"
                onChange={(e) => Setmessage(e.target.value)}
                value={message}
                ></textarea>  
                <button className='contact__button' type="submit" disabled={sending}>Send</button>
              
       </form>

      </div></Fade>
    )
}

export default Contact;