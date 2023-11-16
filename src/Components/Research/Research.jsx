import React from 'react';
import { SiResearchgate } from "react-icons/si";
import { Link } from 'react-router-dom';
import './Research.css'
import { FaResearchgate } from 'react-icons/fa';
const Research = () => {
    return (
        <>
        <h1 className='text-orange-500 text-center text-3xl mb-8'>Research</h1>
        <div className='grid justify-center'>
           <div className="research-container1 text-white border-2 border-orange-500 rounded-2xl p-6">
               <p className='text-md lg:text-2xl'>Paper Title: Bangla Font Recognition using Transfer Learning Method</p>
               <p>Published In : 2022 International Conference on Inventive Computation Technologies (ICICT)</p>
               <a className='underline decoration-orange-400 decoration-2 text-xl' href="https://ieeexplore.ieee.org/document/9850765">Read More</a>
           </div>  
       </div>
     
        </>
    );
};

export default Research;