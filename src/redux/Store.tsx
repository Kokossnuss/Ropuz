import { configureStore, applyMiddleware, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";


export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware=>{
      getDefaultMiddleware({
        
      })
    }
  })
  
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch