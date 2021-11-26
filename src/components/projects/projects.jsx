import React from 'react';
import './projects.css';
import Project from '../project/project';
import Fade from 'react-reveal/Fade';
function Projects() {
    return (
        <div className='projects' id='projects'>
            <Fade bottom><h1 className='section__heading'>Projects</h1></Fade>
           
            <div className="projects__projectCont">

            {/* Instagram clone project */}
              <Project title="Instagram Clone" 
              desc="A instagram clone made using react,redux and firebase. In this i have build a chatroom using real time snapshot listening in firebase.
                Converted it into PWA. I have also added error controller pages for better error handling. 
                It is deployed on firebase."
              langs={['React','Redux','Firebase']} 
              liveLink="https://instagram-clone-4ed61.web.app/"
              githubLink="https://github.com/tanishgupta-git/instagram-clone"
              />

            {/* Fitwithsid project */}
             <Project title="FitWithSid"
             desc="A fitness blogging website for fitness instructor Siddharth Sharma.  
             I have added Intersection Observer api and animations for better user experience."
             langs={['Php','Mysql','Javascript']}
             githubLink="https://github.com/tanishgupta-git/Fitwithsid" />

             {/* Crown Clothing Project */}
             <Project title="Crown Clothing"
             desc="Developed an e-commerce website using firebase at backend and added redux-saga for better handling
             of asynchrounous tasks. In this i have built a server using Express to handle the payment by stripe.
             It is deployed on heroku."
             langs={['React','Redux','Firebase','Stripe','Express']}
             liveLink="https://crown-clothtanish.herokuapp.com/"
             githubLink="https://github.com/tanishgupta-git/Crown-Clothing"
             />

             {/* IntelliBee Project */}
             <Project title="IntelliBee"
             desc="A web app in MERN where after login to there account they can add articles,view their dashboard
             from where they can edit or delete previous articles.The top articles in the website are sorted
             based on the clicks on them by all the users."
             langs={['React','Redux','Node.js','Express','Mongodb']}
             githubLink="https://github.com/tanishgupta-git/IntelliBee"
             />

             {/* Rental Seeker */}
             <Project title="Rental Seeker"
             desc="A web app in MERN for the user who want to give or take a property on rent. In this user can search a
             property for a specific location and the property based on that location is been shortlisted by the user based 
             on it's price and rating. After that he can contact the host for further proceedure."
             langs={['React','Redux','Node.js','Express','Mongodb']}
             githubLink="https://github.com/tanishgupta-git/Rental-Seeker.git"
             />
             
             {/* Expenser */}
             <Project title="Expenser"
             desc="A android app made in react-native for managing personal finance. In this you can add transactions and create your monthly budget which
             help you to limit your expenses. I have added chart functionality which help you to compare your income and expense transactions."
             langs={['React-Native','Firebase']}
             githubLink="https://github.com/tanishgupta-git/Expenser"  
             />
            </div>
        </div>
    )
}

export default Projects;