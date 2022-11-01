import axios from "axios";
import { _USER } from "../../utils/constant";
import { _setAUTH } from "../auth_TOKEN";


export const _callback=(user:any)=>{
    axios.post(_USER.callback,{
        identifier: user.username,
        password: user.password 
    })
    .then(response=>{
        return _setAUTH(response.data.jwt)
    })
    .catch(error=>console.log(error))

    console.log('user_LoggedIn')
}