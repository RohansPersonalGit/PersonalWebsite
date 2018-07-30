import React from 'react';

const ArticleCard = (props) => {  
        return (
            <div>
                <p>Source: props.source</p>
                <p>Title: props.title</p>
                <img src= {props.url} /> 
            </div>
        )

}
export default ArticleCard; 