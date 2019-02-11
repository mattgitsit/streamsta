import React from 'react';
import { Link } from 'react-router-dom';

import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Streamsta
      </Link>
      <div className="right menu">
        <Link to="/">
          <button className="ui black button">All Streams</button>
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
