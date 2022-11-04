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
    process: 'auto', // will be changed later to get config in splashscreen
}

export const logintypeSlice= createSlice({
    name: "logintype",
    initialState,
    reducers:{
        typeHandler:(state, action:PayloadAction<string|undefined>)=>{
            switch(action.payload){
                case 'signUp':
                    state.process ='login';
                    state.typeBtnName= "Create new User";
                    state.submitBtnName= "Login";
                break;
                case 'login':
                    state.process='signUp';
                    state.typeBtnName= "existing User";
                    state.submitBtnName= "Sign up";
                break;
                case 'auto':
                    state.process='login';
                    state.typeBtnName= "Create new User";
                    state.submitBtnName= "Login";
            }
        }, 
        toautologin:state=>{
            state.process='auto',
            state.typeBtnName='Regular Login',
            state.submitBtnName= ''
        }
    }
})


export const {typeHandler, toautologin} = logintypeSlice.actions
export const selectlogintype = (state:RootState)=> state.auth.login.type
export default logintypeSlice.reducer