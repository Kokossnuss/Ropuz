import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { RootState } from "../../Store";
import axios from "axios";

interface loginState{
    new:boolean,
    url:string,
    user:user,
    jwt?:string,
}

type user={
    username?:String,
    email?:String,
    password?:String,
}

const initialState:loginState={
    new:false,
    url: "http://172.20.10.6:1337",
    user:{

    },
}

export const loginSlice= createSlice({
    name:"login",
    initialState,
    reducers:{
        newUser: state=>{
            state.new   =  true;
        },
        existingUser: state=>{
            state.new = false;
            
        },

        usernamest:(state,action:PayloadAction<String>)=>{
            state.user.username= action.payload;
        },
        passwordst:(state, action:PayloadAction<String>)=>{
                state.user.password= action.payload
        },
        emailst:(state, action:PayloadAction<String>)=>{
                state.user.email= action.payload
        },

        createUser: state=>{
            /*axios.post(state.url+"/api/auth/local/register",{
                username: state.user.username,
                email: state.user.email,
                password: state.user.password
            }).then(response=>{
               return state.jwt= response.data.jwt;
            }).catch(error=>{console.log(error)})*/
        },

        loginUser: state=>{
            /*axios
                .post(state.url+"/api/auth/local",{
                    identifier: state.user.username,
                    password: state.user.password
                }).then(response=>{return state.jwt=response.data.jwt})
                .catch(error=>console.log(error))*/
        }
    }
})

export const {newUser, existingUser,usernamest, passwordst, emailst, createUser, loginUser} = loginSlice.actions;

export const selectUser = (state:RootState) =>state.auth.login;

export default loginSlice.reducer