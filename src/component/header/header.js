import React from 'react';
import "./header.css";
import {Link} from 'react-scroll';
import PoPup from './popUP.js';

const header=()=>{
    

    const clk =()=>{
      prompt("Phone:");
    }






    return(
    
    <div className="header">

       <div className="header__left">
           <h1>
               Devlop<span>er</span>
           </h1>
       </div>
       <div className="header__right">
           <Link to="about" smooth={true} duration={500}>
           
           <h4>About Me</h4>
           
           </Link>
           <Link to="skill" smooth={true} duration={500}>
           
           <h4>Skills</h4>
           
           </Link>
           <Link to="project" smooth={true} duration={500}>
           
           <h4>Project</h4>
           
           </Link> 
           <Link to="experience" smooth={true} duration={500}>
           
           <h4>Experience</h4>
           
           </Link> 
           <Link to="contact" smooth={true} duration={500}>
           
           <h4>Contact</h4>
           
           </Link>
          
      
        
               
           <button onClick={clk}  className='header__rightButton'>Join With Me</button>
           
        
         
       </div>

    </div>);
} 


export default header;