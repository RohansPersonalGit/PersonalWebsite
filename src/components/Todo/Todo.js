import React from 'react'; 
const Todo = (props) =>{
    return (
        <div className = "Todo">
            <p className="TodoContent">{props.task}</p>
        </div>
    )
}
export default Todo; 