import React from 'react';
import Todos from './Todos'
import FormTodo from './FormTodo'

class App extends React.Component{
   state = {
     todos : [
       
      ]
   } 
   deleteFunction = (id) =>{
    let newtodos =  this.state.todos.filter(todo =>{
      return todo.id !== id;
    });
    this.setState({
     todos : newtodos
    })
    }
    addTodoFunction = (todo) =>{
      todo.id = Math.random();
      let todoList = [...this.state.todos ,todo];
      this.setState({
        todos : todoList
      })

    }
   render(){
     return(
       <div className = "todo-app container">
          <h1 className = "center blue-text">Your Todo's</h1>
          <Todos todos = {this.state.todos} deleteFunction = {this.deleteFunction}/>
          <FormTodo addTodoFunction = {this.addTodoFunction}/>
       </div>
     );
   }
}

export default App;
