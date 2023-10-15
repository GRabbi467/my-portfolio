import React from 'react';
import { FaBootstrap,FaCss3Alt, FaGithub, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiTailwindcss,SiDaisyui, SiCplusplus, SiCodio,SiExpress, SiMongodb, SiFirebase, SiMysql, SiPostman, } from "react-icons/si";
import { BiLogoNetlify } from "react-icons/bi";
import { TbBrandVscode } from "react-icons/tb";
import { BsGit } from "react-icons/bs";
import './WhatIDo.css'
const WhatIDo = () => {
    return (
        <div className='m-32'>
            <h1 className='text-orange-500 text-center text-3xl'>My Skills</h1>
            <div className='skills'>
                <div className="languages pr-4">
                    <div className='p-4 border-2 rounded-lg border-orange-500 '><FaJs className='text-2xl text-yellow-400  inline'/><span className='text-neutral-400 font-semibold ml-1'>JavaScript(ES6)</span></div>
                    <div className='p-4 border-2 rounded-lg border-orange-500'><SiCplusplus className='text-2xl text-blue-500  inline'/><span className='text-neutral-400 font-semibold ml-1'>C++</span></div>
                    <div className='p-4 border-2 rounded-lg border-orange-500'><SiCodio className='text-2xl text-blue-500  inline'/><span className='text-neutral-400 font-semibold ml-1'>C</span></div>
                </div>
                <div className='frontend pl-4'>
                    <div className='p-4 border-2 rounded-lg border-orange-500'><FaHtml5 className='text-2xl text-orange-600  inline'/><span className='text-neutral-400 font-semibold ml-1'>HTML5</span></div>
                    <div className='p-4 border-2 rounded-lg border-orange-500'><FaCss3Alt className='text-2xl text-blue-700 inline'/><span className=' text-neutral-400 font-semibold ml-1'>CSS3</span></div>
                    <div className='p-4 border-2 rounded-lg border-orange-500'><FaReact className='text-2xl text-cyan-600 inline'/><span className=' text-neutral-400 font-semibold ml-1'>ReactJS</span></div>
                    <div className='p-4 border-2 rounded-lg border-orange-500'><FaBootstrap className='text-2xl text-indigo-500 inline'/><span className=' text-neutral-400 font-semibold ml-1'>Bootstrap</span></div>
                    <div className='p-4 border-2 rounded-lg border-orange-500'><SiTailwindcss className='text-2xl text-cyan-600 inline'/><span className=' text-neutral-400 font-semibold ml-1'>TailwindCSS</span></div>
                    <div className='p-4 border-2 rounded-lg border-orange-500'><SiDaisyui className='text-2xl text-white inline'/><span className=' text-neutral-400 font-semibold ml-1'>DaisyUI</span></div>
                </div>
                <div className="backend pr-4">
                    <div className='p-4 border-2 rounded-lg border-orange-500'><FaNodeJs className='text-2xl text-green-600  inline'/><span className='text-neutral-400 font-semibold ml-1'>NodeJS</span></div>
                    <div className='p-4 border-2 rounded-lg border-orange-500'><SiExpress className='text-2xl text-slate-400 inline'/><span className=' text-neutral-400 font-semibold ml-1'>ExpressJS</span></div>
                    <div className='p-4 border-2 rounded-lg border-orange-500'><SiMongodb className='text-2xl text-green-600 inline'/><span className=' text-neutral-400 font-semibold ml-1'>MongoDB</span></div>
                    <div className='p-4 border-2 rounded-lg border-orange-500'><SiFirebase className='text-2xl text-yellow-500 inline'/><span className=' text-neutral-400 font-semibold ml-1'>Firebase</span></div>
                    <div className='p-4 border-2 rounded-lg border-orange-500'><SiMysql className='text-2xl text-yellow-600 inline'/><span className=' text-neutral-400 font-semibold ml-1'>MySQL</span></div>   
                </div>
                <div className='others pl-4'>
                    <div className='p-4 border-2 rounded-lg border-orange-500'><FaGithub className='text-2xl text-black inline'/><span className='text-neutral-400 font-semibold ml-1'>Github</span></div>
                    <div className='p-4 border-2 rounded-lg border-orange-500'><BsGit className='text-2xl text-orange-600 inline'/><span className=' text-neutral-400 font-semibold ml-1'>Git</span></div>
                    <div className='p-4 border-2 rounded-lg border-orange-500'><TbBrandVscode className='text-2xl text-blue-600 inline'/><span className=' text-neutral-400 font-semibold ml-1'>VScode</span></div>
                    <div className='p-4 border-2 rounded-lg border-orange-500'><BiLogoNetlify className='text-2xl text-cyan-500 inline'/><span className=' text-neutral-400 font-semibold ml-1'>Netlify</span></div>
                    <div className='p-4 border-2 rounded-lg border-orange-500'><SiPostman className='text-2xl text-orange-600 inline'/><span className=' text-neutral-400 font-semibold ml-1'>Postman</span></div>  
                </div>

            </div>
        </div>
    );
};

export default WhatIDo;