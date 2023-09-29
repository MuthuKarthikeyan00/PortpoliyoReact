import react from 'react';
import imm from "../../assert/stangroup.jpg"
import ProjectContainer from "../projectContainer/projectContainer.js";
import {Element} from 'react-scroll';
import "./project.css"




const Project=()=>{

    const project =
    [
        {
            image:imm,
            link:"www.google.com",
            disc:"this is ab wondreful appliction eajfsdbkjws jkleqbdkjb",
            name:"first"
        },
        {
            image:imm,
            link:"www.google.com",
            disc:"this is ab wondreful appliction eajfsdbkjws jkleqbdkjb",
            name:"first"
        },
        {
            image:imm,
            link:"www.google.com",
            disc:"this is ab wondreful appliction eajfsdbkjws jkleqbdkjb",
            name:"first"
        },
        {
            image:imm,
            link:"www.google.com",
            disc:"this is ab wondreful appliction eajfsdbkjws jkleqbdkjb",
            name:"first"
        },
        {
            image:imm,
            link:"www.google.com",
            disc:"this is ab wondreful appliction eajfsdbkjws jkleqbdkjb",
            name:"first"
        },
        {
            image:imm,
            link:"www.google.com",
            disc:"this is ab wondreful appliction eajfsdbkjws jkleqbdkjb",
            name:"first"
        },



    ]

 

    return(
       <Element name='project' className="projectContainer">
            <div className="project__tit">
           <h1>Projects</h1>
           <p>that project's are mostly devloped on react, nodeJS,materialUI,Bootstrap and i was use CSS3 to creact the project outlook</p>
          </div>
          <div className="project__fun">
             {project.map((project,index)=>{
      return  <ProjectContainer key={index} link={project.link} name={project.name} disc={project.disc} immm={project.image} />
             }) }
  
          </div>
       </Element>
    );
}

export default Project;