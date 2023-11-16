import React from 'react';
import DiuLogo1 from './../../Assets/rsz_1diu2.png';
import BafsdLogo from './../../Assets/Logobafdhaka.png';
import BJET from './../../Assets/BJET.jpg';
import './Education.css'

const Education = () => {
    return (
        <div className='education '>
            <h1 className='text-2xl md:text-3xl text-orange-500 text-center'>Educational Background</h1>
            <div>
                <div className="university grid grid-cols-1 justify-items-center md:flex pb-1 md:p-4 border-b-4 border-orange-500 mt-8">
                    <img className='w-36' src={DiuLogo1} alt="" /> 
                    <div className='mt-4 ml-2 md:ml-8 justify-self-start'>
                        <p className='text-2xl md:text-3xl text-white'>Daffodil International University</p>
                        <p className='text-xl text-white'>Bachelor of Computer Science and Engineering</p>
                        <p className='text-md text-white'>April 2018 - May 2022</p>
                        <p className='text-md text-white'>Dhaka, Bangladesh</p>
                        <p className='text-xl text-white'>CGPA : 3.74/4</p>
                    </div>       
                </div>
                <div className="college grid grid-cols-1  justify-items-center md:flex pb-1 md:p-4 border-b-4 border-orange-500 mt-8">
                    <img className='w-36' src={BafsdLogo} alt="" /> 
                    <div className='mt-4 ml-2 md:ml-8 justify-self-start'>
                        <p className='text-2xl md:text-3xl text-white'>BAF Shaheen College Dhaka</p>
                        <p className='text-xl text-white'>Higher Secondary School</p>
                        <p className='text-md text-white'>July 2014 - June 2016</p>
                        <p className='text-md text-white'>Dhaka, Bangladesh</p>
                        <p className='text-xl text-white'>GPA : 5.00/5.00</p>
                    </div>       
                </div>
                <div className="bjet grid grid-cols-1  justify-items-center md:flex pb-1 md:p-4 border-b-4 border-orange-500 mt-8">
                    <img className='w-36' src={BJET} alt="" /> 
                    <div className='mt-4 ml-2 md:ml-8 justify-self-start'>
                        <p className='text-2xl md:text-3xl text-white'>B-JET</p>
                        <p className='text-xl text-white'>Bangladesh Japan IT Engineer Training Program </p>
                        <p className='text-md text-white'>October 2023 - Present</p>
                        <p className='text-md text-white'>Dhaka, Bangladesh</p>
                    </div>       
                </div>
            </div>
        </div>
    );
};

export default Education;