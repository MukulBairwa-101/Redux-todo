import todoReducer from "../Reducers/Reducer";
import darkModeReducer from "../Reducers/DarkModeReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    todoReducer,
    darkModeReducer
})

export default rootReducer;