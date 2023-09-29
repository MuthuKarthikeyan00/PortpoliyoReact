import react, { useState } from 'react';
import Project from '../project/project';
import './projectContainer.css';

const ProjectContainer =({link,name,disc,immm})=>{

 const [show,setShow]=useState(false);


    return(

       <a  href={link}>

        <div className="project" onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)} >
            { show ?(
                    <div className="project__contant" >
                    <h4>{name}</h4>
                    <p>{disc}</p>
                    </div>
            ):(<img src={immm} alt='img'></img>)}
       </div>
       </a>
    );
}

export default ProjectContainer;