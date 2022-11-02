import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { RootState } from "../../../../../Store";

interface logintypeStates{
    typeBtnName: string,
    submitBtnName: string,
    newUser: boolean,
}

export const initialState:logintypeStates={
    typeBtnName: "Create new User",
    submitBtnName: "Login",
    newUser: false,
}

export const logintypeSlice= createSlice({
    name: "logintype",
    initialState,
    reducers:{
        typeHandler:(state, action:PayloadAction<boolean>)=>{
            switch(action.payload){
                case true:
                    state.newUser =false;
                    state.typeBtnName= "Create new User";
                    state.submitBtnName= "Login";
                break;
                case false:
                    state.newUser=true;
                    state.typeBtnName= "existing User";
                    state.submitBtnName= "Sign up";
                break;
            }
        }  
    }
})


export const {typeHandler} = logintypeSlice.actions
export const selectlogintype = (state:RootState)=> state.auth.login.type
export default logintypeSlice.reducer