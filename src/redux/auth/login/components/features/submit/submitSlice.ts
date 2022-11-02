import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { RootState } from "../../../../../Store";

interface submitType{
   loggedIn: boolean,
    message: string,
}

const initialState:submitType={
    loggedIn: false,
    message: "User Login"
}

export const submitSlice=createSlice({
    name: "submit",
    initialState,
    reducers:{
        
    }
})

export const {}= submitSlice.actions;
export const selectSubmit = (state:RootState)=> state.auth.login.submit;
export default submitSlice.reducer;