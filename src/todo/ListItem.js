import React from 'react'

export default function ListItem(props) {
  return (
    <div className={props.obj.completed && "completed"}>
        <div className='header1'>
            <p>{props.obj.name}</p>
            <button onClick={() => props.onDone(props.obj)}>mark as done</button>
            <button className='' onClick={() => props.onDelete(props.obj)}>Delete</button>
        </div>
    </div>
  );
}
