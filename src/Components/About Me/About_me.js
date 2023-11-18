import React from 'react';
import './About_me.css';
import About_me_upper from './About_me_upper/About_me_upper';


const About_me = () => {
    return (
        <div className=''>
             <h1 className='text-orange-500 text-center text-3xl mb-8'>About Me</h1>
             <About_me_upper/>
             <div className='btn-div'>
             <a href="mailto:g.rabbidiu@gmail.com" 
             className="px-10 py-4 text-xl font-semibold text-center text-white transition duration-300 rounded-lg hover:from-purple-600 hover:to-pink-600 ease bg-gradient-to-br from-purple-500 to-pink-500 md:w-auto  
             ">
             Contact Me by Email
             </a>
             </div>
        </div>
    );
};

export default About_me;

