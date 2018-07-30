import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Weather from './Weather/Weather';
import ArticleBlock from './ArticleCard/ArticleBlock'
class App extends Component {
 
  
  render() {

   
    return (
      
      <div className="App">
      
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Rohan's One Stop Shop</h1>
        </header>
        <Weather/>
        <ArticleBlock/>
        
      </div>
    );
  }
}

export default App;
