import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { RootState } from "../../../../../Store";


interface userType{
    username: string|null,
    email?: string,
    password: string|null,
}

export const initialState:userType={
    username: null,
    password: null,
}

export const userSlice= createSlice({
    name:'user',
    initialState,
    reducers:{
        nameState: (state, action: PayloadAction<string>)=>{
            state.username= action.payload;
        },
        mailState: (state, action: PayloadAction<string>)=>{
            state.email= action.payload;
        },
        pwState: (state, action: PayloadAction<string>)=>{
            state.password= action.payload;
        }
    }
})

export const {nameState, mailState, pwState} = userSlice.actions;
export const selectUser = (state: RootState)=> state.auth.login.user;
export default userSlice.reducer;