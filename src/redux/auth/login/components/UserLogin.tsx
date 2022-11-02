import {
    View,
    KeyboardAvoidingView,
    StyleSheet
  } from "react-native";
  import { Username, Password } from "./features/user/LoginInputs";
  import { LogintypeBtn } from "./features/logintype/LogintypeBtn";
  import { Submitbtn } from "./features/submit/submitBtn";

  export default function UserLogin(){
   
  return (
    <KeyboardAvoidingView behavior="padding">
      <View style={style.cont}>
        <Username/>
        <Password/>
        <Submitbtn/>
        <LogintypeBtn/>
        <KeyboardAvoidingView />
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