import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (

    // <Link to='/about'>About</Link>  if use this move them behind contact
  <div className="navbar">
  <Link to="/">Home</Link>

      <Link to="/contact">Comments</Link>
    </div>


  );

};

export default Navigation;


// <div className="text-right">
// <button><Link to='/'>Home</Link></button>
// <button><Link to='/contact'>Next Events</Link></button>
//
//
// </div>
