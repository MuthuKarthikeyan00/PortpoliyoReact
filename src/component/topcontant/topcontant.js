import react from 'react';
import {Link} from 'react-scroll';
import './topcontant.css';

const topContant =()=>{
      return(


        <div className="topContant">
      <div    className="topContant__container">
                 
        <h1>Mr.Muthu Karthikeyan</h1>
        <p>A Professional Web Devloper</p>
        <a>
            <button className="topContant__Button1">
                Download CV
            </button>
        </a>
        <Link smooth={true} to="project" duration={200}>
           <button  className="topContant__Button2" >
               My Work
           </button>
        </Link>
      </div>
        </div>
      );
}

export default topContant;