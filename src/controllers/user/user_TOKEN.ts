import AsyncStorage from "@react-native-async-storage/async-storage";
import { USER_TOKEN } from "../../utils/constant";

export const _getUSER= async()=>{
    try{
        return await AsyncStorage.getItem(USER_TOKEN)
    }catch(e){
        console.log(e)
    }
    console.log('USER_get')
}

export const _setUSER= async(data:string)=>{
    try{
        return await AsyncStorage.setItem(USER_TOKEN, data)
    }catch(e){
        console.log(e)
    }
    console.log('USER_set')
}

export const _removeUSER= async()=>{
    try{
        return await AsyncStorage.removeItem(USER_TOKEN)
    }catch(e){
        console.log(e)
    }
    console.log('USER_remove')
}