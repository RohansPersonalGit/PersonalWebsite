import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import {init as firebaseInit} from 'javascripts/firebase'
import TodoBlock from './containers/todoblock/TodoBlock'; 
import Weather from './containers/Weather/Weather';
import ArticleBlock from './containers/articleblock/ArticleBlock'
class App extends Component {
 
  
  render() {

   
    return (
      
      <div className="App">
      
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">SocialStudent</h1>
        </header>
        <Weather/>
        <TodoBlock/>
        <ArticleBlock/>
      </div>
    );
  }
}

export default App;
