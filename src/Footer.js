import './index.css';
import React from 'react'

function Footer({ length }) {

  return (
    <footer className='footer'>
      {length} {length === 1? "item": "items"} 
    </footer>
  )
}

export default Footer