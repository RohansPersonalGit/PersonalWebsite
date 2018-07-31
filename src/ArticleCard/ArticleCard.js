import React from 'react';
import './ArticleCard.css'; 
const ArticleCard = (props) => {  
        return (
            <div className= "ArticleCard">
                <p>Source: {props.source}</p>
                <p>Title: {props.title}</p>
                <img src= {props.url} /> 
            </div>
        )

}
export default ArticleCard; 