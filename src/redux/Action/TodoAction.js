import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./ActionType";

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const editTodo = (update , todo) => {
  return {
    type: EDIT_TODO,
    payload:{update:update , todo:todo}
  };
};
