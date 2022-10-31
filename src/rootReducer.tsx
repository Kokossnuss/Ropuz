import {combineReducers} from "redux"
import counterReducer from "./slices/counterSlice";
import loginReducer from "./slices/loginSlice"



const rootReducer = combineReducers({
    counter: counterReducer,
    login: loginReducer,
})

export default rootReducer
