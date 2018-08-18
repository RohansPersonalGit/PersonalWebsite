import React from 'react';
import './ArticleCard.css'; 
const ArticleCard = (props) => {  
        return (
            <div className= "ArticleCard">
                <p>{props.title}</p>
                <img src= {props.url} /> 
            </div>
        )

}
export default ArticleCard; 