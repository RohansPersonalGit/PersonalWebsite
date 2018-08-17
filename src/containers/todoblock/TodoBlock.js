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
        tasks: [],
        length: 0,
        query: ""
    }
   constructor(props){
       super(props); 
    this.submitData = this.submitData.bind(this);
this.onInputChange = this.onInputChange.bind(this);     }
    
   submitData(event){
    event.preventDefault(); 
    const data = new FormData(event.target); 
    console.log(event.target.value); 
    var postListRef = firebase.database().ref('/Tasks/Rohan/'); 
    var newPostRef = postListRef.push();
    var newTask = new FormData(event.target); 
    console.log(event.target); 
    newPostRef.set({
        task: newTask
    });
    var len = this.state.length; 
    len = len+1; 
    var temp = (<li key= {len}><Todo task={newTask}/></li>); 
    this.setState({tasks: [...this.state.tasks, temp], length: len })
   
   }
   //form the array of TODO components in the component did MOunt cause you dont do that shit on an unmounted component
   componentDidMount(){
    var temp=[]; 
    var listRef = firebase.database().ref('/Tasks/Rohan/'); 
    listRef.once('value', data =>{
    data.forEach(((child) => {
      temp.push(child.val()); 
           }))           
      }).then(() =>{   
    var len = temp.length; 
    console.log("this fuar"); 
    this.setState({tasks: temp, length: len});
    }) 
       
        
   
}
onInputChange(event){
    this.setState({query : event.target.value});
}


    
    render(){
        var temp = this.state.tasks; 
        const finalTasks = (<div key="2">
        {temp.map((todoItem, index) => { 
            return (<li key={index}><Todo task={todoItem.task}/></li>)
})}
</div>)
        return(
            <div key="1">                
                {finalTasks}
                <form onSubmit={this.submitData.bind(this)}>
            <input  type={this.state.query} onChange={this.onInputChange.bind(this)}/>  
            <input type="submit" value="Submit"/>
            </form>
                </div>
        )
    }
};
export default TodoBlock; 