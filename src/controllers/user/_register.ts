import axios from "axios";
import { _USER } from "../../utils/constant";
import { _setAUTH } from "../auth_TOKEN";


export const _register=(user:any)=>{
    axios.post(_USER.register,{
        username: user.username,
        email: user.email,
        password: user.password
    })
    .then(response=>{
        return _setAUTH(response.data.jwt)
    })
    .catch(error=>console.log(error))

    console.log('user_Registert')
}