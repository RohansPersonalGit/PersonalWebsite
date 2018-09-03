import React from 'react';
import './ArticleCard.css'; 
const ArticleCard = (props) => {  
        return (
            <div className= "ArticleCard">
            {props.button}
                <p>{props.title}</p>
                <img alt= "" src= {props.url} /> 
            </div>
        )

}
export default ArticleCard; 