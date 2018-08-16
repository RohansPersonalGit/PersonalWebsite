import React from 'react'; 
import './Todo.css'
const Todo = (props) =>{
    return (
        <div className = "Todo">
            <p>{props.task}</p>
        </div>
    )
}
export default Todo; 