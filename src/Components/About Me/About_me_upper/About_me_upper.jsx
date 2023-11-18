import React from 'react';
import './About_me_upper.css';
import Rabbi1 from './../../../Images/06_rabbi.jpg'
const About_me_upper = () => {
    return (
        <div className='about-upper'>  
            <div className="sec">
            <div className='about_section'>
             <div className='about_me_div'>
                <div className='about_img'>
                   <div> <img  src={Rabbi1} alt="" /></div>
                </div>
                <div className="about_text">
                <p className='text-lg md:text-2xl text-white'>I'm a highly motivated and enthusiastic Junior Full Stack Developer with a strong passion for technology and a desire to make a meaningful impact in the world of web development.</p>
                <p className=' text-lg md:text-2xl text-white'>With a background in computer science and a recent completion of a coding bootcamp, I am eager to kickstart my career and contribute to exciting projects.</p>
                </div>
             </div>
             </div>
            </div>
        </div>
    );
};

export default About_me_upper;