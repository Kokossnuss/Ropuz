import {
    View,
    TextInput,
    TouchableOpacity,
    Text,
    KeyboardAvoidingView,
  } from "react-native";
  import { useAppDispatch} from "../../../hooks/Redux";
  import {
    existingUser,
    username,
    email,
    password,
  } from "../loginSlice";
  import { style } from "../Login";
  import { _signIn } from "../loginSlice";


  export default function CreateUser(){
    const dispatch = useAppDispatch();

  return (
    <KeyboardAvoidingView behavior="padding">
      <View style={style.cont}>
        <TextInput
          onChangeText={(Text) => dispatch(username(Text))}
          style={style.input}
          placeholder="username"
        />
        <TextInput
          onChangeText={(Text) => dispatch(email(Text))}
          style={style.input}
          placeholder="E-Mail"
        />
        <TextInput
          onChangeText={(Text) => dispatch(password(Text))}
          style={style.input}
          placeholder="password"
        />
        <TouchableOpacity onPress={()=>dispatch(_signIn())} style={[style.btn, { bottom: 20 }]}>
          <Text style={[style.t, { textDecorationLine: "none" }]}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispatch(existingUser())}
          style={[style.nbtn, { bottom: 30, left: 30 }]}
        >
          <Text style={style.t}>existing User</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
  }