import React, { Component } from 'react';
import './ArticleBlock.css'; 
import ArticleModal from '../../components/ArticleModal/ArticleModal';
import ArticleCard from '../../components/ArticleCard/ArticleCard';
var url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=593001f60f42467ea12cf21c71d5f560'
class ArticleBlock extends Component {
    state = {
        articles: 1 
    }
    
    componentDidMount(){
        let self = this; 
        let fields= []; 
        fetch(
            url
          ).then(function(response){
            return response.json(); 
          }).then(function(myJson){
              let newsArticles = myJson.articles;
              fields = newsArticles.map((article)=>{
                  let articleState = {}; 
                  articleState.source = article.source.name; 
                  articleState.title = article.title;
                  articleState.link = article.url
                  articleState.description= article.description; 
                  articleState.urlToImage = article.urlToImage;
                  return articleState; 
              }) 
            self.setState({articles: fields});
          })
    }
    render(){
        let self = this; 
        let newsArticles = self.state.articles;
        console.log(newsArticles);
        if(newsArticles===1){
            return(
                <div className="ArticleBlock">
                </div>
            )
        }
        else
        {
            newsArticles.splice(3);
            return (
            <div key= '1'className="ArticleBlock">
                  {newsArticles.map((article, index) =>{ 
                      //let modal = (<ArticleModal desc = {article.description}/> );
                return (<li key= {index}><ArticleCard  link={article.link} desc={article.description}source= {article.source.name} title= {article.title} url = {article.urlToImage}/></li>)
            })} 
                </div> 
        
    )}}
}; 
export default ArticleBlock; 

