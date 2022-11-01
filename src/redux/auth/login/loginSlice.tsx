import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { RootState } from "../../Store";

interface loginState{
    new:boolean,
    user:user,
}

type user={
    username:string|null,
    email?:string,
    password?:string,
}

const initialState:loginState={
    new:false,
    user:{
        username: null,
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

        username:(state,action:PayloadAction<string>)=>{
            state.user.username= action.payload;
        },
        password:(state, action:PayloadAction<string>)=>{
                state.user.password= action.payload
        },
        email:(state, action:PayloadAction<string>)=>{
                state.user.email= action.payload
        },

        
    }
})

export const {newUser, existingUser,username, password, email} = loginSlice.actions;

export const selectUser = (state:RootState) =>state.auth.login;

export default loginSlice.reducer