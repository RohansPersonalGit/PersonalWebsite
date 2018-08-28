import React from 'react'; 
import Hoc from '../../hoc/Hoc'; 
const Todo = (props) =>{
    return (
        <div className = "Todo">
            <p className="TodoContent">{props.task}</p>
        </div>
    )
}
export default Hoc(Todo); 