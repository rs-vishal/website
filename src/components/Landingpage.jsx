import React from 'react'
import Home from './Home';
import About from './About';
import TechStack from "./TechStack";
import MissionVison from "./MissionVison";
import Navbar from './Navbar';


function Landingpage() {
  return (
    <div>
        <Navbar/>
        <section id='home'>
            <Home/>
        </section>
        <section id='about'>
            <About/>
        </section>
        <section id='techstack'>
            <TechStack/>
        </section>
        <section id='missionvision'>
            <MissionVison/>
        </section>
    </div>
  )
}

export default Landingpage