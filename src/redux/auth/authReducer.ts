import {combineReducers} from "redux"
import loginReducer from "./login/loginReducer"


const authReducer = combineReducers({
    login: loginReducer,
})

export default authReducer