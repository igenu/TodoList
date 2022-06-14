import React, { useState } from 'react';
import ListItem from './todo/ListItem';
import './style.css';

export default function App() {
  const [todoName, setTodoName] = useState(""); 
  const [list, setList] = useState([]);  

  const updateTodoName = (e) => {
    setTodoName(e.target.value);
  };

  const addTodo = () =>{
    setList([...list, 
      {
        name: todoName,
        completed: false
      }
    ]);
    setTodoName("");
  };

  const onDone = (item) => {
    let newList = list.map(listItem => {
      if(listItem.name === item.name){
        return {...listItem, completed: !listItem.completed };
      }
      return listItem;
    });
    console.log(item);

    setList(newList);

  };
  const onDelete = (item) => {
    let newList = list.filter(listItem => {
      if(listItem.name === item.name){
        return false;     
      }
      return true;
    });
    console.log(item);

    setList(newList);

  };
  
  return (
    <div className=''>
    <div className="App">
      <div className='caption'>
        <h1>TODO LIST</h1>
        <div className='header'>
        <input
          type="text"
          placeholder='Add your todo value'
          value={todoName}
          onChange={updateTodoName}
          className='input-t'
        />

        <button className='addBtn' onClick={addTodo}>Add</button>
        </div>
        {list.map(item => (
          <ListItem obj ={item} onDone={onDone} onDelete={onDelete} />
        ))}
      </div>
    </div>
    </div>
  );
}