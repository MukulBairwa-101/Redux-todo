import React from 'react'
import { useDispatch } from "react-redux";
import {  removeTodo } from "../Redux/Actions";
import {MdDeleteOutline} from "react-icons/md";
const TodoList = (props) => {
    const dispatch = useDispatch();
    return (
<div>
        {props.todoList.map((item) => {
          return (
            <div className="todo">
             <p>{item.text}</p> 
              <button type="button"   onClick={() => dispatch(removeTodo(item))} className="btn btn-delete">
              <MdDeleteOutline /> 
                
                Delete
              </button>
            </div>
          );
        })}
      </div>
    )
}

export default TodoList;
