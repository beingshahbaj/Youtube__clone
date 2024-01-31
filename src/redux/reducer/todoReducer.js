import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "../Action/ActionType";

const initialState = [];

const todoReducer = (state = initialState, Action) => {
  switch (Action.type) {
    case ADD_TODO:
      return [...state, Action.payload];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== Action.payload);
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === Action.payload.id ? { ...todo, ...Action.payload } : todo
        ),
      };
    default:
      return state;
  }
};
export default todoReducer;
