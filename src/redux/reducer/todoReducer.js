import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "../Action/ActionType";

const initialState = [];

const todoReducer = (state = initialState, Action) => {
  switch (Action.type) {
    case ADD_TODO:
      return [...state, Action.payload];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== Action.payload);
    case EDIT_TODO:
      let arr = [];
      for (let t of state) {
        if (t.id !== Action.payload.update) {
          arr.push(t);
        } else if (t.id === Action.payload.update) {
          arr.push({ id: Action.payload.update, todo: Action.payload.todo });
        }
      }

      return arr;

    default:
      return state;
  }
};
export default todoReducer;
