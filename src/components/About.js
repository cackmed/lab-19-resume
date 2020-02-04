import React from 'react';
import Proptypes from 'prop-types';

const About = ({ aboutMe }) => (
  <>
    <p>{aboutMe}</p>
  </>
);

About.proptypes = {
  aboutMe: Proptypes.string.isRequired
};

export default About;
