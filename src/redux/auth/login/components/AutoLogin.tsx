import { StyleSheet, TouchableOpacity, View} from "react-native"
import { LogintypeBtn } from "./features/logintype/LogintypeBtn";
import { useEffect } from "react";
import { useAppDispatch } from "../../../hooks/Redux";
import { autologin } from "./features/submit/submitSlice";
import { toautologin } from "./features/logintype/logintypeSlice";

export default function AutoLogin(){
    const dispatch= useAppDispatch()
    useEffect(()=>{
        dispatch(autologin())
        dispatch(toautologin())
    })
    return(
        <View style={style.typebtncont}>
             <View style={style.cont}>
                
            </View>
            <LogintypeBtn/>
        </View>
       
    )
}


const style = StyleSheet.create({
    typebtncont: {
        position: "relative",
        bottom: 0,
        width: 300,
        height: 155,
        alignItems: "flex-start",
        paddingLeft: 15,
    },
    cont:{
        width: "100%",
        height: 120,
        borderRadius: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        position: "absolute",
        backgroundColor: "lightgrey",
        top:0,
        left:0,
    }
  })