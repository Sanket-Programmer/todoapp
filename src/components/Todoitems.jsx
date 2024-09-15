import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'

const Todoitems = ({text,id,isComplete,delTodo,toggle}) => {

  return (
    <div className='list'>
      <div onClick={()=>{toggle(id)}} className='todo_list'>
        <img src={isComplete ? tick:not_tick}/>
        <p style={isComplete ? {textDecoration:'line-through' , textDecorationThickness:'0.2vw' , opacity:'0.4'}: {textDecoration:'none'}}>{text}</p>
      </div>
      <img onClick={()=>{delTodo(id)}} className='delete' src={delete_icon}/>
    </div>
  )
}

export default Todoitems
