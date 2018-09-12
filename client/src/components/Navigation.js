import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (

    // <Link to='/about'>About</Link>  if use this move them behind contact
  <div className="icons">
  <button type="button" className="home"><Link to="/"><i className="fas fa-home"></i></Link></button>
  <button type="button" className="comment"><Link to="/contact"><i className="fas fa-comments"></i></Link></button>
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
