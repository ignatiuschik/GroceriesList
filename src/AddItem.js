import React from 'react';
import './index.css';
import { FaPlus } from 'react-icons/fa'

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label className='addFormLabel' htmlFor="addItem">Add New Item</label>
        <input
            required
            id='addItem'
            type='text'
            autoFocus
            placeholder='Add Item'
            value= {newItem}
            onChange={(e) =>setNewItem(e.target.value)}
                       
        />
        <button 
            type='submit'
            aria-label='Add Item'
        >
            <FaPlus />
        </button>


    </form>
    
  )
}

export default AddItem