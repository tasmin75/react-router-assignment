import React from 'react';
import {Link} from 'react-router-dom';
import style from './Navbar.module.css'

function Navbar() {
  return (
    <div className={style.navbar}>
     <h2>Logo</h2>
     <div>
      <Link to='/'>Home</Link>
      <Link to='/contact'>Contact</Link>
     </div>
    </div>
  );
}

export default Navbar;