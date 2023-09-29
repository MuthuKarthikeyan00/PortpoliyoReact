import React from 'react';
import "./contact.css";
import {Element} from 'react-scroll';
import {IconButton} from '@material-ui/core';
import {Facebook,Instagram,LinkedIn} from '@material-ui/icons';

const Contact=()=>{

    return(
    
    <Element name="contact" className="Contact">
      <h2>Contact</h2>
      <div  className="Contact__container">
       
        <h4>Githup :<span>muthukarthikeyan00</span></h4>
        <h4>Email :<span>muthukarthikeyan00@gmail.com</span></h4>
      
      <div  className="Contact__icon">
           <a href="">
               <IconButton>
               <LinkedIn/>
               </IconButton>
           </a>
           <a href="">
               <IconButton>
               <Instagram/>
               </IconButton>
           </a>
           <a href="">
               <IconButton>
               <Facebook/>
               </IconButton>
           </a>
      </div>
      </div>

    </Element>
    );
} 


export default Contact;