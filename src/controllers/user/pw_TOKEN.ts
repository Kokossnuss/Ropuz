import AsyncStorage from "@react-native-async-storage/async-storage";
import { PW_TOKEN } from "../../utils/constant";

export const _getPW= async()=>{
    try{
        return await AsyncStorage.getItem(PW_TOKEN)
    }catch(e){
        console.log(e)
    }
    console.log("PW_GET")
}

export const _setPW= async(val:string)=>{
    try{
        return await AsyncStorage.setItem(PW_TOKEN, val)
    }catch(e){
        console.log(e)
    }
    console.log("PW_SET")
}

export const _removePW= async()=>{
    try{
        return await AsyncStorage.removeItem(PW_TOKEN)
    }catch(e){
        console.log(e)
    }
    console.log("PW_REMOVED")
}