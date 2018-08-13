import React,{Component} from 'react';
const firebase = require("firebase");

const config = {
    apiKey: "AIzaSyDKc6_TFhdiOJqAsda5qj77ddBG2G6Z25o",
    authDomain: "socialstudent-593f2.firebaseapp.com",
    databaseURL: "https://socialstudent-593f2.firebaseio.com",
    projectId: "socialstudent-593f2",
    storageBucket: "socialstudent-593f2.appspot.com",
    messagingSenderId: "155926944573"
  };



firebase.initializeApp(config);
//REMEMBER YOU ARE USEING FIREBASE NOT FIRESTORE CHECK FIRESASE FOR MROE INFO
class TodoBlock extends Component {
   submitData(event){
       event.preventDefault(); 
       firebase.database().ref('/Users/Rohan/Tasks').set({
           firstName: event
       })
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