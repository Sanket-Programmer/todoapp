import React, { useEffect, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import Todoitems from './Todoitems'
import { useRef } from 'react'

const Todo = () => {

  const [todoList,setTodoList] = useState(localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[]);
  
  const inputRef = useRef();

  const add = () =>{
     const inputText = inputRef.current.value.trim();
    if (inputText === ""){
      return null;
    }
     const newTodo = {
      id:Date.now(),
      text: inputText,
      isComplete: false,
     } 
     setTodoList((prev)=>[...prev, newTodo]);
     inputRef.current.value = "";
  }

  const delTodo = (id) =>{
     setTodoList((prevTodos)=>{
        return prevTodos.filter((todo)=> todo.id !== id)
     })
  }

  const toggle = (id) => {
    setTodoList((prevTodos)=>{
      return prevTodos.map((todo)=>{
        if(todo.id === id){
          return {...todo,isComplete: !todo.isComplete}
        }
        return todo
      })
    })
  }

  useEffect(()=>{
   localStorage.setItem("todos",JSON.stringify(todoList));
  },[todoList])
  
  return (
    <div>
    <div className='title'>
      <img src={todo_icon}/>
      <h1>To-Do List</h1>
    </div>
      <div className='input'>
        <input ref={inputRef} className='input_text' type='text' placeholder='Add your task'/>
        <button onClick={add} className='btn'>Add</button>
      </div>
      {todoList.map((item,index)=>{
          return <Todoitems key = {index} text={item.text} id={item.id} isComplete={item.isComplete} delTodo={delTodo} toggle={toggle}/>
      })}
      </div>
  )
}

export default Todo
