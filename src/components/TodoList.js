import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addTodo, deleteTodo, editTodo } from "../redux/Action/TodoAction"





const Todo = () => {
  const [todo, setTodo] = useState("");
  const [placeholder, setPlaceholder] = useState("Add todo");
  const [color, setcolor] = useState("black");
  
  const todoList = useSelector((state) => state.todos);

  const inputStyle = {
    "::placeholder": {
      color: color,
    },
  };

  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    if (todo.length === 0) {
      setPlaceholder("add some text");
      setcolor("Red")
      return;
    }
    let obj = {
      id: crypto.randomUUID(),
      todo: todo,

    };

    dispatch(addTodo(obj));
    setTodo("");
    setPlaceholder("Add todo");
     setcolor("black");
  }

  return (
    <div className="todo w-[50%] h-[80%]  bg-emerald-500 m-20 flex p-5 flex-col ">
      <form
        className=" w-[100%] flex h-10 justify-between  "
        onSubmit={handleSubmit}
      >
        <input
          className=" px-5 w-[75%]"
          style={inputStyle}
          type="text"
          placeholder={placeholder}
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className=" bg-slate-600 w-[20%]" type="submit  ">
          Add
        </button>
      </form>

      <div>
        {todoList.length > 0 &&
          todoList.map((todo, index) => (
            <div className="flex items-center justify-between w-[100%] p-5  ">
              <p>
                {index + 1}
                {todo.todo}
              </p>
              <div className="button flex gap-1">
                <button
                  className="w-fit bg-slate-500 p-2"
                  onClick={() => dispatch(deleteTodo(todo.id))}>
                  delete todo
                </button>
                <button
                  className=" bg-slate-600 w-fit p-2 r "
                  onClick={() => dispatch(editTodo(todo.id))}
                >
                  edit todo
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Todo;
