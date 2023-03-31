import './App.css';
import { useState } from 'react';
import { FiTrash2,FiEdit3,FiDelete} from "react-icons/fi";
 

function App() {

const [todoList,settodoList]=useState ([])

const[inputValue,setInputValue]=useState('')
const[inputDate,setInputDate]=useState('')
const[editIndex,setEditIndex]=useState()

const[editMode,setEditMode]=useState(false)

const listAddFunction=()=>{
  let copyTodoList=[...todoList]
  copyTodoList.push(inputValue+""+inputDate)

  settodoList(copyTodoList)
  setInputValue(" ")
  setInputDate(" ")
  
}
const delFunction=(index)=>{
  let copyTodoList=[...todoList]
  copyTodoList.splice(index,1)
  settodoList(copyTodoList)
}

const delall=(index)=>{
  let copyTodoList=[...todoList]
  copyTodoList.splice(index,100)
  settodoList(copyTodoList)
}
const editFunction=(item,index)=>{
  setInputValue(item)
  setEditIndex(index)
  setEditMode(true)
  
}

const updateTodoList=()=>{
  let copyTodoList=[...todoList]
  copyTodoList[editIndex]=inputValue
  settodoList(copyTodoList)
  setInputValue("")
  setEditMode(false)
}

  return (
    <body>
    <div className='App'>
    
<h3>React Js ToDo App</h3>
<h1>Add Your Tasks</h1>
<div className='input'>
    <input style={{width: "200px"}} type="text" value={inputValue} onChange={(event)=>{
      setInputValue(event.target.value)
    }} /> <input style={{width: "112px"}} type="date" value={inputDate} onChange={(event)=>{
      setInputDate(event.target.value)
    }} /> 
    <span>
    {
      editMode ?
    <button onClick={updateTodoList}>Update</button>
    :
    <button onClick={listAddFunction}>Add</button>
  }
  <button style={{backgroundColor:' rgb(252, 94, 94)',marginLeft:'2'}} onClick={()=>delall()} ><FiTrash2/></button>
  </span>
</div>

    {todoList.map((item,index)=>{
      return <div className='bodySectionFlex'  >
       <div className='bodySection' key={index}>
        <div className='bodySectionValue'>{index+1} ) {item}</div>
        <div className='bodySectionbutton'>
        <button style={{backgroundColor:'rgb(100, 226, 96)'}} onClick={()=>editFunction(item,index)} ><FiEdit3/></button>
        <button style={{backgroundColor:'rgb(255, 73, 73)',marginLeft:'5px'}} onClick={()=>delFunction(index)} ><FiDelete/></button>
        </div>  
       </div>
       </div>
    })}
    
    
    </div>
    </body>
  );
}

export default App;
