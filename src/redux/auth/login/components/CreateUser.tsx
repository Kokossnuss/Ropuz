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
    createUser,
    usernamest,
    emailst,
    passwordst,
  } from "../loginSlice";
  import { style } from "../Login";


  export default function CreateUser(){
    const dispatch = useAppDispatch();

  return (
    <KeyboardAvoidingView behavior="padding">
      <View style={style.cont}>
        <TextInput
          onChangeText={(Text) => dispatch(usernamest(Text))}
          style={style.input}
          placeholder="username"
        />
        <TextInput
          onChangeText={(Text) => dispatch(emailst(Text))}
          style={style.input}
          placeholder="E-Mail"
        />
        <TextInput
          onChangeText={(Text) => dispatch(passwordst(Text))}
          style={style.input}
          placeholder="password"
        />
        <TouchableOpacity onPress={()=>dispatch(createUser())} style={[style.btn, { bottom: 20 }]}>
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