import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';
import AddItem from './AddItem';
import { hasFormSubmit } from '@testing-library/user-event/dist/utils';

function App() {

   const [items, setItems] = useState(JSON.parse(localStorage.getItem('shopinglist')));

const [newItem, setNewItem] = useState("");

const addItem = (item) =>{
  const id = items.length ? items.length : 1;
  const myNewItem = {id, checked: false, item};
  const listItems = [...items, myNewItem]; 
  setItems(listItems);
  localStorage.setItem("shopinglist",JSON.stringify(listItems));
}

const handleSubmit = (e) =>{
  e.preventDefault();
  if (!newItem) return;
  addItem(newItem);
  setNewItem(''); 
}

const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item);
    setItems(listItems);
}

const handleDelete = (id) =>{
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("shopinglist",JSON.stringify(listItems));
}

  return (
    <div>
      <Header title = {"Groceries List "} />
      <AddItem 
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit={handleSubmit}
      />
      <Content 
        items = {items}
        handleDelete = {handleDelete}
        handleCheck = {handleCheck} 
      />
      <Footer length = {items.length}/>
    </div>

  );
}

export default App;
