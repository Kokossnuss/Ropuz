import {combineReducers} from "redux"
import loginReducer from "./login/loginSlice"


const authReducer = combineReducers({
    login: loginReducer,
})

export default authReducer