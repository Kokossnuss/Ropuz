import axios from "axios";
import { _USER } from "../../utils/constant";
import { _setAUTH } from "../auth_TOKEN";


export const _callback=(user:any)=>{
    axios.post(_USER.callback,{
        identifier: user.username,
        password: user.password 
    })
    .then(response=>{
        _setAUTH(response.data.jwt)
        return 'succes'
    })
    .catch(error=>{
        console.log(error)
        console.log("crash")
        return 
    })
}