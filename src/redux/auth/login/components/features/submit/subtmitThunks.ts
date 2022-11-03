import { createAsyncThunk} from "@reduxjs/toolkit";
import { _USER } from "../../../../../../utils/constant";
import axios from "axios"


export const _signUpThunk= createAsyncThunk('submit/_signUpThunk', async(user:any)=>{ 
    const response = axios.post(_USER.register, {
        username: user.username,
        email: user.email,
        password: user.password
    }).then(response=>{return response.data.jwt})
    .catch(Error=>{throw Error})
    
    return await response
})

export const _logInThunk = createAsyncThunk('submit/_logInThunk', async(user:any)=>{

    const response = axios.post(_USER.callback, {
        identifier: user.username,
        password: user.password
    }).then(response=>{return response.data.jwt})
    .catch(Error=>{throw Error})

    return await response
})