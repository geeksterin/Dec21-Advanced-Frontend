import React from 'react'
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
        <Link to='/'>Home</Link> &emsp;
        <Link to='/contact'>Contact</Link> &emsp;
        <Link to='/contact/me'>Contact Me</Link>
    </nav>
  )
}

export default Navigation;