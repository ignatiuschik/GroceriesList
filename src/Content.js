import './index.css';
import React from 'react'
import ListItems from './ListItems';

function Content({ items, handleCheck, handleDelete }) {
    
  return (
    <main className='content'>
        {items.length ? (
            <ListItems 
                items = {items}
                handleDelete = {handleDelete}
                handleCheck = {handleCheck} 
            />
        ):(
            <p style={{marginTop:'2rem'}}> Your list is empty!</p>
        )}

    </main>
  )
}

export default Content