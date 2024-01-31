import { createStore , combineReducers , applyMiddleware} from "redux";
import todoReducer from "./reducer/todoReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    todos: todoReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;