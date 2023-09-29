import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/header/header';
import TopContainer from './component/topcontainer/topcontainer.js';
import Skill from './component/skillContainer/skillContainer.js';
import Project from './component/project/project';
import Contact from './component/contact/contact';


function App() {

  return (
    <div className="App">
   <Header/>
   <TopContainer/>
   <Skill/>
   <Project/>
   <Contact/>

    </div>
  );
}
export default App;
