import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { RootState } from "../../../../../Store";

interface logintypeStates{
    typeBtnName: string,
    submitBtnName: string,
    process?: string,
}

export const initialState:logintypeStates={
    typeBtnName: "Create new User",
    submitBtnName: "Login",
    process: 'login',
}

export const logintypeSlice= createSlice({
    name: "logintype",
    initialState,
    reducers:{
        typeHandler:(state, action:PayloadAction<string>)=>{
            switch(action.payload){
                case 'existing User':
                    state.process ='login';
                    state.typeBtnName= "Create new User";
                    state.submitBtnName= "Login";
                break;
                case 'Create new User':
                    state.process='signUp';
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