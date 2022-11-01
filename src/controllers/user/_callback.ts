import axios from "axios";
import { _USER } from "../../utils/constant";
import { _setAUTH } from "../auth_TOKEN";


export const _callback= ()=>{
    axios.post(_USER.callback,{
        identifier: "test",
        password: "testing" //need to change to input value
    })
    .then(response=>{
        return _setAUTH(response.data.jwt)
    })
    .catch(error=>console.log(error))

    console.log('user_LoggedIn')
}