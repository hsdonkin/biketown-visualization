import React from 'react';
import swoosh from './../assets/swoosh.svg';

const Navbar = () => {
  return (
    <nav className={'navbar'}>
      <span>
        <a href="https://www.biketownpdx.com/">
          <h1>
            BIKETOWN
            <img className={'swoosh-logo'} src={swoosh} alt="Swoosh" />
          </h1>
        </a>
      </span>
    </nav>
  );
};

export default Navbar;
