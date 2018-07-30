import React, { Component } from 'react';
import ArticleCard from './ArticleCard';
var url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=593001f60f42467ea12cf21c71d5f560'
class ArticleBlock extends Component {
    state = {
        articles: [] 
    }
    
    componentDidMount(){
        var fields; 
        fetch(
            url
          ).then(function(response){
            return response.json(); 
          }).then(function(myJson){
              let newsArticles = myJson.articles;
                fields = (<div key= '2'>
                  {newsArticles.map((article, index) =>{         
                return (<li key= {index}><ArticleCard  source= {article.source.name} title= {article.title} url = {article.urlToImage}/></li>)
            })} </div> )
              
          })
          console.log(fields); 
          this.setState({articles: fields});
    }
      
    render(){
       
        return (
            <div key= '1'>
                {this.state.articles}
                </div> 
        
    )}
}; 
export default ArticleBlock; 