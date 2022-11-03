import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { RootState } from "../../../../../Store";
import { _signUpThunk, _logInThunk } from "./subtmitThunks";

interface submitType{
   loggedIn: boolean,
    message: string,
    jwt?: string|void,
}

const initialState:submitType={
    loggedIn: false,
    message: "User Login"
}

export const submitSlice=createSlice({
    name: "submit",
    initialState,
    reducers:{
        
    },
    extraReducers: builder=>{
        builder
        .addCase(_signUpThunk.pending, state=>{
            state.message= 'Signing in'
        })
        .addCase(_signUpThunk.fulfilled, (state, action:PayloadAction<string>)=>{
            state.jwt = action.payload;
            state.message= 'Loged in';
        })
        .addCase(_signUpThunk.rejected, (state)=>{
            state.message= 'Invalid Sign up Form'
        })
        .addCase(_logInThunk.pending, state=>{
            state.message= 'logging in'
        } )
        .addCase(_logInThunk.fulfilled, (state, action:PayloadAction<string>)=>{
            state.jwt = action.payload;
            state.message= 'Loged in';
        })
        .addCase(_logInThunk.rejected, state=>{
            state.message= 'invalid Login information'
        })
    }
})

export const {}= submitSlice.actions;
export const selectSubmit = (state:RootState)=> state.auth.login.submit;
export default submitSlice.reducer;