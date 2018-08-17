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
    this.onInputChange = this.onInputChange.bind(this); 
    }
    
   submitData(event){
    event.preventDefault(); 
    var data = this.state.query; 
    var postListRef = firebase.database().ref('/Tasks/Rohan/'); 
    var newPostRef = postListRef.push();
    newPostRef.set({
        task: data
    }).then(()=>{
        var len = this.state.length; 
        len = len+1; 
        var taskData = this.state.tasks; 
        taskData.push({task: data}); 
        console.log(taskData); 
        this.setState({tasks: taskData, length: len, query: "" })
    });

    
   
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
    var quer = this.state.query; 
    
    console.log("this fuar"); 
    this.setState({tasks: temp, length: len, query: quer});
    }) 
       
        
   
}
onInputChange(event){
    var og = this.state.query; 
    console.log(og); 
    var newQuery = event.target.value; 
    console.log(newQuery);

    this.setState({query: event.target.value});
    console.log(this.state.query)
    console.log(this.state.tasks);
}


    
    render(){
        var temp = this.state.tasks; 
        console.log(temp); 
        const finalTasks = (<div >
        {temp.map((todoItem, index) => { 
            console.log(todoItem)
            return (<li key={index}><Todo task={todoItem.task}/></li>)
})}
</div>)
        return(
            <div >                
                {finalTasks}
                <form onSubmit={this.submitData}>
            <input   onChange={this.onInputChange} value = {this.state.query}/>  
            <input type="submit" value="Submit"/>
            </form>
                </div>
        )
    }
};
export default TodoBlock; 