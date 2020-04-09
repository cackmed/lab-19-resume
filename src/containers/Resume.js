import React, { Component } from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Project from '../components/Project';
import Tech from '../components/Tech';
import data from '../../resume';



export default class Resume extends Component {
  render() {
    return (
      <>
        <Header name={data.header.name} jobTitle={data.header.jobTitle} email={data.header.email}
          github={data.header.github}
          linkedin={data.header.linkedin}/>
        <About aboutMe={data.AboutMe}/>
        <Tech languages={data.tech.languages}
          frontEnd={data.tech.frontEnd}
          backEnd={data.tech.backEnd}
          databases={data.tech.databases}
          tools={data.tech.tools}
          other={data.tech.other}
        />
        <Project name={data.anteUp.name} type={data.anteUp.type} tech={data.anteUp.tech} desc={data.anteUp.desc}/>
        <Project name={data.rogueLike.name} type={data.rogueLike.type} tech={data.rogueLike.tech} desc={data.rogueLike.desc}/>  
      </>
    );
  }
}
