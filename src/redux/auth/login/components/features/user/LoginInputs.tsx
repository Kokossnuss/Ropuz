import {
    TextInput,
    StyleSheet
  } from "react-native";
import { useAppDispatch } from "../../../../../hooks/Redux";
import { nameState, mailState, pwState } from "./userSlice";


  export const Username=()=>{
    const dispatch= useAppDispatch()
    return(
        <TextInput
          onChangeText={(Text) => dispatch(nameState(Text))}
          style={style.input}
          placeholder="username"
        />
    )
  }

  export const Email=()=>{
    const dispatch= useAppDispatch()
    return(
        <TextInput
          onChangeText={(Text) => dispatch(mailState(Text))}
          style={style.input}
          placeholder="E-Mail"
        />
    )
  }

  export const Password= ()=>{
    const dispatch= useAppDispatch()
    return(
        <TextInput
          onChangeText={(Text) => dispatch(pwState(Text))}
          style={style.input}
          placeholder="password"
        />
    )
  }



  const style = StyleSheet.create({
    input: {
        width: "80%",
        borderBottomWidth: 3,
        borderStyle: "solid",
        borderColor: "black",
        fontFamily: "Play-Regular",
        height: 30,
        fontSize: 25,
        marginTop: 50,
      },
  })