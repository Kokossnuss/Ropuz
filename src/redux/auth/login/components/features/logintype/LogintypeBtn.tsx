import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useAppDispatch, useAppSelector } from "../../../../../hooks/Redux";
import { typeHandler } from "./logintypeSlice";


export const LogintypeBtn= ()=>{
    const dispatch= useAppDispatch()
    const textval= useAppSelector(state=>state.auth.login.type.typeBtnName)
    return(
        <TouchableOpacity onPress={()=>dispatch(typeHandler(textval))} style={style.btn}>
            <Text style={style.btnname}>
                {textval}
            </Text>
        </TouchableOpacity>
    )
}


const style = StyleSheet.create({   
    btnname: {
        fontFamily: "Play-Regular",
        fontSize: 18,
        textDecorationLine: "underline",
      },
    btn: {
        position: "absolute",
        bottom: 40,
      }
})

