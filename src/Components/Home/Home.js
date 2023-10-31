import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook ,faTwitter,faLinkedin,faGithub,faWeebly} from '@fortawesome/free-brands-svg-icons'
import Lottie from 'lottie-react'
import animationData2 from '../../Assets/animation_rocket.json'
import { Link, useNavigate } from 'react-router-dom';





const Home = () => {
   

    return (
        <div className='home'>

          <div className='upper'>

          <div className="my-info">
           <h3 className='text-2xl text-orange-50'>Hi,My Name is</h3><br />
           <h1 className='text-4xl lg:text-5xl text-orange-400'>GOLAM RABBI.</h1>
           <h1 className='text-4xl lg:text-5xl text-orange-300 my-5'>I BUILD THINGS FOR THE WEB.</h1>
           <p className='text-2xl'>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences.</p>
           <p className='text-2xl'>Currently, I’m focused on building accessible, human-centered products at Upstatement.</p>
           <Link to = 'https://drive.google.com/file/d/1XwKk0nhJkhE0TZF5n9R-98SMDNZbZYHO/view?usp=drive_link'> <button className="resume-btn">RESUME</button></Link>
           
           </div>

           <div className='animation md:max-2xl:flex items-center justify-center'>
            <Lottie animationData={animationData2}/>
           </div>
           
          </div>

           
            <div className='social-icons flex justify-evenly'>
            <a href="https://www.facebook.com/">
                <FontAwesomeIcon icon={faFacebook} ></FontAwesomeIcon>
            </a>
            <a href="https://www.twitter.com/">
                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </a>
            <a href="https://www.linkedin.com/">
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            </a>
            <a href="https://www.github.com/">
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </a>
            <a href="https://www.google.com/">
                <FontAwesomeIcon icon={faWeebly}></FontAwesomeIcon>
            </a>
          
            </div>
           

        </div>
    );
};

export default Home;