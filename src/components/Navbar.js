import React from 'react';
import { Link } from 'react-router-dom'

//Navbar component code
const Navbar = (props) => {

  return (
    <div className='navbar'>
      <h2 onClick={() => props.handleClick(false)}>
        <span className='logo'>ALBUMS LIST</span>
      </h2>
      <Link to={props.path}><button>{props.page}</button></Link>
    </div>
  )
}

export default Navbar
