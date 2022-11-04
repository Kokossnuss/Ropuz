import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOGINTYPE_TOKEN } from "../../utils/constant";

export const _getLOGINTYPE= async()=>{
    try{
        return await AsyncStorage.getItem(LOGINTYPE_TOKEN)
    }catch(e){
        console.log(e)
    }
    console.log("LOGINTYPE_GET")
}

export const _setLOGINTYPE= async(val:string)=>{
    try{
        return await AsyncStorage.setItem(LOGINTYPE_TOKEN, val)
    }catch(e){
        console.log(e)
    }
    console.log("LOGINTYPE_SET")
}

export const _removeLOGINTYPE= async()=>{
    try{
        return await AsyncStorage.removeItem(LOGINTYPE_TOKEN)
    }catch(e){
        console.log(e)
    }
    console.log("LOGINTYPE_REMOVED")
}