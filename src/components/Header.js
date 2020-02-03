import React from 'react';
import Proptypes from 'prop-types';

const Header = ({ name, jobTitle, email, github, linkedin }) => (
  <>
    <h1>{name}</h1>
    <h2>{jobTitle}</h2>
    <p>{email}</p>
    <p>{github}</p>
    <p>{linkedin}</p>
  </>
);

Header.proptypes = {
  name: Proptypes.string.isRequired,
  jobTitle: Proptypes.string.isRequired,
  email: Proptypes.string.isRequired,
  linkedin: Proptypes.string.isRequired,
  github: Proptypes.string.isRequired
};

export default Header;

