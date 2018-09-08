import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (

    // <Link to='/about'>About</Link>  if use this move them behind contact
    <div class="text-right">
    <button><Link to='/'>Home</Link></button>
    <button><Link to='/contact'>Comments</Link></button>


    </div>
  );

};

export default Navigation;
