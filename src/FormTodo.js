import React from 'react';

class FormTodo extends React.Component{
     state = {
         id : null,
         content : null
     }
      handleChange = (e)=>{
          this.setState({
              content:e.target.value
          })
      }
      handleSubmit = (e)=>{
        e.preventDefault();
          if(this.state.content){
          
          this.props.addTodoFunction(this.state);
          this.setState({
            content:''
        })
       } 
      }
     render(){
         return(
         <div>
            <form onSubmit = {this.handleSubmit}>
            <label>Ad new todo:</label>
            <input type = "text" onChange = {this.handleChange}  value = {this.state.content}></input>
            </form>
         </div>
         );
     }
}

export default FormTodo;