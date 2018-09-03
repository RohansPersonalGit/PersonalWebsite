import React,{Component} from 'react';
import firebase from '../../services/firebase'
import Todo from '../../components/Todo/Todo'; 
import './TodoBlock.css'
class TodoBlock extends Component {
   
   constructor(props){
       
       super(props); 
       this.state =  {
        user: props.user, 
        tasks: [],
        length: 0,
        query: ""
    }; 
    this.submitData = this.submitData.bind(this);
    this.onInputChange = this.onInputChange.bind(this); 
    }
    
   removeTodo(arg){
    let oldtasks = this.state.tasks; 
    let newTasks = oldtasks.filter(task =>{
        return (task.key!==arg)
    })
    this.setState({tasks:newTasks}); 
    let postlistref= firebase.database().ref('/Tasks/' + this.state.user )
    postlistref.child(arg).set({
        task: null
    })
    // postlistref.child(arg)
    //    let filtertasks = this.state.tasks
    //    let newTasks = filtertasks.splice(arg); 
    //    this.setState({tasks: newTasks});
       
   } 


   ///ALL OG tasks show up as task.task.
   //all new tasks on input change show up as task and than after referesh are stored as task 
   submitData(event){
    event.preventDefault(); 
    var data = this.state.query; 
    let postlistref= firebase.database().ref('/Tasks/' + this.state.user).push()
    postlistref.set({
        task: data
    }).then(()=>{
        var len = this.state.length; 
        len = len+1;
        let newData = {}; 
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
    var listRef = firebase.database().ref('/Tasks/' + this.state.user); 
    listRef.once('value', data =>{
    data.forEach(((child) => {
     let newTasks = {}; 
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
            return (<li key={todoItem.key}><Todo task={todoItem.task}/><button id={index} className="RemoveTodo" onClick={() => this.removeTodo(todoItem.key)}/></li>)
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