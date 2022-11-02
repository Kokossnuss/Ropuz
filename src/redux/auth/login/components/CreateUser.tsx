import {
    View,
    KeyboardAvoidingView,
    StyleSheet
  } from "react-native";
  import { Username, Email, Password } from "./features/user/LoginInputs";
  import { LogintypeBtn } from "./features/logintype/LogintypeBtn";
  import { Submitbtn } from "./features/submit/submitBtn";


  export default function CreateUser(){

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