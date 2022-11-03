import AsyncStorage from "@react-native-async-storage/async-storage";
import { AUTH_TOKEN } from "../../utils/constant";

export const _getAUTH=async()=>{
    try{
        return await AsyncStorage.getItem(AUTH_TOKEN)
    }catch(e){
        console.log(e)
    }
};

export const _setAUTH=async(jwt:string)=>{
    try{
        console.log('out')
        return await AsyncStorage.setItem(AUTH_TOKEN, jwt)
    }catch(e){
        console.log(e)
    }
}

export const _removeAUTH=async()=>{
    try{
        return await AsyncStorage.removeItem(AUTH_TOKEN)
    }catch(e){
        console.log(e)
    }
}