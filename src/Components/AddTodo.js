import React, { useState } from "react";
import { addTodo } from "../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "./TodoList";
const AddTodo = ({invertMode}) => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const todosList = useSelector((state) => state.todoReducer.TODOS);
  const handleAddclick = () => {
    if(todo!==''){

      dispatch(addTodo(todo));
    }
    setTodo("");
  };
  return (
    <div className="todo-container" >
      <div className={ invertMode? 'add-todowrapper dark ':'add-todowrapper light'} >
          <h2>Task Manager</h2>
          <div>

        <input
          type="text"
          placeholder="Add your Task"
          name="todo"
          value={todo}
          className="todo-input"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={() => handleAddclick()} className="btn">ADD TODO</button>
          </div>
      </div>
      <TodoList todoList={todosList} />
      
    </div>
  );
};

export default AddTodo;
