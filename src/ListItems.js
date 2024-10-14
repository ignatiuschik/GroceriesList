import React from 'react'
import Items from './Items'

function ListItems({ items, handleCheck, handleDelete }) {
  return (
    <ul>
        {items.map((item) => (
            <Items 
                handleCheck={handleCheck}
                handleDelete={handleDelete} 
                item={item}   
            />
        ))}
    </ul>
  )
}

export default ListItems