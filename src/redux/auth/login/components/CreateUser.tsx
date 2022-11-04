import {
    View,
    KeyboardAvoidingView,
    StyleSheet
  } from "react-native";
  import { Username, Email, Password } from "./features/user/LoginInputs";
  import { LogintypeBtn } from "./features/logintype/LogintypeBtn";
  import { Submitbtn } from "./features/submit/submitBtn";
  import { useAppDispatch } from "../../../hooks/Redux";
  import { createuser } from "./features/submit/submitSlice";
  import { useEffect } from "react";


  export default function CreateUser(){
    const dispatch = useAppDispatch()
    useEffect(()=>{
      dispatch(createuser())
    })
  return (
    <KeyboardAvoidingView behavior="padding">
      <View style={style.cont}>
        <Username/>
        <Email/>
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
      height: 400,
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