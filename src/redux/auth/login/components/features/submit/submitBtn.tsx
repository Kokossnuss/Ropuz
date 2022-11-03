import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useAppDispatch, useAppSelector } from "../../../../../hooks/Redux";
import { _logInThunk, _signUpThunk } from "./subtmitThunks";



export const Submitbtn= ()=>{
    const btntext= useAppSelector(state=>state.auth.login.type.submitBtnName);
    const user = useAppSelector(state=>state.auth.login.user)
    const dispatch = useAppDispatch()
    const submitType= (type:string)=>{
          switch(type){
            case 'Sign up':
              dispatch(_signUpThunk(user))
            break;
            case 'Login':
              dispatch(_logInThunk(user));
            break;
          }
    }
    return(
        <TouchableOpacity onPress={()=>submitType(btntext)} style={style.btn}>
          <Text style={style.text}>{btntext}</Text>
        </TouchableOpacity>
    )
}


const style=StyleSheet.create({
    btn: {
        position: "absolute",
        bottom: 90,
        right: 30,
        width: 80,
        height: 40,
        backgroundColor: "lime",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
      },
      text:{
        fontFamily: "Play-Regular",
        fontSize: 18,
      }
})