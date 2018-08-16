import React,{Component} from 'react';
import Todo from '../../components/Todo/Todo'; 

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
    state ={
        tasks: "",
        length: 0
    }
   
    
   submitData(event){
    var self = this; 
    event.preventDefault(); 
    var postListRef = firebase.database().ref('/Tasks/Rohan/'); 
    var newPostRef = postListRef.push();
    var newTask = new FormData(event.target); 
    console.log(newTask); 
    newPostRef.set({
        task: newTask
    });
    var len = self.state.length; 
    len = len+1; 
    var temp = (<li key= {len}><Todo task={newTask}/></li>); 
    this.setState({tasks: [...this.state.tasks, temp], length: len })
   
   }
   //form the array of TODO components in the component did MOunt cause you dont do that shit on an unmounted component
   componentDidMount(){
       var temp=[]; 
       var listRef = firebase.database().ref('/Tasks/Rohan/'); 
       listRef.once('value', data =>{
           //console.log(data.val().task);
           data.forEach(((child) => {
               temp.push(child.val()); 
           }))       
            
       }).then(() =>{
        
        var len = temp.length; 
         const finalTasks = (<div key="2">
             {temp.map((todoItem, index) => { 
                         console.log("ths"); 
 
                 return (<li key={index}><Todo task={todoItem.task}/></li>)
     })}
     </div>)
     console.log("this fuar"); 
     console.log(finalTasks)
     this.setState({tasks: finalTasks, length: len});
       }) 
       
        
   
}


    
    render(){
        return(
            <div key="1">                
                {this.state.tasks}
                <form onSubmit={this.submitData.bind(this)}>
            <input type="text"  />  
            <input type="submit" value="Submit"/>
            </form>
                </div>
        )
    }
};
export default TodoBlock; 