import React from 'react';
import Proptypes from 'prop-types';

const About = ({ aboutMe }) => (
  <>
    <p>About: {aboutMe}</p>
  </>
);

About.proptypes = {
  aboutMe: Proptypes.string.isRequired
};

export default About;
