import './index.css';
import React from 'react'

function Header({ title }) {
  return (
    <header className='header'>
       {title}
    </header>
  )
}

Header.defaultProps = {title: "Default Title"};

export default Header