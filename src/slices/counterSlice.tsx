import {createSlice} from "@reduxjs/toolkit";
import { RootState } from "../Store";

interface counterState {
  value: number  
}

const initialState= {
    value: 0
  } as counterState

export const counterSlice = createSlice({
    name: 'Counter',
    initialState,
    reducers:{
        increment: state =>{
            state.value +=1
        },
        decrement: state =>{
            state.value -=1
        }
    }
})

export const {increment, decrement} = counterSlice.actions

export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer