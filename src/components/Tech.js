import React from 'react';
import Proptypes from 'prop-types';

const Tech = ({ languages, frontEnd, backEnd, databases, tools, other }) => (
  <>
    <p>{languages}</p>
    <p>{frontEnd}</p>
    <p>{backEnd}</p>
    <p>{databases}</p>
    <p>{tools}</p>
    <p>{other}</p>
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
