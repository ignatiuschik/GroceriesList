import {FaTrashAlt} from 'react-icons/fa'
import React from 'react'

const Items = ({ item, handleCheck, handleDelete }) => {
  return (
    <li className='item' key={item.id}>
                <input 
                    type="checkbox" 
                    onChange={() => handleCheck(item.id)}
                    checked={item.checked}
                />
                <label 
                    onDoubleClick={() => handleCheck(item.id)}
                    style={(item.checked) ? {textDecoration:'line-through'}:null}
                > {item.item} </label>
                <FaTrashAlt 
                    onClick={() => handleDelete(item.id)}
                    role='button'
                    tabIndex={0}
                />
            </li>
  )
}

export default Items