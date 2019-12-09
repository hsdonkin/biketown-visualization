import React from 'react';
import swoosh from './../assets/swoosh.svg';

const Navbar = () => {
  return (
    <nav className={'navbar'}>
      <span>
        <h1>
          BIKETOWN
          <img className={'swoosh-logo'} src={swoosh} alt="Swoosh" />
        </h1>
      </span>
    </nav>
  );
};

export default Navbar;
