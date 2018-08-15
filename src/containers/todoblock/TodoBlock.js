import React,{Component} from 'react';
const firebase = require("firebase");

const config = {
    apiKey: "*****",
    authDomain: "****",
    databaseURL: "https://socialstudent-593f2.firebaseio.com",
    projectId: "socialstudent-593f2",
    storageBucket: "socialstudent-593f2.appspot.com",
    messagingSenderId: "****"
  };



firebase.initializeApp(config);
//REMEMBER YOU ARE USEING FIREBASE NOT FIRESTORE CHECK FIRESASE FOR MROE INFO
class TodoBlock extends Component {
    
   submitData(event){
    event.preventDefault(); 
    var postListRef = firebase.database().ref('/Tasks/Rohan/'); 
    var newPostRef = postListRef.push();
    newPostRef.set({
        task: "lol"
    });
       
   
   }
   componentDidMount(){
       
   }


    
    render(){
        return(
            <div>
                <form onSubmit={this.submitData}>
            <input type="text"  />  
            <input type="submit" value="Submit"/>
            </form>
                </div>
        )
    }
}
export default TodoBlock; 