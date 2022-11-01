import axios from "axios";
import { _USER } from "../../utils/constant";


export const _register=()=>{
    axios.post(_USER.register,{
        //post User Data
    })
    .then(response=>{
        return response.data.jwt
    })
    .catch(error=>console.log(error))

    console.log('user_Registert')
}