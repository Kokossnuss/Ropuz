import {
    View,
    KeyboardAvoidingView,
    StyleSheet
  } from "react-native";
  import { Username, Password } from "./features/user/LoginInputs";
  import { LogintypeBtn } from "./features/logintype/LogintypeBtn";
  import { Submitbtn } from "./features/submit/submitBtn";
  import { useEffect } from "react";
  import { useAppDispatch } from "../../../hooks/Redux";
  import { userlogin } from "./features/submit/submitSlice";

  export default function UserLogin(){
    const dispatch= useAppDispatch();
    useEffect(()=>{
      dispatch(userlogin())
    })
    
  return (
    <KeyboardAvoidingView behavior="padding">
      <View style={style.cont}>
        <Username/>
        <Password/>
        <Submitbtn/>
        <LogintypeBtn/>
      </View>
    </KeyboardAvoidingView>
  );
  }

  const style = StyleSheet.create({
    cont: {
      width: 300,
      height: 330,
      borderStyle: "solid",
      borderWidth: 3,
      borderColor: "black",
      borderRadius: 10,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      position: "relative",
    },
    
  })