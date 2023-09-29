import react from 'react';
import './topcontainer.css';
import TopContant from '../topcontant/topcontant.js';
import {Element} from "react-scroll";

const topContainer=()=>{
    return(

      <Element className="topContainer" name="about">
      <TopContant/>
      </Element>

    );
}


export default topContainer;