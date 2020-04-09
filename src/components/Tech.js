import React from 'react';
import Proptypes from 'prop-types';

const Tech = ({ languages, frontEnd, backEnd, databases, tools, other }) => (
  <>
    <p>Languages:{languages}</p>
    <p>Front-End:{frontEnd}</p>
    <p>Back-End:{backEnd}</p>
    <p>Databases{databases}</p>
    <p>Tools:{tools}</p>
    <p>other:{other}</p>
  </>
);

Tech.proptypes = {
  languages: Proptypes.string.isRequired,
  frontEnd: Proptypes.string.isRequired,
  backEnd: Proptypes.string.isRequired,
  databases: Proptypes.string.isRequired,
  tools: Proptypes.string.isRequired,
  other: Proptypes.string.isRequired,
};

export default Tech;
