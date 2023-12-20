import { useState } from 'react'
import './Todo.css'
import { useRef } from 'react';
import { useEffect } from 'react';
import TodoItems from './TodoItems';
let count = 0;
const Todo = () => {
    //use state variable to store todo lists
    const [todos,setTodos] = useState([]);
    //input reference to the input field
    const inputRef = useRef(null);

    const add = () => {
        setTodos([...todos,{no:count++,text:inputRef.current.value,display:""}]);
        inputRef.current.value = "";
        localStorage.setItem("todos_count",count)
    }

    useEffect(()=>{
      setTodos(JSON.parse(localStorage.getItem("todos")))
      count = localStorage.getItem("todos_count")
    },[])

    useEffect(()=>{
        setTimeout(() => {
          console.log(todos);
        localStorage.setItem("todos",JSON.stringify(todos));
        }, 100);
    },[todos])
  return (
    <div className='todo'>
      <div className="todo-header">To-Do List</div>
      <div className='todo-add'>
        <input ref={inputRef} type='text' placeholder='Enter your task here' className='todo-input'/>
        <div onClick={()=>{add()}} className="todo-add-btn">ADD</div>
      </div>
      <div className="todo-list">
        {todos.map((item,index)=>{
            return <TodoItems key = {index} setTodos = {setTodos} no = {item.no} display={item.display} text = {item.text}/>
        })}
      </div>
    </div>
  )
}

export default Todo
