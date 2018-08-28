import React,{Component} from 'react';

import Todo from '../../components/Todo/Todo'; 
import './TodoBlock.css'
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
    this.onInputChange = this.onInputChange.bind(this); 
    }
    
   removeTodo(arg){
    let postlistref= firebase.database().ref('/Tasks/Rohan/')
    postlistref.child(arg)
       let filtertasks = this.state.tasks
       let newTasks = filtertasks.splice(arg); 
       this.setState({tasks: newTasks});
       
   } 


   ///ALL OG tasks show up as task.task.
   //all new tasks on input change show up as task and than after referesh are stored as task 
   submitData(event){
    event.preventDefault(); 
    var data = this.state.query; 
    let postlistref= firebase.database().ref('/Tasks/Rohan/').push()
    postlistref.set({
        task: data
    }).then(()=>{
        var len = this.state.length; 
        len = len+1;
        let newData = new Object(); 
        newData.task = data; 
        let newKey = postlistref.key; 
        newData.key= newKey; 
        let taskData = this.state.tasks;
        taskData.push(newData); 
        this.setState({tasks: taskData, length: len, query: "" });
        this.setState();  

    })
 
   }
   //form the array of TODO components in the component did MOunt cause you dont do that shit on an unmounted component
   componentDidMount(){
       console.log("hsdfas"); 
    var temp=[]; 
    var listRef = firebase.database().ref('/Tasks/Rohan/'); 
    listRef.once('value', data =>{
    data.forEach(((child) => {
     let newTasks = new Object(); 
     newTasks.task = child.val().task; 
     newTasks.key= child.key; 
     temp.push(newTasks); }))
    }).then(() =>{   
    var len = temp.length; 
    var quer = this.state.query; 
    this.setState({tasks: temp, length: len, query: quer});
    }) 
       
        
   
}
onInputChange(event){
    let newQuery = event.target.value; 
    this.setState({query: newQuery});
  
}
    render(){
        console.log('calledRender');
        let temp = this.state.tasks; 
        const finalTasks = (<div >
        {temp.map((todoItem, index) => { 
            console.log(todoItem); 
            return (<li key={todoItem.key}><Todo task={todoItem.task}/><button id={index} className="RemoveTodo" onClick={() => this.removeTodo(index)}/></li>)
})}
</div>)
        return(
            <div >                
                {finalTasks}
                <form onSubmit={this.submitData.bind(this)}>
            <input   onChange={this.onInputChange} value = {this.state.query}/>  
            <input type="submit" value="Submit"/>
            </form>
                </div>
        )
    }
};
export default TodoBlock; 