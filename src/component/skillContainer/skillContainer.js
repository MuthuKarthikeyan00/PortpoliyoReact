import react from 'react';
import im from '../../assert/chess.jpg';
import {Element} from 'react-scroll';
import "./skillContainer.css";

import LinearProgress from '@material-ui/core/LinearProgress';



const Skill=()=>{

    return(
        <Element className="skill__container" id="skill">
            <div className="skill__containerIMG">
              <img src={im} alt="img"></img>
            </div>
            <div className="skill__head">
                <h1>SKILL SET</h1>
                <div className="skill__name">
                   <h5>React JS</h5>
                    <div className="skill__bar skill__bar1">
                      <LinearProgress variant='determinate' value={50}/>
                    </div>
                </div>

                <div className="skill__name">
                   <h5>NODE JS</h5>
                    <div className="skill__bar skill__bar2">
                      <LinearProgress variant='determinate' value={60}/>
                    </div>
                </div>

                <div className="skill__name">
                   <h5>Java</h5>
                    <div className="skill__bar skill__bar3">
                      <LinearProgress variant='determinate' value={40}/>
                    </div>
                </div>

                <div className="skill__name">
                   <h5> HTML5,CSS3,JavaScript</h5>
                    <div className="skill__bar skill__ba4">
                      <LinearProgress variant='determinate' value={80}/>
                    </div>
                </div>

                <div className="skill__name">
                   <h5> SQL,MongoDB</h5>
                    <div className="skill__bar skill__bar5">
                      <LinearProgress variant='determinate' value={90}/>
                    </div>
                </div>

                <div className="skill__name">
                   <h5> Python</h5>
                    <div className="skill__bar skill__bar6">
                      <LinearProgress variant='determinate' value={100}/>
                    </div>
                </div>

            </div>

        </Element>

    );
}

export default Skill;