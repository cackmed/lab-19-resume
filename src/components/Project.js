import React from 'react';
import Proptypes from 'prop-types';


const Project = ({ name, type, tech, desc }) => (

  <>
    <h1>{name}</h1>
    <h2>{type}</h2>
    <p>{tech}</p>
    <p>{desc}</p>
  </>
);

Project.Proptypes = {
  name: Proptypes.string.isRequired,
  type: Proptypes.string.isRequired,
  tech: Proptypes.string.isRequired,
  desc: Proptypes.string.isRequired
};

export default Project;
