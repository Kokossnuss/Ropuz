import { combineReducers } from "redux";
import logintypeReducer from "./components/features/logintype/logintypeSlice"
import submitReducer from "./components/features/submit/submitSlice"
import userReducer from "./components/features/user/userSlice"

const loginReducer = combineReducers({
    type: logintypeReducer,
    submit: submitReducer,
    user: userReducer
})

export default loginReducer