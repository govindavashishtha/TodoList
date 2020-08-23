import React from 'react';

 const Todos = ({todos , deleteFunction})=>{
    const todoList = todos.length ? (
        todos.map(todo =>{
            return (
             <div className = "collection-item" key = {todo.id}>
               <span>{todo.content}
               <button onClick = {() => deleteFunction(todo.id)}>delete</button>
               </span>
               
             </div>
                
            );
        })
    ):(
        <div className = "center container">You have no todo's left ,thumbs up</div>
    )
    return(
      <div className="todoscollection container">
          {todoList}
      </div>
    );
}

export default Todos;

