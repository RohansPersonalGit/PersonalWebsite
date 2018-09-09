    // import React,{Component} from 'react';
    import firebase from '../../services/firebase'
    // import Todo from '../../components/Todo/Todo'; 
    // import './TodoBlock.css'
    // class TodoBlock extends Component {






    //    ///ALL OG tasks show up as task.task.
    //    //all new tasks on input change show up as task and than after referesh are stored as task 




    // }

    //     render(){
    //         console.log('calledRender');
    //         let temp = this.state.tasks; 
    //         const finalTasks = (<div >
    //         {temp.map((todoItem, index) => { 
    //             console.log(todoItem); 
    //             return (<li key={todoItem.key}><Todo task={todoItem.task}/><button id={index} className="RemoveTodo" onClick={() => this.removeTodo(todoItem.key)}/></li>)
    // })}
    // </div>)
    //         return(
    //             <div >                
    //                 {finalTasks}
    //                 <form onSubmit={this.submitData.bind(this)}>
    //             <input   onChange={this.onInputChange} value = {this.state.query}/>  
    //             <input type="submit" value="Submit"/>
    //             </form>
    //                 </div>
    //         )
    //     }
    // };
    // export default TodoBlock; 
    import React from 'react';
    import PropTypes from 'prop-types';
    import { withStyles } from '@material-ui/core/styles';
    import List from '@material-ui/core/List';
    import ListItem from '@material-ui/core/ListItem';
    import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
    import ListItemText from '@material-ui/core/ListItemText';
    import Checkbox from '@material-ui/core/Checkbox';
    import IconButton from '@material-ui/core/IconButton';

    const styles = theme => ({
    root: {
    position: "relative",
    top:0,
    bottom: 0,
    left: 0,
    right: 100,
    width: '100%',
    maxWidth: 360,
     
    backgroundColor: theme.palette.background.paper,
    },
    });

    class TodoBlock extends React.Component {
    constructor(props){

    super(props); 
    this.state =  {
    checked: [0],
    user: props.user, 
    tasks: [],
    length: 0,
    query: ""
    }; 
    this.submitData = this.submitData.bind(this);
    this.onInputChange = this.onInputChange.bind(this); 
    }
    onInputChange(event){
    let newQuery = event.target.value; 
    this.setState({query: newQuery});
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
    } 
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


    handleToggle = value => () => {
    let oldtasks = this.state.tasks; 
    let newTasks = oldtasks.filter(task =>{
    return (task.key!==value)
    })
    this.setState({tasks:newTasks}); 
    let postlistref= firebase.database().ref('/Tasks/' + this.state.user )
    postlistref.child(value).set({
    task: null
    })
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
    newChecked.push(value);
    } else {
    newChecked.splice(currentIndex, 1);
    }
    this.setState({
    checked: newChecked,
    });
    };

    render() {
    const { classes } = this.props;
    let listTasks = this.state.tasks;
    console.log(listTasks); 
    return (
    <div className={classes.root}>
    <List>
    {listTasks.map(value => (
    <ListItem
    key={value.key}
    role={undefined}
    dense
    button
    onClick={this.handleToggle(value.key)}
    className={classes.listItem}
    >
    <Checkbox
    checked={this.state.checked.indexOf(value) !== -1}
    tabIndex={-1}
    disableRipple
    />
    <ListItemText primary={value.task} />
    <ListItemSecondaryAction>
    <IconButton aria-label="Comments">
    </IconButton>
    </ListItemSecondaryAction>
    </ListItem>
    ))}
    </List>
    <form onSubmit={this.submitData.bind(this)}>             
    <input   onChange={this.onInputChange} value = {this.state.query}/>  
    <input type="submit" value="Submit"/>
    </form>

    </div>
    );
    }
    }

    TodoBlock.propTypes = {
    classes: PropTypes.object.isRequired,
    };

    export default withStyles(styles)(TodoBlock);