import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook ,faTwitter,faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons';
import { SiLeetcode,SiResearchgate } from "react-icons/si";
import Lottie from 'lottie-react'
import animationData2 from '../../Assets/animation_rocket.json'
import { Link} from 'react-router-dom';


const Home = () => {
     return (
        <div className='home'>
          <div className='upper'>
          <div className="my-info">
           <h3 className='text-2xl text-orange-50'>Hi,My Name is</h3><br />
           <h1 className='text-3xl  md:text-5xl text-orange-400'>GOLAM RABBI (ゴラムラッビ).</h1>
           <h1 className=' text-3xl md:text-4xl 2xl:text-5xl text-orange-300 my-5'>I BUILD THINGS FOR THE WEB.</h1>
           <p className='text lg md:text-2xl'>I'm a highly motivated and enthusiastic Junior Full Stack Developer with a strong passion for technology and a desire to make a meaningful impact in the world of web development.</p>
           {/* <p className='text-2xl'>With a background in computer science and a recent completion of a coding bootcamp, I am eager to kickstart my career and contribute to exciting projects.</p> */}
           <Link to = 'https://drive.google.com/file/d/1KTmabii4hnCub9DzZpnFsjAfHfmpvGGG/view?usp=drive_link'> <button className="resume-btn">RESUME</button></Link>       
           </div>

           <div className='animation md:max-2xl:flex items-center justify-center'>
            <Lottie animationData={animationData2}/>
           </div>
           
          </div>

           
            <div className='social-icons flex justify-evenly'>
            <a href="https://www.linkedin.com/in/golam-rabbi-diu/">
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            </a>
            <a href="https://github.com/GRabbi467">
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </a>
            <a href="https://www.facebook.com/g.rabbii/">
                <FontAwesomeIcon icon={faFacebook} ></FontAwesomeIcon>
            </a>
            <a href="https://twitter.com/grabbixx">
                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </a>
            
            <a href="https://leetcode.com/rabbii/">
                <SiLeetcode className='mt-2'/>
            </a>
            <a href="https://www.researchgate.net/profile/Golam-Rabbi-8">
                <SiResearchgate className='mt-2'/>
            </a>
          
            </div>
           

        </div>
    );
};

export default Home;