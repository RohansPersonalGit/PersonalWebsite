import React, { Component } from 'react';
import './App.css';
import TodoBlock from './containers/todoblock/TodoBlock'; 
import Weather from './containers/Weather/Weather';
import  { auth, provider } from './services/firebase'
import ArticleBlock from './containers/articleblock/ArticleBlock'
class App extends Component {
  constructor(props){
    super(props); 
    this.state={
      user: null
    }
    this.login = this.login.bind(this); // <-- add this line
    this.logout = this.logout.bind(this); // <-- add this line
  }
  handleChange(e) {
    /* ... */
  }
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } 
    });
  }
    // ...
  logout() {
    auth.signOut()
    .then(() => {
      this.setState({
        user: null
      });
    });
    // we will add the code for this in a moment, but need to add the method now or the bind will throw an error
  }
  login() {
    auth.signInWithPopup(provider) 
      .then((result) => {
        const user = result.user;
        console.log(user); 
        this.setState({
          user
        });
      });
  }
  
  render() {

   
    return (
      
      <div className="App">
      {this.state.user ?  <div><header className="App-header">
      <img src={this.state.user.photoURL} className="Profile-Photo" />
          <h1 className="App-title">SocialStudent</h1>
          <button onClick={this.logout}>Log Out</button>                
        </header>
       <ArticleBlock/>
        <Weather/>
        <TodoBlock user= {this.state.user.uid} />
        </div> : 
          <header className="App-header">
          <h1 className="App-title">SocialStudent</h1>
          <button onClick={this.login}>Log In</button>                
          </header>
        }
        
      </div>
    );
  }
}

export default App;
