import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Rabbi2 from '../../Images/Rabbi3.png';
import { FaBars ,FaTimes} from "react-icons/fa";

const Header = () => {
  const [isOpen,setIsOpen] = useState(false);
  console.log(isOpen)
    return (
        <nav className='header'>
          <div className='logo_name'>
          <img className='' src= {Rabbi2} alt="Golam Rabbi" />  
          </div>
        
        <div className='flex'>
        <ul onClick={()=>setIsOpen(false)}  className={isOpen ? 'side-bar-mobile':'side-bar'}>
          <Link className='hover:text-orange-400'  to="/">Home</Link>
          <Link className='hover:text-orange-400' to="/education">Education</Link>
          <Link className='hover:text-orange-400' to="/whatido">Skills</Link>
          <Link className='hover:text-orange-400' to = "/projects">Projects</Link>
          <Link className='hover:text-orange-400' to="/research">Research</Link>
          <Link className='hover:text-orange-400' to="/about">About Me</Link>
        </ul>
       {
        isOpen ?
        (
          <FaTimes onClick={()=>setIsOpen(!isOpen)} className='text-white ml-4 mt-2 text-xl md:hidden'></FaTimes>
        )
        :
        (
          <FaBars onClick={()=>setIsOpen(!isOpen)} className='text-white ml-4 mt-2 text-xl md:hidden'/>
        )

       }
        </div>

      
        </nav>
    );
};

export default Header;